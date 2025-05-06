module.exports = {
  apps: [
    {
      name: "api-willians-invest", // Nome do seu app no PM2
      script: "dist/main.js", // Ponto de entrada (compilado do NestJS)
      instances: "max", // Usa todos os núcleos da CPU
      exec_mode: "cluster", // Modo cluster para melhor performance
      autorestart: true, // Reinicia automaticamente se crashar
      watch: false, // Não observa mudanças (em produção)
      max_memory_restart: "1G", // Reinicia se usar mais de 1GB RAM
      env: {
        NODE_ENV: "production", // Ambiente de produção
        PORT: 3000, // Porta do seu projeto atual
        DATABASE_URL:
          "mysql://root:Masterfut%40123@89.116.73.70:3307/willians_invest_db",
      },
      env_production: {
        NODE_ENV: "production",
      },
      // Configurações de log (opcional)
      error_file: "/var/log/pm2/api-willians-invest-error.log",
      out_file: "/var/log/pm2/api-willians-invest-out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
