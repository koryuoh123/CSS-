let html = document.querySelector("#html"); //通过选择器找到demo
let style = document.querySelector("#style");
let string = `/*正在准备生成八卦。。。。。

正在进行系统初始化。。。。。

游客 9527 认证成功。。。。。

程序开始执行。

*/
#div1{
      border: red solid 1px;
      width: 300px;
      height: 300px;
    }
    /*正在搭建框架*/
    #div1{
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
      border:none;
    }
    /*正在填充阴阳*/
    #div1{
      background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }
    /*正在生成勾玉*/
    #div1::before{
      width: 150px;
      height: 150px; 
      top: 0 ;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #div1::after{
      width: 150px;
      height: 150px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    }
    /*八卦生成完毕，请闭上眼睛进入里世界*/
    `;
let string2 = "";
console.log(string.length);
let n = 0;
let step = () => {
  setTimeout(() => {
    if(string[n] === "\n"){
      string2 += "<br>" ;}
    else if(string[n] === " "){
      string2 += "&nbsp" ;
    }
    else{string2 += string[n];}
    html.innerHTML = string2;
    window.scrollTo(0,99999)
    html.scrollTo(0,99999)
    style.innerHTML = string.substring(0, n);
    n = n + 1;
    if (n < string.length) {
      step();
    } else {
    }
  }, 50); //毫秒，0.01 秒
};

step();


