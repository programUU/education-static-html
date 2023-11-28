import './logo.css'


/* 点击切换按钮，展开或收起导航菜单 */
const $toggleBtn = document.getElementById('header-toggle');
const $nav = document.getElementById('nav');

const navExtendedClassName = 'nav-layout-entended';
const toggleBtnExtendedClassName = 'header-toggle-active'
$toggleBtn.addEventListener(
    'click',
    () => {//这里可以用 this 代表着添加点击事件的 dom 元素
        /* if ($toggleBtn.classList.contains(toggleBtnExtendedClassName)) {
            $toggleBtn.classList.remove(toggleBtnExtendedClassName);
            $nav.classList.remove(navExtendedClassName);
        } else {
            $toggleBtn.classList.add(toggleBtnExtendedClassName);
            $nav.classList.add(navExtendedClassName);
        } */
        /* 更简单的判断是否用有样式 */
        $toggleBtn.classList.toggle(toggleBtnExtendedClassName);
        $nav.classList.toggle(navExtendedClassName);
    },
    false
)