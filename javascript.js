let slider = document.getElementById("dimensions");
let gridNum = slider.value;
console.log(gridNum);

slider.oninput = function() {
    gridNum = slider.value;
    createGrids(gridNum);
}

let toRandom = document.getElementById("toRandom");
let toBlack = document.getElementById("toBlack");

toBlack.addEventListener("click", function(){
    let divs = document.querySelectorAll(".box");
    divs.forEach( div => {
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
    })
});

toRandom.addEventListener("click", function(){
    let divs = document.querySelectorAll(".box");
    divs.forEach( div => {
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = randomRBG();
        })
    })
});

function randomRBG(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function createGrids(gridNum){
    let container = document.getElementById("mainContainer");
    container.innerHTML = "";
    let gridSize = 800/gridNum;
    for(let i = 0; i < gridNum*gridNum; i++){
        let newdiv = document.createElement("div");
        newdiv.className = "box";
        newdiv.style.width = gridSize-2 + "px";
        newdiv.style.height = gridSize-2 + "px";
        newdiv.addEventListener("mouseover", function(){
            newdiv.style.backgroundColor = "black";
        });
        document.getElementById("mainContainer").appendChild(newdiv);
    }
}

