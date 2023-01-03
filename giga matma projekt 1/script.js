const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
function quadratic(a, b) {
    return function(x) {
      return a * x * x + b * x ;
    }
}
    const chartArea = {
    x: 50,
    y: 10,
    width: 200,
    height: 300
};
    const xMin = -10;
    const xMax = 10;
    const yMin = -10;
    const yMax = 10;

function xToPixel(x) {
    return chartArea.x + (x - xMin) / (xMax - xMin) * chartArea.width;
}
  
  function yToPixel(y) {
    return chartArea.y + chartArea.height - (y - yMin) / (yMax - yMin) * chartArea.height;
}


    ctx.beginPath();
    ctx.moveTo(xToPixel(xMin), yToPixel(0));
    ctx.lineTo(xToPixel(xMax), yToPixel(0));
    ctx.moveTo(xToPixel(0), yToPixel(yMin));
    ctx.lineTo(xToPixel(0), yToPixel(yMax));
    ctx.stroke();

function plotQuadratic(a, b, c) {

    const quadFunc = quadratic(a, b, c);
  
    ctx.beginPath();
    ctx.moveTo(xToPixel(xMin), yToPixel(quadFunc(xMin)));
  
    for (let x = xMin + 0.1; x < xMax; x += 0.1) {
        ctx.lineTo(xToPixel(x), yToPixel(quadFunc(x)));
    }
  
    ctx.stroke();

};  // plots the curve y = x^2

function kwadratowa(){

    var a = prompt("podaj a (x²)");
    if (a == 0){
        alert("a Nie może wynosic 0");
        kwadratowa();
    }
    var b = prompt("podaj b (x)");


    if (c!==0) {
        var funkcja = `Funkcja Kwadratowa: f(x)=${a}x² + ${b}x`;
    }
    else{
        var funkcja = `Funkcja Kwadratowa: f(x)=${a}x² + ${b}x + ${c}`;
    }
    

    var c = prompt("podaj c");
    var delta = (b * b - (4 * a * c));

    var p = (-b / (a * 2))
    var q = (-delta / (a *4))

    var kanoniczna = ("Postać Kanoniczna: f(x) = " + a + " + (x - " + p + ") + " + q)
    console.log(funkcja)
    console.log(kanoniczna)
    
    if (delta > 0){
    
        var x1 = ((-b - Math.sqrt(delta)) / (a * 2));
    
        var x2 = ((-b + Math.sqrt(delta)) / (a * 2));

        var iloczynowa = ("Postać Iloczynowa: f(x) + " + a + "(x - " + x1 + ")(x - " + x2 + ")")
        document.getElementById("kwadratowa").innerHTML= (funkcja + "<br> Miejsce Zerowe x1 = " + x1 + "<br> Miejsce Zerowe x2 = " + x2 + "<br>" + kanoniczna + "<br>" + iloczynowa);

        
        console.log(iloczynowa)
        canvas.style.display="block"
        plotQuadratic(a,b)
    
    }
    else if (delta === 0){
        var x0 = (-b / (a * 2));

        var iloczynowa = ("Postać Iloczynowa: f(x) + " + a + "(x - " + x0 + ")²")
        document.getElementById("kwadratowa").innerHTML= (funkcja + "<br> Miejsce Zerowe x0 = " + x0 + "</br>" + kanoniczna + "<br>" + iloczynowa);

        console.log(iloczynowa)
    }
    
    else if(delta <0){
        alert("nie ma miejsc zerowych");
    }
    
    else{
        console.log("error");
        alert("Delta jest nie obliczalna!");
    }
}

function podstawa(){

    var a = prompt("podaj liczbe a");
    var b = prompt("podaj liczbe b");

    var odp1 = (a + b);
    var odp2 = (a - b);
    var odp3 = (a * b);
    var odp4 = (a / b);
    var odp5 = (a * a);
    var odp6 = (b * b);

    
    document.getElementById("podstawa").innerHTML= "Dodawanie: " + odp1 + "<br> Odejmowanie: " + odp2 + "<br> Mnożenie: " + odp3 + "<br> Dzielenie: " + odp4 + "<br> Kwadrat a: " + odp5 + "<br> Kwadrat b: " + odp6;


}

function Lokata(){

    var x = parseFloat(prompt("Suma pieniędzy"))
    var y = parseFloat(prompt("Czas pieniędzy w Lokacie"))
    var procentpre = parseFloat(prompt("Procent (x%)"))
    var belkapre = parseFloat(prompt("Belka (x%)"))
    var procent = (procentpre / 100)
    var belka  = (belkapre / 100)
    var zysk = ((x*procent) * (y/365))


    document.getElementById("Lokata").innerHTML=(zysk-(zysk*belka)).toFixed(2) + "zł <br> Belka: " + belkapre + "% <br> Procent: " + procentpre + "%";
}

function Paliwo(){

    
    var trasa = parseFloat(prompt("Długość trasy (km)"))
    var litr = parseFloat(prompt("ilosc spalanych 1l/100km"))
    var cena = parseFloat(prompt("Aktualana cena paliwa (zł)"))
    var calosc = (trasa / (100 / litr))
    var x = (calosc * cena)


    document.getElementById("Paliwo").innerHTML=((x).toFixed(2) + "zł");

} 
