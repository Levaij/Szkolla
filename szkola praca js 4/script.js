var przycisk = document.getElementById("przycisk1")
przycisk.onclick = function() {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var data_n = new Date();
    var data_r = data_n.toLocaleString('pl-PL', options);
    var data_c = data_n.toLocaleTimeString();
    document.write("<b>Dzisiaj jest:"+ "<br>" + "   " + data_r + "<br>" + "<b>Godzina:</b>" + "   " + data_c + "</b>");

}