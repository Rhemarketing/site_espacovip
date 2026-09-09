# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine AS base

# 1. Dependências
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalação das dependências com cache otimizado
COPY package.json package-lock.json ./
RUN npm ci

# 2. Build da aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita a telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# 3. Imagem final de produção (leve e segura)
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia arquivos estáticos públicos
COPY --from=builder /app/public ./public

# Copia build standalone e assets gerados
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# O server.js é gerado pelo Next.js com output: "standalone"
CMD ["node", "server.js"]
