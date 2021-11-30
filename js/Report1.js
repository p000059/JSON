let headPerson = ["Name","Age","Cars"];

let person = {
    "name":"Marcelo",
    "age":38,
    "cars":["Ford","Ferrari","Fiat"]
}

function readTable(){
    
    readTheadPerson();
    readTbodyPerson();
    
}

function readTheadPerson(){

    let thead = document.querySelector('thead')
    let tr = document.createElement('tr');
    
    for(let i in headPerson){
        
        let th = document.createElement('td');    
        th.innerHTML = headPerson[i];
        tr.appendChild(th);
    }
    
    thead.appendChild(tr);
    return thead;
}

function readTbodyPerson(){

    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');

    for(let i in person){

        let td = document.createElement('td');
        td.innerHTML = person[i];
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
    return tbody;
}
