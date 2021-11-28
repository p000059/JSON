function convertObjectToString(){
    let objJavaScript = {name: "Marcelo", age: 38, city: "DF"}; //Storing data in the object variable.
    let objJavaScriptToString = JSON.stringify(objJavaScript); //Convert the object variable to string.
    document.getElementById("OJSS").innerHTML = objJavaScriptToString;  
}

function convertStringToObject(){
    let stringJSON = '{"name":"Ruth", "age":28, "city":"Ceilandia" }'; //Object Declaration
    let objJavaScript = JSON.parse(stringJSON); //Convert text JSON to Object JavaScript.
    let age1 = objJavaScript["age"]; //Accesses attribute for bracket.
    document.getElementById("STOJ").innerHTML = objJavaScript.name + ", " + age1; //Access the object's attribute.
}

function convertArrayToString(){
    let arrayJavaScript = ["Prato","Garfo","Faca","Copo","Panela","Mesa","Jarra","Colher"]; //Storing data in an array. 
    let arrayJavaScriptToString = JSON.stringify(arrayJavaScript); //Convert in an array to String.
    document.getElementById("AJSS").innerHTML = arrayJavaScriptToString;
}

function convertStringToArray(){
    let stringJSON = '["Leão","Macaco","Elefante","Girafa","Avestruz"]';
    let arrayJavaScript = JSON.parse(stringJSON);
    document.getElementById("SAJS").innerHTML = arrayJavaScript;
}

function storingDataInLocal(){ 
    
    let objJavaScript = {name: "Marcos Cavallera", age: 38, city: "DF"}; //Storing object in the objJavaScript
    let stringJSON = JSON.stringify(objJavaScript); //Converting object to String
    localStorage.setItem("fileJSON", stringJSON); //Storing Data

    let stringText = localStorage.getItem("fileJSON"); //Retrieving string
    let toObjJavaScript = JSON.parse(stringText); // Convert text to object
    document.getElementById("ROJS").innerHTML = toObjJavaScript.name;
}

function convertStringToArrayLong(){
    
    let StringJSON = '{"id":3, "name":"Marcos Lima", "email":"marcos.lima"}';
    let objJavaScript = JSON.parse(StringJSON);
    let text = "";

    for(let obj in objJavaScript){
        text += objJavaScript + ", ";
    }

    document.getElementById("STAL").innerHTML = text.id;
}
