let selectElem = document.querySelector("#theme-select")
let pageContent = document.body

// theme.js - 简化版本
function initTheme() {
    let selectElem = document.querySelector("#theme-select");
    
    if (selectElem) {
        selectElem.addEventListener('change', function() {
            let current = this.value;
            if (current === "dark") {
                document.querySelector("body").classList.add("dark1");
                document.querySelector(".container").classList.add("dark2");
                let new_image = document.querySelector("footer").innerHTML = '<img src="dark_mode.png" alt="dark_mode">'
            } else {
                document.querySelector("body").classList.remove("dark1");
                document.querySelector(".container").classList.remove("dark2");
                let new_image = document.querySelector("footer").innerHTML = '<img src="byui-logo-blue.webp" alt="dark_mode">'
            }
        });
    }
}

// 页面加载后初始化
window.addEventListener('load', initTheme);