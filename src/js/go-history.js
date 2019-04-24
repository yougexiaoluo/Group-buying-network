// 获取返回按钮
var back = document.querySelector('#back');
back.addEventListener('touchend', function () {
  window.history.back(-1);
})