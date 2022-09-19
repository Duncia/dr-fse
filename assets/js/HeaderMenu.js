/*
Mobile menu:
1. Burger (as container), burger_middle the middle line div selected.
2. Events method called (which includes click event listener and calls toggle menu method).
3. Toggle menu adds/removes CSS classes.
*/
class HeaderMenu {
    constructor() {
        this.headerMenuDiv = document.querySelector("#burger");
        this.headerMenuIcon = document.querySelector("#burger__middle");
        this.headerNav = document.querySelector("#header__nav");
        this.headerNavLi = document.querySelectorAll("#header__nav ul li");
        this.events();

        //Add icon for li items with sub-menu
        this.headerNavLi.forEach((entry) =>{
            if(entry.childNodes.length > 1){
                let iconLi = entry.querySelector("a");
                let subMenu = entry.querySelector(".sub-menu");

                iconLi.insertAdjacentHTML("afterend", '<span class="li--expand-arrow"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><polyline points="112 184 256 328 400 184" style="fill:none;stroke:#7c7f83;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/></svg></span>');

                iconLi.addEventListener("click", () => {
                    subMenu.classList.toggle("display-block");
                })
            }
        })
    }

    events(){
        this.headerMenuDiv.addEventListener('click', () => {
            this.toggleMenu();
        });
    }
    toggleMenu(){
        this.headerMenuIcon.classList.toggle("burger__middle--active");
        this.headerNav.classList.toggle("header__nav--mobile");
    }
    
}

export default HeaderMenu;