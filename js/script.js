const highlightMenu=()=>{
    const homeMenu=document.querySelector('.homeM');
    const featureMenu=document.querySelector('.featureM');
    const AboutMenu=document.querySelector('.AboutM');

    let scrollPosition=window.scrollY;
    if(scrollPosition<1200){
        homeMenu.classList.add('highlight');
        featureMenu.classList.remove('highlight');
        AboutMenu.classList.remove('highlight');
    }
    else if(scrollPosition>1800 && scrollPosition<5000){
        featureMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        AboutMenu.classList.remove('highlight');
    }
    else if(scrollPosition>5000){
        AboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        featureMenu.classList.remove('highlight');
    }
}
window.addEventListener('scroll',highlightMenu);
const menuBtn=document.querySelector('.menu');
const nav=document.querySelector('.nav-bar');
const navBar=document.querySelector('.left-bar-nav');
const escapeButton=document.querySelector('.escape-menu');
menuBtn.addEventListener('click',()=>{
    navBar.style.top='0px';
    
    nav.style.height='250px';
    menuBtn.style.display='none';
    escapeButton.style.display='block';


})
escapeButton.addEventListener('click',()=>{
    navBar.style.top='-1000px';
    
    nav.style.height='80px';
    menuBtn.style.display='block';
    escapeButton.style.display='none';
})
window.addEventListener('resize', function() {
    const mobileMenu = document.querySelector('.menu');
    const screenWidth = window.innerWidth;

    if (screenWidth > 767) {
        mobileMenu.style.display = 'none';

        
    }
    else{
        mobileMenu.style.display='';
    }
});