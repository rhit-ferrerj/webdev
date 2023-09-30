
const switcher = document.querySelector('#selector');

switcher.addEventListener('click', function(){
    console.log(document.querySelector('#imgcap').innerHTML)
    title = document.querySelector('#imgcap').innerHTML;
    var image = document.getElementById('trgtimg');
    if (title=="Hedwig") {
        document.querySelector('#imgcap').innerHTML = "Pigwidgeon";
        image.src = "images/pigwidgeon.png";
    } else {
        document.querySelector('#imgcap').innerHTML = "Hedwig";
        image.src = "images/hedwig.png";
    }
});
