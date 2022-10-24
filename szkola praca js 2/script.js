var przycisk = document.getElementById("przycisk1")
przycisk.onclick = function() {

var x = parseFloat(prompt("podaj liczbe od 1 do 27"))

while (x < 27) {
    var x = ++ x
    document.write(x + " <br> ")
}

}

var przycisk = document.getElementById("przycisk2")
przycisk.onclick = function() {


for (var i = parseFloat(prompt("wpisz liczbe od 1 do 999999")); i <= 999999; i++) {
    if ((i % 3) != 0) {
        continue;
    }
    document.write(i + "<br>")

}

}

var przycisk = document.getElementById("przycisk3")
przycisk.onclick = function() {

    for (var n = 1; n <= 100; n++) {

        for (var m = 1; m <= 100; m++) {

            document.write(n,"*",m,"=",(n*m),"<br>")

        }
    
    }


}

function 1 () {

    var liczba = document.getElementById("liczba").value;
    console.log(liczba);
}


