const component = require('./component.js')
const echart = require('echarts')


document.body.appendChild(component());
window.onload = function() {
    console.log('=====页面全量刷新啦======')
}
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境才会执行');
}

/**
 * HMR 热重启
 * 
 */
if (module.hot) {
  module.hot.accept('./component.js', function() {
    console.log('更新了 componnet 模块');
  })
}


/**
 * 注册我们的 Service Worker
 * 运行 npm run test:prod， 访问8001， 关闭服务器刷新页面，即可看到效果。
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}