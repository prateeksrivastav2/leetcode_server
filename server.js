const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var CORS=require('cors')
const app = express();
// yarn add http-proxy-middleware
app.use(CORS());
// Configure the proxy middleware
const apiProxy = createProxyMiddleware('/api', {
  target: 'https://alfa-leetcode-api.vercel.app',
  changeOrigin: true,  // Add this line to handle CORS
  pathRewrite: { '^/api': '' },
});

// Use the proxy middleware
app.use('/api', apiProxy);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
