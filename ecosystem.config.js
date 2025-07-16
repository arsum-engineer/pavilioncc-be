const path = require('path');

module.exports = {
  apps: [
    {
      name: 'PavilionCCApp',
      script: 'dist/src/main.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      restart_delay: 1000,
      kill_timeout: 3000,
      output: path.join(
        __dirname,
        'var/log/pavilioncc/_backend/pm2/',
        'express.log',
      ),
      error: path.join(
        __dirname,
        'var/log/pavilioncc/_backend/pm2/',
        'express_error.log',
      ),
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_development: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
    },
    // {
    //   name: 'SocketIOApp',
    //   script: 'socketbuild/socketMain.js',
    //   instances: 1,
    //   exec_mode: 'fork',
    //   autorestart: true,
    //   restart_delay: 1000,
    //   kill_timeout: 3000,
    //   output: path.join(__dirname, 'var/log/pavilioncc/_backend/pm2/', 'socket.log'),
    //   error: path.join(__dirname, 'var/log/pavilioncc/_backend/pm2/', 'socket_error.log'),
    //   log_date_format: 'YYYY-MM-DD HH:mm:ss',
    // },
  ],
};
