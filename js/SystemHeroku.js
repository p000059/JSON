function accessAPI(typeRequest){
    let xhttp = new XMLHttpRequest();
    let link = "https://dbsys.herokuapp.com/home/readAll";
    // let typeRequest = "GET";
    let objArray = null;
    let text = "";
    console.log(typeRequest);
    
    xhttp.open(typeRequest, link);

    xhttp.onreadystatechange = function(){
        
        if(xhttp.readyState == 4 && xhttp.status == 200){
            text = JSON.parse(this.responseText);
        }
        readAllUser(text);
    }

    xhttp.send();

    return objArray;
}



function createUser(typeRequest){
    
    let xhttp = new XMLHttpRequest();
    let link = "http://dbsys.herokuapp.com/home/create?"; 
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let url = `name=${name}&email=${email}`;    
    // obj.name = name;
    // obj.email = email;

    if (nome.trim() == '') {
        alert('Erro no preenchimendo do nome.');
        return;
    }

    if (email.trim() == '') {
        alert('Erro no preenchimendo do email.');
        return;
    }

    xhttp.open(typeRequest, link+url);

    let objString = JSON.stringify(obj);

    return objString;
    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){
            text = JSON.parse(this.responseText);
        }

    }
}

function updateUser(){

}

function deleteUser(){

}

function readAllUser(objArray){

    console.log(objArray);
    let idTable = document.getElementById('idTable')
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    objArray.forEach(function(report) {
        let tr = document.createElement('tr');

        for(let i in report){
            let td = document.createElement('td');    
            td.innerHTML = report[i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);    
    });
    
    table.className = "table table-striped table-bordered table-hover";
    table.appendChild(tbody);
    idTable.appendChild(table);
    console.log(table);
}

function readOneUser(){

}

