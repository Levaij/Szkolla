<?php 

mysqli_connent("localhost","root","","sklep3");

?> 



<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Nasz sklep komputerowy”</title>
            <link rel="stylesheet" href="index.css">
        </head>
        <body>
            <header>

                <a href="">Główna</a>
                <a href="podstrony/procesory.html">Procesory</a>
                <a href="podstrony/ram.html">RAM</a>
                <a href="podstrony/grafika.html">Grafika</a>
                
            </header>

            <section class="logo">

                <h2>Podzespoły komputerowe</h2>

            </section>

            <section class="glowny">

                <h1>Dzisiejsze promocje</h1>

                <table>
                
                    <tr>
                        <th>NUMER</th>
                        <th>NAZWA PODZESPOŁU</th>
                        <th>OPIS</th>
                        <th>CENA</th>
                    </tr>

                </table>


            </section>

            <footer>

                <div>

                    <img src="pliki/scalak.jpg" alt="TU powinno być zdięcie">

                </div>
                
                <div>
                    <h4>Nasz Sklep Komputerowy</h4>
                    <p>Współpracujemu z hurtownią <a href="http://www.edata.pl/">Edeta</a></p>
                </div>

                <div>
                    <p>zadzwoń:601 602 603</p>
                </div>

                <div>
                    <p>Stronę wykonał: 07300167673 07213033876</p>
                </div>


            </footer>
        </body>
    </html>