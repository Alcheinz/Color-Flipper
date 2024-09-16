console.log("Alcheinz");
const colors = ["green", "red", "purple", "orange", "blue" , "yellow" ,"black","gray"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // 0 ile 4 arasında rastgele sayı al (colors değişkenimizde 4 değer olduğu için(0-1-2-3-4))
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

const btn_reset = document.getElementById("btn-reset");

btn_reset.addEventListener("click",function(){
    document.body.style.backgroundColor = "hsl(210, 36%, 96%)";
    color.textContent = "hsl(210, 36%, 96%)";
})