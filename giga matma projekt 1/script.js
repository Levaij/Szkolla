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

