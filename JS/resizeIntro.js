function setIntroHeight() {

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const vwToPixels = (7 * viewportWidth) / 100;
    const windowHeight = window.innerHeight - vwToPixels;
    const introDiv = document.querySelector('#intro');
    
    introDiv.style.height = `${windowHeight}px`;

}

setIntroHeight();
window.addEventListener('resize', setIntroHeight);


