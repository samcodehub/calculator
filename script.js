const mr =[];

function pushData(){
  var inputn = document.getElementById('display').value;
  mr.push(inputn);
  var show = "";
  for(i = 0; i < mr.length; i++){
    show = show + mr[i] + ". ";
  }
  document.getElementById('display').value = show;
}

function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}



function exp() {
  display.value = Math.exp(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}



function sq(){
    cal.display.value=Math.sqrt(cal.display.value);
}

function data(val){
  cal.display.value+=val;
}

factorial = () => {
  let n= document.getElementById("display").value;
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return document.getElementById("display").value = answer;
  }
}

power = () => document.getElementById("display").value = Math.pow(document.getElementById("display").value, 2);

power2 = () => document.getElementById("display").value = Math.pow(document.getElementById("display").value, 3);
sin = () => document.getElementById("display").value=Math.sin(document.getElementById("display").value);

cos = () => document.getElementById("display").value=Math.cos(document.getElementById("display").value);
     
tan = () => document.getElementById("display").value=Math.tan(document.getElementById("display").value);

sqrt3 = () => document.getElementById("display").value = Math.pow(document.getElementById("display").value, 1/3);

function pi() {
  display.value = (display.value * Math.PI);
}

ln = () => document.getElementById("display").value = Math.log(document.getElementById("display").value);

log = () => document.getElementById("display").value = Math.log10(document.getElementById("display").value);

function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}
function exponent() {
  display.value += "^";
}




     
var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
     
     Array.prototype.forEach.call(buttons, function(button) {
      button.addEventListener("click", function() {
        if (button.textContent != "=" && 
        button.textContent != "C" && 
        button.textContent != "x" && 
        button.textContent != "÷" && 
        button.textContent != "√" && 
        button.textContent != "x ²" && 
        button.textContent != "%" && 
        button.textContent != "<=" && 
        button.textContent != "±" && 
        button.textContent != "sin" && 
        button.textContent != "cos" && 
        button.textContent != "tan" && 
        button.textContent != "log" && 
        button.textContent != "ln" && 
        button.textContent != "x^" && 
        button.textContent != "x !" && 
        button.textContent != "π" && 
        button.textContent != "e" && 
        button.textContent != "rad" 
        && button.textContent != "∘") {
          display.value += button.textContent;
        } else if (button.textContent === "=") {
          equals();
        } else if (button.textContent === "C") {
          clear();
        } else if (button.textContent === "x") {
          multiply();
        } else if (button.textContent === "÷") {
          divide();
        } else if (button.textContent === "±") {
          plusMinus();
        } else if (button.textContent === "<=") {
          backspace();
        } else if (button.textContent === "%") {
          percent();
        } else if (button.textContent === "π") {
          pi();
        } else if (button.textContent === "x ²") {
          square();
        } else if (button.textContent === "√") {
          squareRoot();
        } else if (button.textContent === "sin") {
          sin();
        } else if (button.textContent === "cos") {
          cos();
        } else if (button.textContent === "tan") {
          tan();
        } else if (button.textContent === "log") {
          log();
        } else if (button.textContent === "ln") {
          ln();
        } else if (button.textContent === "x^") {
          exponent();
        } else if (button.textContent === "x !") {
          factorial();
        } else if (button.textContent === "e") {
          exp();
        } else if (button.textContent === "rad") {
          radians();
        } else if (button.textContent === "∘") {
          degrees();
        }
      });
    });
         
     function checkLength() {
       if (display.value.length >= 23) {
         display.value = "Overload Error";
       }
     }
     function percent() {
      display.value = display.value / 100;
    }
