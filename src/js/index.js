var homeObj = {
  "code": 1,
  "live": [{
      "id": 1,
      "imgUrl": './src/assets/images/home/food.jpg',
      "title": '万岁寿司（正佳店）',
      "distance": '<100m',
      "currency": '[100店通用]',
      "setMeal": '双人套餐',
      "price": "88.00",
      "salesVolume": 1000
    },
    {
      "id": 2,
      "imgUrl": './src/assets/images/home/food2.jpg',
      "title": '周黑鸭（正佳店）',
      "distance": '<130m',
      "currency": '[100店通用]',
      "setMeal": '双人套餐/单人套餐',
      "price": "68.00",
      "salesVolume": 50
    },
    {
      "id": 3,
      "imgUrl": './src/assets/images/home/food.jpg',
      "title": '万岁寿司（正佳店）',
      "distance": '<800m',
      "currency": '[10店通用]',
      "setMeal": '单人套餐',
      "price": "24.00",
      "salesVolume": 1000
    },
    {
      "id": 4,
      "imgUrl": './src/assets/images/home/food2.jpg',
      "title": '周黑鸭（正佳店）',
      "distance": '>1000km',
      "currency": '[20店通用]',
      "setMeal": '双人套餐',
      "price": "888.00",
      "salesVolume": 1
    },
    {
      "id": 5,
      "imgUrl": './src/assets/images/home/food.jpg',
      "title": '万岁寿司（正佳店）',
      "distance": '100m',
      "currency": '[100店通用]',
      "setMeal": '单人套餐',
      "price": "28.00",
      "salesVolume": 500
    }
  ]
}
// 模板
var html = '';

// 获取需要渲染的节点
var productParent = document.querySelector('.product');

// 通过遍历的方式拼接模板
// homeObj.live.forEach(function (v, i) {
//   html += `
//           <li class="product-item item-0${v.id}">
//           <img src="${v.imgUrl}" alt="">
//           <div class="item-right">
//             <div class="product-name clearfix">
//               <a class="fl" href="./src/pages/product.html">${v.title}</a>
//               <span class="fr">${v.distance}</span>
//             </div>
//             <div class="meal">
//               <span>${v.currency}</span><span>${v.setMeal}</span>
//             </div>
//             <div class="price-wrap clearfix">
//               <span class="price fl">&yen; ${v.price}</span>
//               <span class="volume fr">已售 ${v.salesVolume}</span>
//             </div>
//           </div>
//           </li>
//          `;
// })
//追加到ul中
// productParent.innerHTML = html;
// console.log(html);