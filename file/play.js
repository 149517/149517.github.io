window.onload= function () {


    //设置点击跳转到播放页面

    var oCli = document.getElementsByClassName("click");
    oCli[0].onclick = function(){

        //使用sessionStorage 对象储存一个值，将其传递到代开的video文件中，

        sessionStorage.setItem("num",0);
        open("file/play.html","_self");
    }
    oCli[1].onclick = function(){
        sessionStorage.setItem("num",1);
        open("file/play.html","_self");
    }
    oCli[2].onclick = function(){
        sessionStorage.setItem("num",2);
        open("file/play.html","_self");
    }
    oCli[3].onclick = function(){
        sessionStorage.setItem("num",3);
        open("file/play.html","_self");
    }
    oCli[4].onclick = function(){
        sessionStorage.setItem("num",4);
        open("file/play.html","_self");
    }
    oCli[5].onclick = function(){
        sessionStorage.setItem("num",5);
        open("file/play.html","_self");
    }



    //轮播图
    var img = ["image/轮播图1.png","image/轮播图2.png","image/轮播图3.png"];
    var flag = 0;
    //利用间隔更改图片的src，实图片的切换效果
    var oImg = document.getElementById("img-");
    var oBtn = document.getElementsByClassName("triangle");
    oBtn[0].onclick = function(){
        flag--;
        if(flag<0){
            flag=2;
        }
        if(flag>2){
            flag = 0;
        }
        oImg.src = img[flag];
    }
    oBtn[1].onclick = function(){
        flag++;
        if(flag<0){
            flag=2;
        }
        if(flag>2){
            flag = 0;
        }
        oImg.src = img[flag];
    }
        setInterval(function () {

            if (flag >= 3) {
                flag = 0;
            } else {
                oImg.src = img[flag];
                flag++;
            }
        },3000);

}