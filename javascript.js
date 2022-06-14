let slider = document.getElementById("dimensions");
let gridNum = slider.value;
console.log(gridNum);

slider.oninput = function() {
    gridNum = slider.value;
    createGrids(gridNum);
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

