const toggleSun = document.getElementById("toggleSun");
const toggleMoon = document.getElementById("toggleMoon");
const displayOp = document.getElementById("displayOp");
const displayAns = document.getElementById("displayAns");
const clear = document.getElementById("clear");
const openBrac = document.getElementById("openBrac");
const closeBrac = document.getElementById("closeBrac");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtraction = document.getElementById("subtraction");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const add = document.getElementById("add");
const zero = document.getElementById("zero");
const doubleZero = document.getElementById("doubleZero");
const dot = document.getElementById("dot");
const equalsTo = document.getElementById("equalsTo");



toggleMoon.addEventListener("click", function(){
    document.body.style.backgroundImage = " linear-gradient(to top right, rgba(0, 26, 46, 0.83), rgba(86, 106, 122, 0.79))";
    const moonStyles = {
        "container" : "linear-gradient(to top left, rgba(0, 0, 0, 0.478), rgba(91, 91, 91, 0.487))",
        "toggle" : "rgba(64, 122, 170, 0.895)",
        "toggleMoon" : "rgba(11, 56, 94, 0.895)",
        "toggleMoonColor" : "rgb(203, 203, 203)",
        "toggleSun" : "rgba(64, 122, 170, 0.895)",
        "toggleSunColor" : "rgb(203, 203, 203)",
        "displayOp" : "whitesmoke",
        "displayAns" : "rgb(102, 181, 237)"
    };
    document.getElementById("container").style.background = moonStyles["container"]; 
    document.getElementById("toggle").style.backgroundColor = moonStyles["toggle"];
    document.getElementById("toggleMoon").style.backgroundColor = moonStyles["toggleMoon"];
    document.getElementById("toggleMoon").style.color = moonStyles["toggleMoonColor"];
    document.getElementById("toggleSun").style.backgroundColor = moonStyles["toggleSun"];
    document.getElementById("toggleSun").style.color = moonStyles["toggleSunColor"];
    document.getElementById("displayOp").style.color = moonStyles["displayOp"];
    document.getElementById("displayAns").style.color = moonStyles["displayAns"];
})
toggleSun.addEventListener("click", function(){
    document.body.style.backgroundImage = "linear-gradient(to top right, rgba(2, 89, 123, 0.83), rgba(149, 207, 230, 0.79))";
    const sunStyles = {
        "container" : "linear-gradient(to top left, rgba(166, 166, 166, 0.404), rgba(255, 255, 255, 0.216))",
        "toggle" : "rgb(121, 193, 228)",
        "toggleMoon" : "#02020200",
        "toggleMoonColor" : "rgb(80, 80, 80)",
        "toggleSun" : "rgba(182, 229, 246, 0.895)",
        "toggleSunColor" : "rgb(80, 80, 80)",
        "displayOp" : "rgb(91, 91, 91",
        "displayAns" : "rgb(23, 55, 119)"
    };
    document.getElementById("container").style.background = sunStyles["container"];
    document.getElementById("toggle").style.background = sunStyles["toggle"];
    document.getElementById("toggleMoon").style.background = sunStyles["toggleMoon"];
    document.getElementById("toggleMoon").style.color = sunStyles["toggleMoonColor"];
    document.getElementById("toggleSun").style.background = sunStyles["toggleSun"];
    document.getElementById("toggleSun").style.color = sunStyles["toggleSunColor"];
    document.getElementById("displayOp").style.color = sunStyles["displayOp"];
    document.getElementById("displayAns").style.color = sunStyles["displayAns"];
})


let btnArr = [one,two,three,four,five,six,seven,eight,nine,add,subtraction,multiply,divide,zero,doubleZero,dot,openBrac,closeBrac];
let opArrDisplay = [];  

for (const btn of btnArr) {
    btn.addEventListener("click", function() {
        opArrDisplay.push(btn.innerText);
        displayOp.innerHTML = opArrDisplay.join("");
    });
}
let keyArr = ['1','2','3','4','5','6','7','8','9','0','00','(',')','.','+','-','x','/'];
document.addEventListener("keyup", function(e) {
    if (keyArr.includes(e.key)) {
        opArrDisplay.push(e.key);
        displayOp.innerHTML = opArrDisplay.join("");
    }
});
function calculation(){
    let expression = opArrDisplay.join("");
    let numbers = expression.split(/[\+\-\x\/]/).map(num => parseFloat(num));  
    let operators = expression.match(/[\+\-\x\/]/g);
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                result += numbers[i + 1];
                break;
            case '-':
                result -= numbers[i + 1];
                break;
            case 'x':
                result *= numbers[i + 1];
                break;
            case '/':
                result /= numbers[i + 1];
                break;
            default:
                result = "Invalid";
        }
    }
    displayAns.innerHTML = result;
}

equalsTo.addEventListener("click", calculation);
clear.addEventListener("click",function(){
    opArrDisplay = [];
    displayOp.innerHTML = "";
    displayAns.innerHTML = "";
})
document.addEventListener("keyup", function (e) {
    if (e.key === 'Enter'){
        calculation();
    }
})
document.addEventListener("keyup", function (e) {
    if (e.key === 'Delete'|| e.key === 'Backspace'){
        opArrDisplay = [];
        displayOp.innerHTML = "";
        displayAns.innerHTML = "";
    }
})


