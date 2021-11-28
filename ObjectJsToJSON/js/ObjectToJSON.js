var tbody = document.querySelector('tbody');

var relatorios = [{
                    "Data": "28/08/2015",
                    "Descricao": "Visita a Cliente",
                    "Classificacao": "Class.2",
                    "Valor": "R$435,00",
                    "Verba": "RH",
                    "Comentario": "Cliente A"
                    }, {
                    "Data": "15/05/2013",
                    "Descricao": "Apresentação",
                    "Classificacao": "Class.4",
                    "Valor": "R$328,00",
                    "Verba": "Financeiro",
                    "Comentario": "Cliente S"
                    }, {
                    "Data": "19/10/2014",
                    "Descricao": "Visita e Apresentação",
                    "Classificacao": "Class.7",
                    "Valor": "R$548,78",
                    "Verba": "Diretoria",
                    "Comentario": "Cliente D"
                    }, {
                    "Data": "11/04/2015",
                    "Descricao": "Proposta",
                    "Classificacao": "Class.34",
                    "Valor": "R$369,22",
                    "Verba": "Comercial",
                    "Comentario": "Cliente F"
                    }, {
                    "Data": "12/12/2015",
                    "Descricao": "Visita",
                    "Classificacao": "Class.2",
                    "Valor": "R$120,20",
                    "Verba": "RH",
                    "Comentario": "Cliente G"
                    }, {
                    "Data": "25/06/2015",
                    "Descricao": "Evento",
                    "Classificacao": "Class.1",
                    "Valor": "R$125,00",
                    "Verba": "Comercial",
                    "Comentario": "Cliente H"
                    }, {
                    "Data": "29/07/2015",
                    "Descricao": "Fechar Venda",
                    "Classificacao": "Class.9",
                    "Valor": "R$333,33",
                    "Verba": "comercial",
                    "Comentario": "Cliente Jo"
                }];

relatorios.array.forEach(function(relatorio) {
    
    var tr = document.createElement('tr');
    
    for (var campo in relatorio) {
        
        var td = document.createElement('td');
        td.innerHTML = relatorio[campo];
        tr.appendChild(td);
    };
    
    tbody.appendChild(tr);
});




// function sendData(){
    
//     let tbody = document.getElementById("tbody");
    
//     let myJSON = [
//         { "Data": "28/08/2015", "Descricao": "Visita a Cliente", "Classificacao": "Class.2", "Valor": "R$435,00", "Verba": "RH", "Comentario": "Cliente A" },
//         { "Data": "15/05/2013", "Descricao": "Apresentação", "Classificacao": "Class.4", "Valor": "R$328,00", "Verba": "Financeiro", "Comentario": "Cliente S" },
//         { "Data": "19/10/2014", "Descricao": "Visita e Apresentação", "Classificacao": "Class.7", "Valor": "R$548,78", "Verba": "Diretoria", "Comentario": "Cliente D" },
//         { "Data": "11/04/2015", "Descricao": "Proposta", "Classificacao": "Class.34", "Valor": "R$369,22", "Verba": "Comercial", "Comentario": "Cliente F" },
//         { "Data": "12/12/2015", "Descricao": "Visita", "Classificacao": "Class.2", "Valor": "R$120,20", "Verba": "RH", "Comentario": "Cliente G" },
//         { "Data": "25/06/2015", "Descricao": "Evento", "Classificacao": "Class.1", "Valor": "R$125,00", "Verba": "Comercial", "Comentario": "Cliente H" },
//         { "Data": "29/07/2015", "Descricao": "Fechar Venda", "Classificacao": "Class.9", "Valor": "R$333,33", "Verba": "comercial", "Comentario": "Cliente J" }
//         ];
        
//     //let myObjectJavaScript = JSON.parse(myJSON);
    
//     myJSON.array.forEach(function(myJSON){

//         let tr = document.createElement('tr');

//         for(let campo in myJSON){
            
//             let td = document.createElement('td');
//             td.innerHTML = myJSON[campo];
//             tr.appendChild(td);
//         };
        
//         tbody.appendChild(tr);

//     });

//     document.getElementById("OJSS").innerHTML = myObjectJavaScript;
// }

