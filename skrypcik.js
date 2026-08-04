const dniLabel = document.getElementById('licznikDni');
const licznikLabel = document.getElementById('licznikLabel')

function licznikDniF() {
    const data1 = new Date('2025-11-24')
    const data2 = new Date()
    const roznicaMs = Math.abs(data2 - data1)
    const roznicaDni = Math.floor(roznicaMs / (1000 * 60 * 60 * 24))
    dniLabel.innerText = roznicaDni;

}

function roznica(date1, date2) {
    let dStart = date1 < date2 ? date1 : date2;
    let dEnd = date1 < date2 ? date2 : date1;

    let years = dEnd.getFullYear() - dStart.getFullYear();
    let months = dEnd.getMonth() - dStart.getMonth();
    let days = dEnd.getDate() - dStart.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(dEnd.getFullYear(), dEnd.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    licznikLabel.innerHTML = `<br><b><u>Czyli: </u><br><br>Lat: ${years}, <br>Miesiecy: ${months}, <br> Dni: ${days}!</b>`
}

licznikDniF()
roznica(new Date('2025-11-24'), new Date())

function pomyslyRandka() {
    const pomysl = document.getElementById('pomysly')
    const pomysly = [
        'Obejrzenie filmu z jedzonkiem',
        'Spacer o zachodzie słoneczka',
        'Wspólne gotowanie',
        'Wieczór planszówek',
        'Piknik w parku',
        'Wyjście do kina',
        'Kregle',
        'Escape room',
        'Wycieczka rowerowa',
        'Degustacja lodów',
        'Obserwacja gwiazd z kocem',
        'Mini wycieczka za miasto',
        'Karaoke we dwoje',
        'Wspólne pieczenie pizzy',
        'Śniadanie na mieście',
        'Malowanie małych obrazów',
        'Park trampolin',
        'Ścianka wspinaczkowa',
        'Kajaki',
        'Nocny spacer po mieście',
        'Fotograficzny spacer',
        'Wyjście na koncert',
        'Wesołe miasteczko',
        'Park linowy',
        'Mini golf',
        'Bilard',
        'Rzutki',
        'Lodowisko',
        'Basen',
        'Nauka tańca we dwoje',
        'Wycieczka pociągiem do nieznanego miasta',
        'Wspólne układanie puzzli',
        'Czytanie książek',
        'Wieczór filmowy',
        'Nockaa, budowanie fortu z poduszek',
        'Wyjście na urbex',
        'Turniej w gry komputerowe',
        'Maczek',
        'Nauka języków',
        'Siłownia'
    ]   
    let losowanie = Math.floor(Math.random()*40)
    pomysl.innerText = pomysly[losowanie]
}

function cytaty() {
    const cytatyDiv = document.getElementById('cytatyDiv')
    const cytatyy = [
`<div class="quote-box">
<div class="quote-text">„Miłość to nie patrzenie na siebie, ale patrzenie w tym samym kierunku.”</div>
<div class="quote-author">— Antoine de Saint-Exupéry</div>
</div>`,

`<div class="quote-box">
<div class="quote-text">„Kochać to nie znaczy patrzeć na siebie, lecz patrzeć razem w tym samym kierunku.”</div>
<div class="quote-author">— Antoine de Saint-Exupéry</div>
</div>`,
    
`<div class="quote-box">
    <div class="quote-text">„Miłość jest wtedy, gdy czyjeś szczeście jest ważniejsze niż twoje własne.”</div>
    <div class="quote-author">— H. Jackson Brown Jr.</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Gdzie jest miłość, tam jest życie.”</div>
    <div class="quote-author">— Mahatma Gandhi</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Kocham Cie nie tylko za to, kim jesteś, ale za to, kim jestem, gdy jestem z Tobą.”</div>
    <div class="quote-author">— Elizabeth Barrett Browning</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„W miłości nie chodzi o to, by znaleźć idealną osobe, ale o to, by nauczyć sie widzieć idealnie niedoskonałą.”</div>
    <div class="quote-author">— William Shakespeare</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Miłość to jedyna siła, która potrafi zmienić wroga w przyjaciela.”</div>
    <div class="quote-author">— Martin Luther King Jr.</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Kochać to oddychać. Miłość jest najważniejszym składnikiem życia.”</div>
    <div class="quote-author">— Paulo Coelho</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Miłość jest silniejsza niż śmierć, twardsza niż grób.”</div>
    <div class="quote-author">— Pablo Neruda</div>
</div>`,

`<div class="quote-box">
    <div class="quote-text">„Im bardziej kochamy, tym bardziej jesteśmy blisko prawdy.”</div>
    <div class="quote-author">— Albert Camus</div>
</div>`
]
    let losowanie = Math.floor(Math.random()*10)
    cytatyDiv.innerHTML = cytatyy[losowanie]
}
const data = document.getElementById('data')
function dataF() {
    let dzisiaj = new Date()
    data.value = dzisiaj.toISOString().split('T')[0]
    data.min = dzisiaj.toISOString().split('T')[0]
}
window.addEventListener("load", (event) => dataF())

const galleries = {
    poznan: [
        "zdjecia/poznan/1.jpg",
        "zdjecia/poznan/2.jpg",
        "zdjecia/poznan/3.jpg",
        "zdjecia/poznan/4.jpg",
        "zdjecia/poznan/5.jpg"
    ],

    plaza: [
        "zdjecia/plaza/1.jpg",
        "zdjecia/plaza/2.jpg",
        "zdjecia/plaza/3.jpg"
    ],

    wyjsciowo: [
        "zdjecia/wyjsciowo/1.jpg",
        "zdjecia/wyjsciowo/2.jpg",
        "zdjecia/wyjsciowo/3.jpg",
        "zdjecia/wyjsciowo/4.jpg"
    ],

    walentynki: [
        "zdjecia/walentynki/1.jpg",
        "zdjecia/walentynki/2.jpg",
        "zdjecia/walentynki/3.jpg",
        "zdjecia/walentynki/4.jpg",
        "zdjecia/walentynki/5.jpg"
    ],

    walentynkiOut: [
        "zdjecia/walentynkiOut/1.jpg",
        "zdjecia/walentynkiOut/2.jpg",
        "zdjecia/walentynkiOut/3.jpg",
        "zdjecia/walentynkiOut/4.jpg",
    ],

    inne: [
        "zdjecia/inne/1.jpg",
        "zdjecia/inne/2.jpg",
        "zdjecia/inne/3.jpg",
        "zdjecia/inne/4.jpg",
        "zdjecia/inne/5.jpg",
        "zdjecia/inne/6.jpg",
        "zdjecia/inne/7.jpg"
    ]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(name){

    currentGallery = galleries[name];
    currentIndex = 0;

    document.getElementById("galleryImage").src =
        currentGallery[currentIndex];

    document.getElementById("gallery").style.display="flex";
}

function nextPhoto(){

    currentIndex++;

    if(currentIndex >= currentGallery.length)
        currentIndex = 0;

    document.getElementById("galleryImage").src =
        currentGallery[currentIndex];
}

function prevPhoto(){

    currentIndex--;

    if(currentIndex < 0)
        currentIndex = currentGallery.length-1;

    document.getElementById("galleryImage").src =
        currentGallery[currentIndex];
}

function closeGallery(){
    document.getElementById("gallery").style.display="none";
}