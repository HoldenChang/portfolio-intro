const sectionFinder = (element) => {
    const children = element.children;
    
    for (const child of children) {
        const rect = child.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            return true;
        }
    }

    return false;
}

window.addEventListener("scroll", function () {

    const aboutMeLink = document.querySelector('a[href="#aboutmeCTN"]');
    const aboutMeCTN = document.querySelector("#aboutmeCTN");

    const projectLink = document.querySelector('a[href="#projectCTN"]');
    const projectCTN = document.querySelector("#projectCTN");

    const skillsLink = document.querySelector('a[href="#skillsCTN"]');
    const skillsCTN = document.querySelector("#skillsCTN");

    projectLink.style.borderBottom = "1px solid red";
    aboutMeLink.style.borderBottom = "1px solid red";
    skillsLink.style.borderBottom = "1px solid red";

    if (sectionFinder(projectCTN)) {
        projectLink.style.borderBottom = "2px solid blue";
    } else if (sectionFinder(aboutMeCTN)) {
        aboutMeLink.style.borderBottom = "2px solid blue";
    } else if (sectionFinder(skillsCTN)) {
        skillsLink.style.borderBottom = "2px solid blue";
    }
});

function setDivHeight() {

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const vwToPixels = (7 * viewportWidth) / 100;
    const windowHeight = window.innerHeight - vwToPixels;
    const introDiv = document.querySelector('.intro');
    
    introDiv.style.height = `${windowHeight}px`;

}

setDivHeight();
window.addEventListener('resize', setDivHeight);