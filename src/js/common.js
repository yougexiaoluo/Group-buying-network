document.body.style.height = window.innerHeight + "px";

/*动态改变根元素字体大小*/
function recalc() {
  // 获取客户端宽度
  var clientWidth = document.documentElement.clientWidth;
  if (!clientWidth) return;
  // 字体大小   = 1个rem单位表示多少个像素（设备的宽度   /设计宽度）
  document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';

}

function initRecalc() {
  recalc();
  // if(浏览器支持横竖屏切换的事件){横竖屏事件}else{ resize事件 }
  //判断设备是否处于横屏状态        //横屏事件            //窗口变化事件
  var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}
initRecalc();



// 点击底部导航获取文本传递到对应的页面
var lis = Array.from(document.querySelectorAll('.footer-nav li'));
var footerNav = document.querySelector('.footer-nav');
var obj = {}
var strObj = '';
var getText = function (event) {
  // 有兼容性
  var ev = event || window.event;
  // ie 不支持 event.target
  var target = ev.target || ev.srcElement;
  // 当前页面路径
  var currentPage = location.pathname;

  while (target !== footerNav) {
    if (target.tagName.toLowerCase() == 'li') {
      var targetText = target.innerText;
      // console.log(targetText);
      obj.title = target.innerText;
      // 将对象转换成json格式
      strObj = JSON.stringify(obj);
      // console.log(strObj);
      // 将数据通过localStorage的方式传数据
      localStorage.setItem('title', strObj);
      break;
    }
    // 重新指向父节点
    target = target.parentNode;
  }
}

// 使用时间代理的方式 -- 绑定事件
footerNav.addEventListener('touchend', getText, false);