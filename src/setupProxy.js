const { createProxyMiddleware } = require('http-proxy-middleware');

// https: //api-bfdev.staging.ukuaiqi.com/bifang/conf/jxs/conf.js   // 精线索
// https: //api-bfdev.staging.ukuaiqi.com/bifang/conf/crm/conf.js   // crm 3.0
// https: //api-bfdev.staging.ukuaiqi.com/bifang/conf/conf/conf.js  // 系统设置
// https: //api-bfdev.staging.ukuaiqi.com/bifang/conf/user/conf.js  // 用户中心

// eslint-disable-next-line
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/bifang', {
      target: 'https://api-bfdev.staging.ukuaiqi.com',
      changeOrigin: true,
    }),
  );
};
