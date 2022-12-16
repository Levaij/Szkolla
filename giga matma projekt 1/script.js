

function kwadratowa(){

var a = prompt("podaj a (x²)");
if (a == 0){
    alert("a Nie może wynosic 0");
    kwadratowa();
}
var b = prompt("podaj b (x)");
var c = prompt("podaj c");


var delta = (b * b - (4 * a * c));

if (delta > 0){

    var x1 = ((-b - Math.sqrt(delta)) / (a * 2));

    var x2 = ((-b + Math.sqrt(delta)) / (a * 2));
    document.getElementById("kwadratowa").innerHTML= "miejsce zerowe x1 = " + x1 + "<br> miejsce zerowe x2 = " + x2;

}
else if (delta === 0){
    var x0 = (-b / (a * 2));
    document.getElementById("kwadratowa").innerHTML= "miejsce zerowe x0 = " + x0 + "</br>";
}

else if(delta <0){
    alert("nie ma miejsc zerowych");
}

else{
    console.log("error");
    alert("Delta jest nie obliczalna!");
}
}