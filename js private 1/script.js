function kwadratowa(){

    var a = parseFloat(prompt("Podaj liczbe a (f(x) = ax² + bx + c)"))
    var b = parseFloat(prompt("Podaj liczbe b (f(x) = ax² + bx + c)"))
    var c = parseFloat(prompt("Podaj liczbe c (f(x) = ax² + bx + c)"))

    var delta = (b * b - (4 * a * c))
    var pdelta = (Math.sqrt(delta))

    if (delta > 0){

        var x1 = ((-b - pdelta) / (2 * a))
        var x2 = ((-b + pdelta) / (2 * a))

        var postacogolna = ("f(x) = " + a + "x² " + b + "x " + c)
        var postaciloczynowa = ("f(x) = " + a + "(x- " + x1 + ")(x- " + x2 + ")")

        var p = (-b / (2 * a))
        var q = (-delta / (4 * a))

        var Postackanoniczna = ("f(x) = " + a + "(x - " + p + ")² + " + q)

        document.getElementById("kwadratowa").innerHTML= ("Postać ogólna: " + postacogolna + "<br> Postać iloczynowa: " + postaciloczynowa + "<br> Postać kanoniczna: " + Postackanoniczna)

    }
}