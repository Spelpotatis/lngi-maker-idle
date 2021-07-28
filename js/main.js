var x = 0;

function frameAdvance(){
    x++;
}

function updateUI(){
    document.getElementById("number").innerHTML = "x = " + x + "<br>" + "f(x) = " + x;
}

function gameLoop(){
    updateUI();
}

setInterval(gameLoop, 50);