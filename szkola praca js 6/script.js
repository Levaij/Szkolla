

function zad1(){

    var x = parseFloat(prompt("Podaj liaczbę x"))
    var y = parseFloat(prompt("Podaj liaczbę y"))
    var z = parseFloat(prompt("Podaj liaczbę z"))

    document.getElementById("odp1").innerHTML=(x+y+z);
}

function zad2(){

    var x = parseFloat(prompt("Podaj liaczbę x"))
    var y = parseFloat(prompt("Podaj liaczbę y"))
    var z = parseFloat(prompt("Podaj liaczbę z"))

    document.getElementById("odp2").innerHTML=((x+y+z)/3);
}

function zad3(){

    var x = parseFloat(prompt("Podaj liaczbę x"))
    var y = parseFloat(prompt("Podaj liaczbę y"))

    document.getElementById("odp3").innerHTML=("Suma: " + (x + y) + "<br> Różnica: " + (x - y) + "<br> Iloczyn: " + (x * y));
}

function zad4(){

    var x = parseFloat(prompt("Podaj liaczbę x"))

    document.getElementById("odp4").innerHTML=Math.sqrt(x);
}

function zad5(){

    var x = parseFloat(prompt("Podaj liaczbę x"))

    document.getElementById("odp5").innerHTML=(x * x);
}

function zad6(){

    var x = parseFloat(prompt("Podaj liaczbę x"))
    var y = parseFloat(prompt("Podaj liaczbę y"))
    var z = parseFloat(prompt("Podaj liaczbę z"))

    document.getElementById("odp6").innerHTML=((2 * x * y)+(2 * x * z)+(2 * y * z));
}

function zad7(){

    var x = parseFloat(prompt("Podaj liaczbę x"))

    document.getElementById("odp7").innerHTML=Math.PI*(x*x);
}

function zad8(){


    var trasa = 360
    var cena = 8.16
    var calosc = (trasa / (100 / 8))
    var x = (calosc * cena)


    document.getElementById("odp8").innerHTML=(x+ "zł");
}


function zad9(){


    var trasa = parseFloat(prompt("Długość trasy (km)"))
    var litr = parseFloat(prompt("ilosc spalanych 1l/100km"))
    var cena = parseFloat(prompt("Aktualana cena paliwa (zł)"))
    var calosc = (trasa / (100 / litr))
    var x = (calosc * cena)


    document.getElementById("odp9").innerHTML=(x + "zł");
}

function zad10(){

    var x = parseFloat(prompt("Podaj liaczbę x"))
    var y = parseFloat(prompt("Podaj liaczbę y"))
    var procent = 0.08
    var belka  = 0.19
    var zysk = ((x*procent) * (y/365))


    document.getElementById("odp10").innerHTML=(zysk-(zysk*belka)).toFixed(2) + "zł";
}







