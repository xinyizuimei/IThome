var data = [{
    icon: "#icon-shangcheng",
    lianjie: "金币商城"
},
{
    icon: "#icon-renwu",
    lianjie: "金币任务"
}
]
var list = document.querySelector(".list");
for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `   
    <svg class="icon" aria-hidden="true">
    <use xlink:href="${data[i].icon}"></use>
    </svg>
    <a href="">${data[i].lianjie}</a>
    `;
    list.appendChild(li);
}

var data2 = [{
    icon: "#icon-guanzhu",
    lianjie: "我的关注"
},
{
    icon: "#icon-xiaoxi1",
    lianjie: "我的消息"
}
]
var list2 = document.querySelector(".list2");
for (let i = 0; i < data2.length; i++) {
    let li2 = document.createElement("li2");
    li2.innerHTML = `   
   <li>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="${data2[i].icon}"></use>
    </svg>
    <a href="">${data2[i].lianjie}</a>
 </li>
    `;
    list2.appendChild(li2);
}

var data3 = [{
    icon: "#icon-zichan",
    lianjie: "我的资产"
},
{
    icon: "#icon-shezhi",
    lianjie: "设置"
},
{
    icon: "#icon-fan-kui",
    lianjie: "帮助与反馈"
},
{
    icon: "#icon-guanyu",
    lianjie: "关于"
},
]
var list3 = document.querySelector(".list3");
for (let i = 0; i < data3.length; i++) {
    let li3 = document.createElement("li3");
    li3.innerHTML = `   
   <li>
    <svg class="icon" aria-hidden="true">
    <use xlink:href="${data3[i].icon}"></use>
    </svg>
    <a href="">${data3[i].lianjie}</a>
 </li>
    `;
    list3.appendChild(li3);
}

