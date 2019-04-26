// 获取返回按钮
var back = document.querySelector('#back');
back.addEventListener('touchend', function () {
  window.history.back(-1);
})


var t = document.querySelector('header .title');
var strObj = JSON.parse(localStorage.getItem('title'));
t.innerText = strObj.title;