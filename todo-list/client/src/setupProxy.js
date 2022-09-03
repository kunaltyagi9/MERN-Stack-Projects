const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy('/api/todos/**', { target: 'http://localhost:5566' }));
  app.use(proxy('/api/**', { target: 'http://localhost:5566' }));
};
