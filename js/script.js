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
