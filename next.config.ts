import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/campos",
        destination:
          "https://wa.me/5534996932413?text=Quero%20ativar%20meu%20%2ACupom%20de%20desconto%2A%2C%20aqui%20na%20%2AClinica%20Campos%2A%21",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
