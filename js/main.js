let code = document.querySelector('#code')
let n = 0
let timer = setInterval(() => {
    code.innerHTML = Prism.highlight(css1.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = css1.substring(0, n)
    code.scrollTop = code.scrollHeight
    if(n === css1.length){
        window.clearInterval(timer)
    }
    n++
}, 0)

var css1 = `/* 
 * 面试官你好，我是朝阳
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
  transition: all 1s;
}
html{
  background: #33485E;
  
}
#code{
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #aaa;
  padding: 16px;
  transform: perspective(2000px) rotateY(20deg);
}

/* 使用Prsim
 * 让代码高亮
 */
.token.selector{
  color: #2f9c0a;
}
.token.punctuation {
    color: #5F6364;
}
.token.property{
  color: #c92c2c;
}
.token.function{
  color: #2f9c0a;
}


/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
@keyframes breath{
  0%{
    box-shadow: 0 0 20px rgba(0,0,0,1)
  }
  100%{
    box-shadow: 0 0 20px rgba(0,0,0,0.5)
  }
}

/* 我需要一张白纸 */

#code-wrapper{
  width:100%; left: 0; position: fixed; 
}
/* 于是我就可以在白纸上写字了，请看右边 */
`
