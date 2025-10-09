// responsive.js
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// 切换菜单显示/隐藏
menuBtn.addEventListener('click', function() {
    // 切换汉堡菜单动画
    this.classList.toggle('change');
    
    // 切换导航链接的显示
    navLinks.forEach(link => {
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });
});
