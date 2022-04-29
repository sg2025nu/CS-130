/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/


const classDefault = () => {
   document.querySelector("body").className = "";
}

const classDesert = () => {
   document.querySelector("body").className = "desert";
}

const classOcean = () => {
   document.querySelector("body").className = "ocean";
}

const classHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', classDefault);
document.querySelector("#desert").addEventListener('click', classDesert);
document.querySelector("#ocean").addEventListener('click', classOcean);
document.querySelector("#high-contrast").addEventListener('click', classHighContrast);
