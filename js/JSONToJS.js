function objJavaScript(){
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      const myObj = JSON.parse(this.responseText);
      //document.getElementById("demo").innerHTML = myObj.name;
    };
    xmlhttp.open("GET", "json_demo.txt");
    xmlhttp.send();
    return xmlhttp;
}

function createTable(){

    let table = document.querySelector('table');
    let obj = objJavaScript();

    let thead = createThead(obj);
    let tbody = createTbody(obj);
    let tfoot = createTfoot();

    table.className = "table table-striped table-bordered table-hover"
    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

}

function createThead(obj){

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    
    for (let i in obj){
        
        let th = document.createElement('th');
        th.innerHTML = i.toUpperCase();
        tr.appendChild(th);
    }

    thead.className = "table-dark";
    thead.appendChild(tr);
    return thead;
}

function createTbody(obj){
    
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    
    for (let i in obj){
        
        let td = document.createElement('td');
        td.innerHTML = obj[i];
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
    return tbody;
}

function createTfoot(){

    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.className = "font-size: 14px";
    td.innerHTML = "foot";

    tr.appendChild(td);
    tfoot.appendChild(tr);
    return tfoot;
}