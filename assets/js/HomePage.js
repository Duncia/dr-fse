class HomePage {
    constructor(){
        this.footerYear = document.querySelector("#footer-year");
        this.showYear();
        this.allRevealedElements = document.querySelectorAll('.home-page-el');
        this.sectionObserver = new IntersectionObserver(this.observerCallbackF, {
            root: null,
            threshold: 0.15
        });
        this.observeEl(this.sectionObserver);
    }

    showYear(){
        const d = new Date();
        let yearNow = d.getFullYear();
        this.footerYear.innerHTML = `@ ${yearNow}`;
    }

    observerCallbackF(entries, sectionObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            if(entry.target.classList.contains('home-page-el')){
                entry.target.classList.remove('home-page-el--hide');
            }
            sectionObserver.unobserve(entry.target);
        });
    };
    observeEl(sectionObserver){
        this.allRevealedElements.forEach(function(el){
            sectionObserver.observe(el);
            el.classList.add('home-page-el--hide');   
        })
    };
}
export default HomePage;