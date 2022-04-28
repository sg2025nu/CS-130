const resetButtonBackgrounds = () => {
    document.querySelector('#btn1').style.backgroundColor = "white";
    document.querySelector('#btn2').style.backgroundColor = "white";
    document.querySelector('#btn3').style.backgroundColor = "white";
    document.querySelector('#btn4').style.backgroundColor = "white";

}

const makeRed = () => {
    // your code here...
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector('#btn1').style.backgroundColor = "red";
    console.log('Change background to red');
};

const makeBlue = () => {
    // your code here...
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector('#btn2').style.backgroundColor = "blue";
    console.log('Change background to blue');
};

const makePink = () => {
    // your code here...
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector('#btn3').style.backgroundColor = "pink";
    console.log('Change background to pink');
};

const makeOrange = () => {
    // your code here...
    resetButtonBackgrounds();
    document.querySelector("body").style.backgroundColor = 'orange';
    document.querySelector('#btn4').style.backgroundColor = "orange";
    console.log('Change background to orange');
};

