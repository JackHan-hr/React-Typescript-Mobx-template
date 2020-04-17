const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// 本地内网穿透时开启
// app.use(
//   createProxyMiddleware('/bifang', {
//     target: 'https://api-bfdev.staging.ukuaiqi.com',
//     changeOrigin: true,
//   }),
// );

app.use('/', serveStatic(path.join(__dirname, './build')));
app.use('/*', serveStatic(path.join(__dirname, './build/index.html')));

app.listen(9050);
