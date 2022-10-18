
var przycisk = document.getElementById("przycisk1")
przycisk.onclick = function() {


    var a = parseFloat(prompt("liczba 1"))
    var b = parseFloat(prompt("liczba 2"))

    var c = prompt("twoje obcje: 1 - dodwanie, 2 - odejmowane, 3 - mnożenie, 4 - dzielenie")
    console.log(c)


    if (c === "1") {
        document.write(a + b)
    }

    else if (c === "2") {
        document.write(a - b)
    }

    else if (c === "3") {
        document.write(a * b)
    }

    else if (c === "4") {
        document.write(a / b)
    }

    if (a === b) {
        document.write(" <br> liczby są równe ")
    }
    
    else if (a != b) {
        document.write(" <br> liczby nie są równe")
    }
    
}

var przycisk = document.getElementById("przycisk2")
przycisk.onclick = function() {

    var a = parseFloat(prompt("liczba 1"))
    var b = parseFloat(prompt("liczba 2"))

    document.write("a=" + a + "<br>b=" + b)

    if(a > b) {
        document.write("<br>a > b")
    }

    else if(b > a) {
        document.write("<br>b > a")
    }

    else {
        document.write("<br>b = a")
    }

    switch(a*b){
        case 10:
            document.write("wynik to 10")
            break;
        case 40:
            document.write("wynik to 40")
            break;
        case 120:
            document.write("wynik to 120")
            break;
        default:
        document.write("error")
    }

}

var przycisk = document.getElementById("przycisk3")
przycisk.onclick = function() {

    var dzien = prompt("jaki jest obecny dzień tygodnia")

    switch(dzien) {
        case "poniedzialek":
            document.write("jdzis jest poniedzialek")
            break
        case "wtorek":
            document.write("dzis jest wtorek")
            break
        case "śroada":
            document.write("dzis jest śroada")
            break
        case "czwartek":
            document.write("dzis jest czwartek")
            break
        case "piątek":
            document.write("dzis jest piątek")
            break
        case "sobota":
            document.write("dzis jest sobota")
            break
        case "niedziela":
            document.write("dzis jest niedziela")
            break
        default:
        document.write("error")
            
            
            
    }

}



