document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mainMenu");
    const content = document.querySelector(".content");
    const headers = content.querySelectorAll("h1, h2");
    
    let currentChapter = null;
    let menuList = document.createElement("ul");
    menu.appendChild(menuList);
    
    headers.forEach(header => {
        const id = header.textContent.replace(/\s+/g, "-").toLowerCase();
        header.id = id;
        
        if (header.tagName === "H1") {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
            listItem.classList.add("chapter");
            
            let subMenu = document.createElement("ul");
            subMenu.classList.add("submenu");
            listItem.appendChild(subMenu);
            
            menuList.appendChild(listItem);
            currentChapter = subMenu;
            
            listItem.addEventListener("click", function (e) {
                e.preventDefault();
                subMenu.classList.toggle("visible");
                document.getElementById(id).scrollIntoView({ behavior: "smooth" });
            });
        } else if (header.tagName === "H2" && currentChapter) {
            let subItem = document.createElement("li");
            subItem.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
            currentChapter.appendChild(subItem);
        }
    });
    
    // Active status toevoegen bij scrollen
    window.addEventListener("scroll", function () {
        let fromTop = window.scrollY;
        document.querySelectorAll("nav a").forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= fromTop + 50 && section.offsetTop + section.offsetHeight > fromTop + 50) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});