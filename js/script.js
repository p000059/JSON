// //JSON

// //Sending to API - Convert object to JSON
// const jsonFileData = JSON.stringify(objs)
// console.log(jsonFileData)
// console.log(typeof jsonFileData)

// //Receive from API - Convert JSON to object
// const objData = JSON.parse(jsonFileData)
// console.log(objData)
// console.log(typeof objData)



function listData() { 			
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.onload = function(){
        
        loadJson(this); 	
    }
    
    xhttp.open("GET", "./js/tb_person.json", true);
    xhttp.responseText = "json";
    xhttp.send();
}

function loadJson(xhttp){

    if (xhttp.readyState === 4 && xhttp.status === 200) { 					
        var person = JSON.parse(xhttp.responseText); 					
        
        person.map((objPerson) => {

            document.getElementById('001').innerHTML = objPerson.id,
            document.getElementById('002').innerHTML = objPerson.co_person,
            document.getElementById('003').innerHTML = objPerson.nm_person,
            document.getElementById('004').innerHTML = objPerson.dt_birth_create
            console.log("Definido");
        });
    } 
}    

function clearData(){

    document.getElementById('001').innerHTML = '';
    document.getElementById('002').innerHTML = '';
    document.getElementById('003').innerHTML = '';
    document.getElementById('004').innerHTML = '';
    console.log("Campos limpos!")
}






