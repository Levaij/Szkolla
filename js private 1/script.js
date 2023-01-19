function kwadratowa(){

    var a = parseFloat(prompt("Podaj liczbe a (f(x) = ax² + bx + c)"))
    var b = parseFloat(prompt("Podaj liczbe b (f(x) = ax² + bx + c)"))
    var c = parseFloat(prompt("Podaj liczbe c (f(x) = ax² + bx + c)"))

    var postacogolna = (`f(x) = ${a}x² + ${b}x + ${c}`)

    var delta = (b * b - (4 * a * c))
    var pdelta = (Math.sqrt(delta))

    var p = (-b / (2 * a))
    var q = (-delta / (4 * a))

    if (b <= 0){

        var bminus = b * -1
        var po = (`${bminus} / (2 * ${a}) = ${p}`)

    }
    else {

        var po = (`-${b} / (2 * ${a}) = ${p}`)

    }

    var qo = (`-${delta} / (4 * ${a}) = ${q}`)

    var Postackanoniczna = (`f(x) = ${a}(x - ${p})² + ${q}`)

    var deltao = (`Δ = ${b}² - 4 * ${a} * ${c} = ${delta}`)

    if (delta > 0){

        var x1 = ((-b - pdelta) / (2 * a))
        var x2 = ((-b + pdelta) / (2 * a))

        if (b <= 0){

            var bminus = b * -1

            var x1o = (`${bminus} - ${pdelta} / (2 * ${a}) = ${x1}`)
            var x2o = (`${bminus} + ${pdelta} / (2 * ${a}) = ${x2}`)

        }
        else {

            var x1o = (`-${b} - ${pdelta} / (2 * ${a})`)
            var x2o = (`-${b} + ${pdelta} / (2 * ${a})`)
             
        }

        var postaciloczynowa = (`f(x) = a(x - ${x1})(x - ${x2})`)

        document.getElementById("kwadratowa").innerHTML= (`Postać ogólna: ${postacogolna} <br> Postać iloczynowa: ${postaciloczynowa} <br> Postać kanoniczna: ${Postackanoniczna}`)
        document.getElementById("inne").innerHTML= (`Miejsce zerowe (x1): ${x1o} <br> Miejsce zerowe (x2): ${x2o} <br> <br> Delta: ${deltao}`)
        document.getElementById("pq").innerHTML= (`p: ${po} <br> p: ${qo}`)
        document.getElementById("abc").innerHTML= (`a = ${a} <br> b = ${b} <br> c = ${c}`)

    }
    else if (delta = 0){

        var x0 = (-b / (2 * a))

        if (b <= 0){

            var bminus = b * -1

            var x0o = (`${bminus} / (2 * ${a})`)

        }
        else {
            var x0o = (`-${b} / (2 * ${a})`)
        }

        var postaciloczynowa = (`f(x) = a(x - ${x0})²`)
        document.getElementById("kwadratowa").innerHTML= (`Postać ogólna: ${postacogolna} <br> Postać iloczynowa: ${postaciloczynowa} <br> Postać kanoniczna: ${Postackanoniczna}`)
        document.getElementById("inne").innerHTML= (`Miejsce zerowe (x0 = (x1 oraz x2)): ${x0o} <br> <br> Delta: ${deltao}`)
        document.getElementById("pq").innerHTML= (`p: ${po} <br> p: ${qo}`)
        document.getElementById("abc").innerHTML= (`a = ${a} <br> b = ${b} <br> c = ${c}`)

    }
    else{
        document.getElementById("abc").innerHTML= (`blond`)
    }
}
