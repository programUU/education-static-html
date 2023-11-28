import './CSS/index.css'
import '../../assets/styles/reset.css'
import '../../assets/styles/base.css'
/* 引入组件的js 处理导入的css文件 */
/* 私有部分 */
/* 幻灯片 */
import './components/carousel'
/* 免费课程 */
import './components/free-course'
/* 实战课程 */
import './components/practical-course'
/* 头部logo */
import './components/logo'



/* 公共部分 */
/* 标签栏 */
import '../../components/tabbar'


/* const docEl = document.documentElement;

const setHtmlFontSize = () => {
    const viewWidth = docEl.clientWidth();
    docEl.style.fontSize = `${viewWidth * 16 / 750}px`
}

setHtmlFontSize();
window.addEventListener(
    'resize',
    setHtmlFontSize,
    false
) */
