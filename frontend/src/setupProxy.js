const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://workout-app-kappa.vercel.app',
      changeOrigin: true,
    })
  );
};