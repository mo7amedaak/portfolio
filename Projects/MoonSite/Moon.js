let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains3 = document.getElementById('mountains3');
let photos = document.querySelector('.photos');
let moontxt = document.getElementById('moontxt');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains1.style.top = value*1.2 + 'px';
    mountains2.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.left = value*8 + 'px';
    moontxt.style.fontSize = value*0.8 + 'px';
    if(value >= 100){
        river.style.display = 'none';
        mountains1.style.display = 'none';
        mountains2.style.display = 'none';
        moon.style.display = 'none';
        photos.style.background = 'linear-gradient(#0b0014,#0b4897)';
        moontxt.style.fontSize = '100px';
        moontxt.style.position= 'fixed';



    }else{
        river.style.display = 'block';
        river.style.display = 'block';
        mountains1.style.display = 'block';
        mountains2.style.display = 'block';
        moon.style.display = 'block';
        photos.style.background = 'linear-gradient(#0b0014,#240014)';
        moontxt.style.fontsize = value + 'px';



    }
    if(value >= 380){
        moontxt.style.display= 'none';

    }else{
        moontxt.style.display= 'block';

    }
    


}