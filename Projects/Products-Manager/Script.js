let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total')
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');
let search = document.getElementById('search');

let mood = 'create';
let x;
//get total

function getTotal()
{
    if(price.value != null)
    {
        let result = (+price.value + +taxes.value + +ads.value)- +discount.value;
        total.innerHTML = result ;
        total.style.background = '#040';

    }else{
        total.innerHTML = ' '
        total.style.background = '#f10';
    }
}

//create product


let prodata;

if(localStorage.product != null){
    prodata = JSON.parse(localStorage.product);
}else{
    prodata = [];
}



create.onclick = function() {
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
  
    console.log(mood);

    //count
    if(mood === 'create'){
        if(newpro.count > 1 ){
            for(let x = 0;x <= newpro.count;x++){
                prodata.push(newpro);
            }
        }
        else{
            prodata.push(newpro);
        } 
    }
    else{
        prodata[x] = newpro;
        create.innerHTML = 'Create';
        count.style.display = 'block';
        mood = 'create';

    }
    
 
    
    //save data in localstorage

    localStorage.setItem('product',JSON.stringify(prodata));
    clearData();
    readData();


}
//clear inputs

function clearData(){
    title.value = '';
    price.value = null;
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.style.background = '#f10';
}

//read


function readData()
{
    let table = '';
    for(let i = 0; i < prodata.length; i++){
        table += `
        <tr>
            <td>${i}</td>
            <td>${prodata[i].title}</td>
            <td>${prodata[i].price}</td>
            <td>${prodata[i].taxes}</td>
            <td>${prodata[i].ads}</td>
            <td>${prodata[i].discount}</td>
            <td>${prodata[i].total}</td>
            <td>${prodata[i].category}</td>
            <td><button onclick = 'updateData(${i})' id="update">Update</button></td> 
            <td><button onclick = 'deleteData(${i})' id="delete">Delete</button></td> 
        </tr>
        
        `
    }
    
    document.getElementById('tbody').innerHTML = table;
    let deleteall = document.getElementById('deleteall');
    if(prodata.length > 0){
        deleteall.innerHTML = `
    <button onclick = 'deleteAll()'>Delete all (${prodata.length})</button>
    `;
    }
    else{
        deleteall.innerHTML = '';
    }
    

}
readData();


    
//delete
function deleteData(i){
    prodata.splice(i,1);
    localStorage.product = JSON.stringify(prodata);
    readData();
}

//deleteAll

function deleteAll(){
    localStorage.clear();
    prodata.splice(0);
    readData();
}

//update

function updateData(i){
    title.value = prodata[i].title;
    price.value = prodata[i].price;
    taxes.value = prodata[i].taxes;
    discount.value = prodata[i].discount;
    category.value = prodata[i].category;
    getTotal();
    create.innerHTML = 'Update';
    count.style.display = 'none';
    mood = 'update';
    x = i;
    scroll({
        top:0,
        behavior:'smooth',
    })

}
//search
let searchMode = 'title';
function getsearchmode(id){
    let search = document.getElementById('search');
    if(id == 'titlebtn'){
        searchMode = 'title';
        search.placeholder = 'title search';
    }else{
        searchMode = 'category';
        search.placeholder = 'category search';

    }
    search.focus();

}


function searchData(value){
    let table = '';
    if( searchMode == 'title'){
        for(let i = 0; i < prodata.length;i++){
                if(prodata[i].title.includes(value)){
                    table += `
                    <tr>
                        <td>${i}</td>
                        <td>${prodata[i].title}</td>
                        <td>${prodata[i].price}</td>
                        <td>${prodata[i].taxes}</td>
                        <td>${prodata[i].ads}</td>
                        <td>${prodata[i].discount}</td>
                        <td>${prodata[i].total}</td>
                        <td>${prodata[i].category}</td>
                        <td><button onclick = 'updateData(${i})' id="update">Update</button></td> 
                        <td><button onclick = 'deleteData(${i})' id="delete">Delete</button></td> 
                    </tr>
                    
                    `
            }
        
        }
    }else{
        for(let i = 0; i < prodata.length;i++){
            if(prodata[i].category.includes(value)){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${prodata[i].title}</td>
                    <td>${prodata[i].price}</td>
                    <td>${prodata[i].taxes}</td>
                    <td>${prodata[i].ads}</td>
                    <td>${prodata[i].discount}</td>
                    <td>${prodata[i].total}</td>
                    <td>${prodata[i].category}</td>
                    <td><button onclick = 'updateData(${i})' id="update">Update</button></td> 
                    <td><button onclick = 'deleteData(${i})' id="delete">Delete</button></td> 
                </tr>
            
                `
        }

    }
}
    document.getElementById('tbody').innerHTML = table;
    
}



//clean data