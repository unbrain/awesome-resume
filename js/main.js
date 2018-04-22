let code = document.querySelector('#code')
let n = 0
let timer = setInterval(() => {
  code.innerHTML = Prism.highlight(css1.substring(0, n), Prism.languages.css, 'css');
  styleTag.innerHTML = css1.substring(0, n)
  let now = css1.substring(n + 1, n)
  if (now === '\n') {
    console.log('enter')
  } else {
    pressKey(now);
  }
  code.scrollTop = code.scrollHeight
  if (n === css1.length) {
    window.clearInterval(timer)
  }
  n++
}, 30)

var css1 = `/* 
 * 面试官你好，我是朝阳
 * 咦～ 我的键盘呢？
 */

*{
  transition: all 1s;
  
}
.keyboard {
    display: block;
    transform: perspective(1000px) rotateX(30deg);
    background: rgba(255, 25, 25, 0.1);
}

html{
  rgb(50, 255, 255);
}
#code{
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #aaa;
  padding: 16px;
  transform: perspective(2500px) rotateX(-20deg);
  height: 75vh;
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
    box-shadow: 0 0 40px rgba(0,0,0,1)
  }
  100%{
    box-shadow: 0 0 40px rgba(0,0,0,0.5)
  }
}

/* 我需要一张白纸 */

#code-wrapper{
  width:100%; left: 0; position: fixed; 
}
/* 于是我就可以在白纸上写字了，请看右边 */
`

function pressKey(char) {
  var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
  if (!key) {
    document.querySelector('[data-char="hans"]').setAttribute('data-pressed', 'on');
    return console.warn('No key for', char);
  }
  key.setAttribute('data-pressed', 'on');
  setTimeout(function () {
    document.querySelector('[data-char="hans"]').removeAttribute('data-pressed', 'on');
    key.removeAttribute('data-pressed');
  }, 0);
}
