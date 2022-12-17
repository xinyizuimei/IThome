var swiper = new Swiper('#slide', {
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});
var data = [{

    title: "网约车司机为救婴儿连闯红灯家属拒作证，滴滴：已向警方提供证明还原真相 ",
    img: "./images/wangyueche.jpg",
    date: "12:45",
    LianJie: "./news.html"

},
{

    title: "腾讯 QQ 调查是否希望推 “已读”功能，网友喊停：你出我就卸载",
    img: "./images/qq.jpg",
    date: "12:00",
    LianJie: "./news2.html"

},
{

    title: "LG“彩虹”柔性屏手机曝光：两边拉伸展开，将于明年发布",
    img: "./images/LG.jpeg",
    date: "11:45",
    LianJie: "#"

},
{

    title: "国家量子通信网络“成渝干线”骨干网将建设",
    img: "./images/mozi.jpg",
    date: "11:20",
    LianJie: "#"

},
{

    title: "微软 Win10 21H2 大更新将完善任务栏自定义选项，但未激活版本无法设置",
    img: "./images/win10.jpg",
    date: "11:10",
    LianJie: "#"

},
{

    title: "再见了：摩拜App今晚正式停止服务",
    img: "./images/mobai.jpg",
    date: "11:00",
    LianJie: "#"

},
{

    title: "苹果 iOS 14.3/iPadOS 14.3 正式版发布：支持 AirPods Max、iPhone 12 Pro ",
    img: "./images/pingguo.jpg",
    date: "10:50",
    LianJie: "#"

},
{

    title: "CDPR就《赛博朋克2077》向主机玩家道歉：努力优化，开放退款 ",
    img: "./images/sai.jpg",
    date: "10:40",
    LianJie: "#"

},


]
var news = document.querySelector(".news");
for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
        
<div class=new>
   
    <h3><a href="${data[i].LianJie}">${data[i].title}</a></h3>
    <p>${data[i].date}</p>
      </div>
   <img src="${data[i].img}">
    `;
    news.appendChild(li);

}
