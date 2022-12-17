var data1 = [
    {
        img: "./fonts/svg/chanpingku.svg",
        p: "产品库"
    }

]
var snav1 = document.querySelector(".snav1");
for (let i = 0; i < data1.length; i++) {
    let li1 = document.createElement("li");
    li1.innerHTML = `
<img src="${data1[i].img}">
<p>${data1[i].p}</p>`;
    snav1.appendChild(li1);
}
var data2 = [
    {
        img: "./fonts/svg/CPU.svg",
        p: "桌面CPU天梯图"
    }, {
        img: "./fonts/svg/GPU.svg",
        p: "显卡天梯图"
    }, {
        img: "./fonts/svg/shouji.svg",
        p: "手机跑分榜"
    }, {
        img: "./fonts/svg/dx-ok.svg",
        p: "DXOMark榜单"
    }, {
        img: "./fonts/svg/xny.svg",
        p: "新能源汽车续航榜"
    },
]
var snav2 = document.querySelector(".snav2");
for (let i = 0; i < data2.length; i++) {
    let li2 = document.createElement("li");
    li2.innerHTML = `
<img src="${data2[i].img}">
<p>${data2[i].p}</p>`;
    snav2.appendChild(li2);
}

var data3 = [
    {
        img: "./fonts/svg/gouwu.svg",
        p: "最会买"
    }, {
        img: "./fonts/svg/gongju.svg",
        p: "微信工具大全"
    }, {
        img: "./fonts/svg/neice.svg",
        p: "微信内测助手"
    }, {
        img: "./fonts/svg/gaikuang.svg",
        p: "本机应用概况"
    }, {
        img: "./fonts/svg/weixing.svg",
        p: "卫星导航搜索"
    },
]
var snav3 = document.querySelector(".snav3");
for (let i = 0; i < data3.length; i++) {
    let li3 = document.createElement("li");
    li3.innerHTML = `
<img src="${data3[i].img}">
<p>${data3[i].p}</p>`;
    snav3.appendChild(li3);
}

var data4 = [
    {
        img: "./fonts/svg/baogao.svg",
        p: "2019年度报告"
    }, {
        img: "./fonts/svg/fengmian.svg",
        p: "之家封面"
    }
]
var snav4 = document.querySelector(".snav4");
for (let i = 0; i < data3.length; i++) {
    let li4 = document.createElement("li");
    li4.innerHTML = `
<img src="${data4[i].img}">
<p>${data4[i].p}</p>`;
    snav4.appendChild(li4);
}
