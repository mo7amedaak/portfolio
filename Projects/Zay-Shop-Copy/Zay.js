let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let parnet1 = document.getElementById('parnet1');
let parnet2 = document.getElementById('parnet2');
let parnet3 = document.getElementById('parnet3');
let son1 = document.getElementById('son1');
let son2 = document.getElementById('son2');
let son3 = document.getElementById('son3');
let son4 = document.getElementById('son4');
let son5 = document.getElementById('son5');
let son6 = document.getElementById('son6');
let son7 = document.getElementById('son7');
let menu = document.getElementById('menu');
let Home = document.getElementById('Home');
let About = document.getElementById('About');
let Shop = document.getElementById('Shop');
let Contact = document.getElementById('Contact');
let header = document.getElementById('header');
let navicons = document.getElementById('navicons');
let text = document.getElementById('text');
let footer = document.getElementById('footer');
let i = 2;
let x = 1;

if(footer.style.flexDirection == 'row'){
    Home.style.display = 'block';
    About.style.display = 'block';
    Contact.style.display = 'block';
    Shop.style.display = 'none';
    text.style.display = 'none';
    navicons.style.display = 'flex';
}




function Menu(){
    x++;
    if(x %2 == 0 ){
        Home.style.display = 'block';
        About.style.display = 'block';
        Contact.style.display = 'block';
        Shop.style.display = 'block';
        text.style.display = 'block';
        navicons.style.display = 'flex';
    }else{
        Home.style.display = 'none';
        About.style.display = 'none';
        Contact.style.display = 'none';
        Shop.style.display = 'none';
        text.style.display = 'none';
        navicons.style.display = 'none';
    }
        
}

function SliderRight(){

    if(i == 1){
        slide1.style.display = 'flex';
        slide2.style.display = 'none';
        slide3.style.display = 'none';

    }else if(i == 2){
        slide2.style.display = 'flex';
        slide3.style.display = 'none';
        slide1.style.display = 'none';
    }
    else if(i == 3){
        slide3.style.display = 'flex';
        slide2.style.display = 'none';
        slide1.style.display = 'none';
    }
    i++;
    if(i>3){
        i = 1;
    }
    console.log(i);

}
function SliderLeft(){ 
    if(i == 3){
        slide3.style.display = 'flex';
        slide2.style.display = 'none';
        slide1.style.display = 'none';
    }
    i--;
    if(i == 1){
        slide1.style.display = 'flex';
        slide2.style.display = 'none';
        slide3.style.display = 'none';
    }
    else if(i == 2){
        slide2.style.display = 'flex';
        slide3.style.display = 'none';
        slide1.style.display = 'none';
    }
    
    if(i < 1){
        slide3.style.display = 'flex';
        slide2.style.display = 'none';
        slide1.style.display = 'none';
        i = 3;
    }
    
    console.log(i);
}



function Gender(){
    son1.style.display = 'block';
    son2.style.display = 'block';
    son3.style.display = 'none';
    son4.style.display = 'none';
    son5.style.display = 'none';
    son6.style.display = 'none';
    son7.style.display = 'none';
}
function Sale(){
    son1.style.display = 'none';
    son2.style.display = 'none';
    son3.style.display = 'block';
    son4.style.display = 'block';
    son5.style.display = 'none';
    son6.style.display = 'none';
    son7.style.display = 'none';
}
function Product(){
    son1.style.display = 'none';
    son2.style.display = 'none';
    son3.style.display = 'none';
    son4.style.display = 'none';
    son5.style.display = 'block';
    son6.style.display = 'block';
    son7.style.display = 'block';
}

