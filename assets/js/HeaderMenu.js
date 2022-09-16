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
        this.events();
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