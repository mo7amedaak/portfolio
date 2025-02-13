let headeritems = document.getElementById('headeritems');
let Home = document.getElementById('h');
let About = document.getElementById('a');
let Services = document.getElementById('s');
let Portfolio = document.getElementById('p');
let Contact = document.getElementById('c');

let x = 1;


function Menu(){
    x++;
    if(x %2 == 0 ){
        Home.style.display = 'block';
        About.style.display = 'block';
        Contact.style.display = 'block';
        Services.style.display = 'block';
        Portfolio.style.display = 'block';

    }else{
        Home.style.display = 'none';
        About.style.display = 'none';
        Contact.style.display = 'none';
        Services.style.display = 'none';
        Portfolio.style.display = 'none';
    }
        
}