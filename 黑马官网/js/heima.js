 // 轮播图
 var box = document.getElementById('box');
 var screen = document.getElementById('screen'); // 最外边框大盒子
 var ul = screen.children[0]; // 轮播图列表
 var lunboList = ul.children; // 轮播图li元素列表
 //console.log(lunboList);
 var slideshow = screen.children[1]; // 轮播图圆点盒子
 var lunboLis = slideshow.children; // 轮播图圆点列表
 var left = document.getElementById('left'); // 上一页
 var right = document.getElementById('right'); // 下一页


 // 上一页
 var index = 0; // 声明变量存储图片的下标
 left.onclick = function() {
     if (index == 6) {
         return;
     };
     index++;
     for (var i = 0; i < lunboLis.length; i++) {
         lunboLis[i].style.background = " rgba(0, 0, 0, .2) "
     }
     lunboLis[index].style.background = " #007bff"
     animateMove(ul, -index * screen.offsetWidth);
     box.style.background = lunboList[index].getAttribute('bgc');

 }

 // 下一页
 right.onclick = function() {
     if (index == 0) {
         return;
     }
     index--;
     for (let i = 0; i < lunboLis.length; i++) {
         lunboLis[i].style.background = " rgba(0, 0, 0, .2) "
     }
     lunboLis[index].style.background = " #007bff"
     animateMove(ul, -index * screen.offsetWidth);
     box.style.background = lunboList[index].getAttribute('bgc');


 }

 // 模块二
 var ul1 = document.getElementById("ul1");
 var showDetail = document.getElementById("showDetail");
 var lis = ul1.children;

 // for (var i = 0; i < lis.length; i++) {
 //     lis[i].onmouseover = function() {
 //         console.log(this.innerText);
 //         showDetail.style.visibility = "visible";
 //         showDetail.innerText = this.innerText
 //     }
 //     lis[i].onmouseout = function() {
 //         showDetail.style.visibility = "hidden";
 //     }
 // }

 var page = {
     init: function() {
         this.handleClick();
     },
     handleClick: function() {
         for (var i = 0; i < lis.length; i++) {
             lis[i].onmouseover = function() {
                 //console.log(this.innerText);
                 showDetail.style.visibility = "visible";
                 showDetail.innerText = this.innerText
             }
             lis[i].onmouseout = function() {
                 showDetail.style.visibility = "hidden";
             }
         }
     }
 }
 page.init();


 var ul2 = document.getElementById('ul2');
 var liList = document.getElementsByClassName('ad');
 var ilist = document.getElementsByClassName("look-detail")
 var aList = document.getElementsByClassName("fg")
     //console.log(aList);
 for (let i = 0; i < liList.length; i++) {
     liList[i].onmouseover = function() {
         //console.log(this.children[2]);
         var objThis = this.children[2];
         animationSlow(objThis, { top: 70 });
         aList[i].style.borderColor = ' red';
     }
     liList[i].onmouseout = function() {
         var objThis = this.children[2];
         animationSlow(objThis, { top: -30 });
         aList[i].style.borderColor = '';
     }
 }
 var ul3 = document.getElementById('ul3');
 var lists = ul3.children;
 // console.log(lists);
 for (let i = 0; i < lists.length; i++) {
     lists[i].onmouseover = function() {
         //console.log(this.children);
         //console.log(this.children[0].children[0]);
         this.children[0].children[0].style.background = "red";
     }
     lists[i].onmouseout = function() {
         this.children[0].children[0].style.background = '';
     }
 }


 // 模块三
 var ul4 = document.getElementById('ul4');
 var lisLeft = ul4.children;
 var ul5 = document.getElementById('ul5');
 var listRight = ul5.children;
 var lists = [...lisLeft, ...listRight];
 //console.log(lists);

 var conAll = document.getElementsByClassName('con');
 //console.log(conLeft);
 for (var i = 0; i < lists.length; i++) {
     lists[i].setAttribute('index', i);
     lists[i].onmouseover = function() {
         var index = this.getAttribute('index');
         // console.log(index);
         for (var j = 0; j < lists.length; j++) {
             if (index == j) {
                 conAll[j].style.display = 'inline';
                 lists[j].style.background = 'red';

             } else {
                 conAll[j].style.display = 'none';
                 lists[j].style.background = '';
             }
         }
     }
 }



 // 模块四
 var javaeeBa = document.getElementById('javaeeBa');
 var javaeeSan = document.getElementById('javaeeSan');
 var yiZT = document.getElementById('yiZT');
 var hideShow = document.getElementById('hideShow');
 var salarup = document.getElementById('salaryup');
 hideShow.onclick = function() {
     javaeeBa.style.display = 'block';
     javaeeBa.style.borderTop = '1px dashed gray'
     javaeeSan.style.display = 'block';
     javaeeSan.style.borderTop = '1px dashed gray'
     yiZT.style.display = 'block';
     yiZT.style.borderTop = '1px dashed gray';
     this.style.display = 'none';
     salarup.style.display = 'block';
 }
 salarup.onclick = function() {
     javaeeBa.style.display = 'none';
     javaeeBa.style.borderTop = ''
     javaeeSan.style.display = 'none';
     javaeeSan.style.borderTop = ''
     yiZT.style.display = 'none';
     yiZT.style.borderTop = '';
     hideShow.style.display = 'block';
     this.style.display = 'none';
 }