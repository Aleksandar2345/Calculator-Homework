let close = document.getElementsByClassName("close")[0].addEventListener("click", function() {
    console.log("close")
})
let fullscreen = document.getElementsByClassName("fullscreen")[0].addEventListener("click", function() {
    console.log("fullscreen")
})
let minimize = document.getElementsByClassName("minimize")[0].addEventListener("click", function() {
    console.log("minimize")
})
let calculationsMade = document.getElementById("calculations");
let results = document.getElementById("results")

$(document).ready(function(){

// NUMBER INPUTS
$(".seven").click(function (){
    calculationsMade.append("7");
});
$(".eight").click(function (){
    calculationsMade.append("8");
});
$(".nine").click(function(){
    calculationsMade.append("9");
});
$(".four").click(function(){
    calculationsMade.append("4");
});
$(".five").click(function(){
    calculationsMade.append("5");
});
$(".six").click(function(){
    calculationsMade.append("6");
});
$(".one").click(function(){
    calculationsMade.append("1");
});
$(".two").click(function(){
    calculationsMade.append("2");
});
$(".three").click(function(){
    calculationsMade.append("3");
});
$(".zero").click(function(){
    calculationsMade.append("0");
});

// OPERATIONS 

$(".delete").click(function(){
    let newArr = Array.from(calculationsMade.innerText)
    newArr.splice(-1,1);
    calculationsMade.innerText = newArr.join("");
    console.log(newArr);
});
$(".percentage").click(function(){
    num1 = parseFloat(results.innerText);
    num2 = parseFloat(calculationsMade.innerText);
    result = (num1 * num2) / 100;
    results.innerText += result;
    console.log(result);
});
$(".clearLast").click(function(){
    calculationsMade.innerText = "";
});
$(".clearAll").click(function(){
    results.innerText = "";
    calculationsMade.innerText = "";
});
$(".fragment").click(function(){
    results.innerText += "1/" + calculationsMade.innerText;
    calculationsMade.innerText = 1 / calculationsMade.innerText;
});
$(".square").click(function(){
    results.innerText += "sqr" + calculationsMade.innerText;
    calculationsMade.innerText = Math.pow(calculationsMade.innerText,2);
});
$(".squareroot").click(function(){
    results.innerText += "sqrt" + calculationsMade.innerText;
    calculationsMade.innerText = Math.sqrt(calculationsMade.innerText);
});
$(".positiveOrNegative").click(function(){
    let input = calculationsMade.innerText;
    let result = input * -1;
    calculationsMade.innerText = result;
});
$(".dot").click(function(){
    calculationsMade.innerText += "."
});
$(".minus").click(function (){
    let getValue = calculationsMade.innerText;
    results.innerText += parseFloat(getValue) + "-";
    $(".calcHolder").one('click', (event) => {
        let isButton = event.target === 'BUTTON';
        calculationsMade.innerText = ""
    })
    });
$(".plus").click(function (){
    let getValue = calculationsMade.innerText;
    results.innerText += parseFloat(getValue) + "+";
    $(".calcHolder").one('click', (event) => {
        let isButton = event.target === 'BUTTON';
        calculationsMade.innerText = ""
    })
    });
$(".divide").click(function (){
    let getValue = calculationsMade.innerText;
    results.innerText += parseFloat(getValue) + "/";
    $(".calcHolder").one('click', (event) => {
        let isButton = event.target === 'BUTTON';
        calculationsMade.innerText = ""
    })
    });
$(".multiply").click(function (){
    let getValue = calculationsMade.innerText;
    results.innerText += parseFloat(getValue) + "*";
    $(".calcHolder").one('click', (event) => {
        let isButton = event.target === 'BUTTON';
        calculationsMade.innerText = ""
    })
    });
})
$(".equal").click(function(num1, num2){
    results.innerText += calculationsMade.innerText;
    let numbers = eval(results.innerText);
    calculationsMade.innerText = numbers;
});

// MINIMZE, FULLSCREEN, CLOSE BUTTONS

$(".close").on('click', function() { 
    $('.calcHolder').remove(); 
});
$(".fullscreen").on("click", function(){
    $(".calcHolder")[0].requestFullscreen()
})
var click = 0;
$(".minimize").click(function(){
    let $this=$("#realContent");        
    if($this.is(':hidden'))
    
     {
       $this.show('slow');
     }else{
       $this.hide('slow');
       $(".calcHolder").css("height", "100px");
     }
});
 



