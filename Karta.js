function initMap(){
    var pocetna = {lat:43.856,lng:18.413};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom:11.5,
        center: pocetna
    });
    addMarker({
        koordinate:{lat:43.859122,lng:18.433331},
        tekst:'<a href="Vijecnica.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Vijećnica</b></a>'});
    addMarker({
        koordinate:{lat:43.858538,lng:18.434231},
        tekst:'<a href="Inat kuca.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Inat Kuća</b></a>'});
    addMarker({
        koordinate:{lat:43.859726,lng:18.431242},
        tekst:'<a href="Bascarsija.html#sebilj" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Sebilj</b></a>'});
    addMarker({
        koordinate:{lat:43.859134,lng:18.428410},
        tekst:'<a href="Bascarsija.html#sahatkula" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Sahat-kula</b></a>'});    
    addMarker({
        koordinate:{lat:43.858859,lng:18.428077},
        tekst:'<a href="Bascarsija.html#bezistan" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Gazi Husrev-begov bezistan</b></a>'});
    addMarker({
        koordinate:{lat:43.859115,lng:18.429022},
        tekst:'<a href="EuropskiJerusalem.html#begova" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Gazi Husrev-begova džamija</b></a>'});
    addMarker({
        koordinate:{lat:43.859281,lng:18.427787},
        tekst:'<a href="O Sarajevu.html#meetingpoint" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Sarajevo - susret kultura</b></a>'});
    addMarker({
        koordinate:{lat:43.859439,lng:18.429559},
        tekst:'<a href="Bascarsija.html#saraci" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Ulica Sarači</b></a>'});
    addMarker({
        koordinate:{lat:43.859215,lng:18.431470},
        tekst:'<a href="Bascarsija.html#kazandziluk" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Ulica Kazandžiluk</b></a>'});
    addMarker({
        koordinate:{lat:43.860244,lng:18.430021},
        tekst:'<a href="EuropskiJerusalem.html#stara" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Stara pravoslavna crkva</b></a>'});
    addMarker({
        koordinate:{lat:43.859432,lng:18.425374},
        tekst:'<a href="EuropskiJerusalem.html#katedrala" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Katedrala Srca Isusova</b></a>'});
    addMarker({
        koordinate:{lat:43.858190,lng:18.425165},
        tekst:'<a href="EuropskiJerusalem.html#saborna" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Saborna crkva</b></a>'});
    addMarker({
        koordinate:{lat:43.857625,lng:18.428944},
        tekst:'<a href="Muzej.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Latinska ćuprija</b></a>'});
    addMarker({
        koordinate:{lat:43.856299,lng:18.425073},
        tekst:'<a href="EuropskiJerusalem.html#sinagoga" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Aškenaška sinagoga</b></a>'});
    addMarker({
        koordinate:{lat:43.858687,lng:18.439240},
        tekst:'<a href="Dariva.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Dariva</b></a>'});
    addMarker({
        koordinate:{lat:43.855461,lng:18.435163},
        tekst:'<a href="Zicara.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Žičara</b></a>'});
    addMarker({
        koordinate:{lat:43.858780,lng:18.421870},
        tekst:'<a href="Vjecna vatra.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Vječna vatra</b></a>'});
    addMarker({
            koordinate:{lat:43.853802,lng:18.399444},
            tekst:'<a href="Vilsonovo setaliste.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Vilsonovo šetalište</b></a>'});
    addMarker({
        koordinate:{lat:43.819503,lng:18.270926},
        tekst:'<a href="Vrelo Bosne.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Vrelo Bosne</b></a>'});
    addMarker({
        koordinate:{lat:43.748381,lng:18.264567},
        tekst:'<a href="Igman.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Igman</b></a>'});
    addMarker({
        koordinate:{lat:43.715597,lng:18.284662},
        tekst:'<a href="Bjelasnica.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Bjelašnica</b></a>'});
    addMarker({
        koordinate:{lat:43.737527,lng:18.567257},
        tekst:'<a href="Jahorina.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Jahorina</b></a>'});
    addMarker({
        koordinate:{lat:43.834248,lng:18.465432},
        tekst:'<a href="Trebevic.html" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Trebević</b></a>'});
    addMarker({
        koordinate:{lat:43.860528,lng:18.432384},
        tekst:'<a href="Bascarsija.html#kovaci" style="text-decoration: none;color:black; letter-spacing: 1px; font-size: 15px;" target="_blank"><b>Ulica Kovači</b></a>'});

     
    function addMarker(pozicije){
        var marker = new google.maps.Marker({
            position:pozicije.koordinate,
            map:map
        });
        const infowindow = new google.maps.InfoWindow({
        content: pozicije.tekst,
        });

        marker.addListener("click", () => {
            infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
            });
         });
         
     }
     
 }