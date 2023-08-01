function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("/menu.json", function(text){
    let data = JSON.parse(text);
    let count = Object.keys(data).length;
    let carousel = document.getElementById('carousel_id');
    for(let i = 0; i<count; i++){
        carousel__menu_id = `carousel__menu_id_${i}`
        carousel.insertAdjacentHTML('beforeend', 
        `<div class="carousel-cell">
            <div class="carousel__item">
                <div class="carousel__subtitle">${data[i].CategoryName}</div>
                <div class="carousel__menu" id="${carousel__menu_id}">
                </div>
            </div>
        </div>`);
        let count1 = Object.keys(data[i].List).length;
        let carousel__menu = document.getElementById(carousel__menu_id);
        for(let j = 0; j<count1; j++){
            carousel__menu.insertAdjacentHTML('beforeend', 
            `<div class="carousel__menu-element">
                <div class="menu__title">${data[i].List[j].Title}</div>
                <div class="menu__size">${data[i].List[j].Size}</div>
                <div class="menu__price">${data[i].List[j].Price}</div>
                <div class="menu__desc">${data[i].List[j].Description}</div>
            </div>`);
        }
    }
});

let windowOuterWidth = window.outerWidth;
const numCells = Math.trunc(windowOuterWidth / 393);
const inputMenu = document.querySelector('.carousel');
const inputDishes = document.querySelector('.dishes__carousel');
if (numCells == 1) {
    inputMenu.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false}`);
    inputDishes.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false}`);
}
if (numCells == 2) {
    inputMenu.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false, "cellAlign": "left"}`);
    inputDishes.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false, "cellAlign": "left"}`);
}
else {
    inputMenu.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false}`);
    inputDishes.setAttribute('data-flickity', `{"wrapAround": true, "prevNextButtons": false, "pageDots": false}`);
}