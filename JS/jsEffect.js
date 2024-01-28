function setDivHeight() {

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const vwToPixels = (7 * viewportWidth) / 100;
    const windowHeight = window.innerHeight - vwToPixels;
    const introDiv = document.querySelector('#intro');
    const startDiv = document.querySelector('.start');
    
    introDiv.style.height = `${windowHeight}px`;
    startDiv.style.height = `${windowHeight}px`;

}

setDivHeight();
window.addEventListener('resize', setDivHeight);


