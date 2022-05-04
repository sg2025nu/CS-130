// add click listener

const addShape = (ev) => {
    console.log(ev.offsetX, ev.offsetY);
    console.log('add shape');
    let color = document.querySelector('#color').value;
    let radius = document.querySelector('#size').value;
    let shape = document.querySelector('#shape').value;
    
    if (shape === "circle") {
    const circle = 
    `<circle 
        cx=${ev.offsetX} 
        cy=${ev.offsetY} 
        r=${radius} stroke="black" 
        stroke-width="3" 
        fill=${color}>
    </circle>`; 
    document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
    }
    else if (shape === "square") {
    const square =
    `<rect 
        x=${ev.offsetX}
        y=${ev.offsetY} 
        width="40" 
        height="40" 
        stroke="black" 
        stroke-width="3" 
        fill="pink">
    </rect>`;     
    document.querySelector('svg').insertAdjacentHTML("beforeend", square);
    }
    else if (shape === "triangle") {
    const triangle = 
    `<polygon 
        points="100,100 150,100 125,135" 
        stroke="black" 
        stroke-width="3" 
        fill="teal">
    </polygon>`;     
    document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);
    }


};
