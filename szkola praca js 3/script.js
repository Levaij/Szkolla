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

function numer() {

    var liczba = document.getElementById("cyfra").va;
    console.log(liczba);
}


var przycisk = document.getElementById("przycisk4")
przycisk.onclick = function() {


    var auto = {
        marka: "Honda",
        model: "Civic",
        rok_produkcji: "1999",
        przebieg: "300000km",
        wyswietldane: function() {

            document.write(this.marka + ' ' + this.model + ' ' + "wyprodukowany w" + ' ' + this.rok_produkcji + "<br>" + ' ' + "ma" + ' ' + this.przebieg + ' ' + "przebiegu.") ;
        }

    };

    auto.wyswietldane()

    auto.rejestracja = "hw 420dp"

    auto.wyswietldane1 = function() {

        document.write("<br> rejestracja" + ' ' + this.rejestracja)

    }

    auto.wyswietldane1()



}

var przycisk = document.getElementById("przycisk5")
przycisk.onclick = function() {


    function Klient(nazwisko_k, imie_k, zawod_k) {
        this.nazwisko = nazwisko_k;
        this.imie = imie_k;
        this.zawod = zawod_k;
        this.wypisz = function(){
            document.write(this.nazwisko + "<br>" +this.imie + "<br>" + this.zawod + "<br>") ;
        }
    }

    var klie1 = new Klient("Oskar","Regulski","Piekarz")
    var klie2 = new Klient("Aleks","Pedalski","Pedał")

    klie1.wypisz()
    klie2.wypisz()
    

}