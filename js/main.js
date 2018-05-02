function writeCode(precode, code, callback) {
  let pcode = precode || ''
  let Domcode = document.querySelector('#code')
  let n = 0
  let timer = setInterval(() => {
    Domcode.innerHTML = Prism.highlight(pcode + code.substring(0, n), Prism.languages.css, 'css')
    styleTag.innerHTML = result = pcode + code.substring(0, n)
    let now = code.substring(n + 1, n)
    pressKey(now);
    Domcode.scrollTop = Domcode.scrollHeight
    if (n === code.length) {
      window.clearInterval(timer)
      callback && callback.call()
    }
    n++
  }, 30)
}


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
  background: rgba(0, 255, 0, 0.1);
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
  animation: breath 1.5s infinite alternate-reverse;
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

`

function pressKey(char) {
  if (char === '\n') {
    console.log('enter')
  } else {
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
}

function creatPaper(fn) {
  var p = document.createElement('div')
  p.id = 'paper'
  document.querySelector('.interface').appendChild(p)
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  fn()
}

function writeMarkdown(code, fn){
  let Domcode = document.querySelector('#paper .content')
  let n = 0
  let timer = setInterval(() => {
    Domcode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.markdown, 'markdown');
    let now = code.substring(n + 1, n)
    pressKey(now);
    Domcode.scrollTop = Domcode.scrollHeight
    if (n === code.length) {
      window.clearInterval(timer)
      fn && fn()
      
    }
    n++
  }, 30)
  
}

var css2 = `#paper {
  width: 45%;
  margin: .5em;
  height: 90vh;
  position: fixed;
  display: flex;
  align-items: flex-start;
  top:0;
  right: 0;
  background: rgba(0, 0, 255, 0.1);
  box-shadow: 0 0 40px rgba(0,0,0,0.5)
}
.content{
  margin: 1em;
  padding: 0em 5em;
}`

var css3 = `

/* 使用 markedjs
 * 这样就有样式了
 */
`

var md = `
# 自我介绍
我叫 朝阳
1996 年 
成都工业学院 计算机科学与技术
自学前端一年
应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
  - QQ 641959402
  - Email marsorsun@gmail.com
  - 手机 

`

writeCode('', css1, () => {
  creatPaper(() => {
    writeCode(css1, css2, () => {
      writeMarkdown(md, () => {
        writeCode(css1+css2, css3, () => {
          document.querySelector('#paper .content').innerHTML = marked(md);
          console.log('over')
        })
      })      
    })
  })
})