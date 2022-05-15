window.onload = function(){
    var video = ["../image/home/shipin/C4D视频.mp4","../image/home/shipin/photoshop.mp4",
        "../image/home/shipin/web.mp4","../image/home/shipin/python.mp4",
        "../image/home/shipin/wuli.mp4","../image/home/shipin/pr.mp4"];

    var img = ["../image/home/shipin/mo.png","../image/home/shipin/ps.jpg",
        "../image/home/shipin/web.jpg","../image/home/shipin/py.jpg",
        "../image/home/shipin/物理.jpg","../image/home/shipin/pr.jpg"];

    var Txt = ["B站Momentor C4D公开课","敬伟PS教程全集","web前端开发框架完整视频教程",
    "Python教程全套","【热学】大学物理期末复习重点","B站最用心（没有之一）的PR公开课程，耗时千余小时开发"];
    var src =["https://www.bilibili.com/video/BV1ur4y1T72V","https://www.bilibili.com/video/BV1YW411e7n5",
        "https://www.bilibili.com/video/BV1yx411d7Rc","https://www.bilibili.com/video/BV1wD4y1o7AS",
        "https://www.bilibili.com/video/BV1ka411F7Ub","https://www.bilibili.com/video/BV1K64y1r7pp"];

    var oVid = document.getElementById("video");
    var oText = document.getElementsByClassName("text");
    var oSrc = document.getElementById("href");
    //获取后台储存的数据，
    num = sessionStorage.getItem("num");
    if (num!= null){
            //将文本，视频，图片等内容进行替换。
            oVid.src = video[num];
            oVid.poster = img[num];
            oText[0].innerText = Txt[num];
            oSrc.href = src[num];

    }





}