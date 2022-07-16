let buttonDodaj = document.getElementById('dodaj');
let buttonUsun = document.getElementById('usun');
let paragraf = document.getElementById('tekst');

buttonDodaj.onclick = function () {
    paragraf.innerText = 'W paragrafie powinien pojawić się przykładowy tekst';
}

buttonUsun.onclick = function () {
    paragraf.innerText = '';
}

