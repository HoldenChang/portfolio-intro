function setIndexHeight() {

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const vwToPixels = (7 * viewportWidth) / 100;
    const windowHeight = window.innerHeight - vwToPixels;
    const startDiv = document.querySelector('#start');
    
    startDiv.style.height = `${windowHeight}px`;

}

setIndexHeight();
window.addEventListener('resize', setIndexHeight);