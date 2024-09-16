console.log("Alcheinz");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    let hexColor ="#";
    for(let i=0;i<6;i++){
        hexColor += hex[RandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function RandomNumber(){
    return Math.floor(Math.random()* hex.length)
}









const btn_reset = document.getElementById("btn-reset");

btn_reset.addEventListener("click",function(){
    document.body.style.backgroundColor = "hsl(210, 36%, 96%)";
    color.textContent = "hsl(210, 36%, 96%)";
})
