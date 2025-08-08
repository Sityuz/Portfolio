window.addEventListener("DOMContentLoaded", function () {
    this.window.addEventListener('scroll',function(){
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', this.window.scrollY > 0)
    })
    const menuBtn = this.document.querySelector(".menu-btn")
    const navigation = this.document.querySelector(".navigation")
    const navigationItems = this.document.querySelector('.navigation a')

    menuBtn.addEventListener("click", ()=>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItems.array.forEach(navItem => {
        navItem.addEventListener('click', () =>{
            navigation.classList.remove('active')
        })
        
    });
})