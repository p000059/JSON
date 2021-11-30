function loadReport(){

    let headReport = ["Date","Event","Tipification","Value","Source","Commentary"];
    var bodyReport = [{"Data": "28/08/2015","Descricao": "Visita a Cliente","Classificacao": "Class - 2","Valor": "R$435,00","Verba": "RH","Comentario": "Cliente A"}, 
                      {"Data": "15/05/2013","Descricao": "Apresentação","Classificacao": "Class - 4","Valor": "R$328,00","Verba": "Financeiro","Comentario": "Cliente S"}, 
                      {"Data": "19/10/2014","Descricao": "Visita e Apresentação","Classificacao": "Class - 7","Valor": "R$548,78","Verba": "Diretoria","Comentario": "Cliente D"}, 
                      {"Data": "11/04/2015","Descricao": "Proposta","Classificacao": "Class - 34","Valor": "R$369,22","Verba": "Comercial","Comentario": "Cliente F"}, 
                      {"Data": "12/12/2015","Descricao": "Visita","Classificacao": "Class - 2","Valor": "R$120,20","Verba": "RH","Comentario": "Cliente G"}, 
                      {"Data": "25/06/2015","Descricao": "Evento","Classificacao": "Class - 1","Valor": "R$125,00","Verba": "Comercial","Comentario": "Cliente H"}, 
                      {"Data": "29/07/2015","Descricao": "Fechar Venda","Classificacao": "Class - 9","Valor": "R$333,33","Verba": "comercial","Comentario": "Cliente Jo"}
                     ];
    
    loadThead(headReport);
    //loadTbody(bodyReport);
    bodyReport.forEach(loadTbody);
}

function loadThead(hReport){

    let thead = document.querySelector('thead');
    let tr = document.createElement('tr');

    for(let i in hReport){

        let th = document.createElement('th');
        th.innerHTML = hReport[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);
}

function loadTbody(report){
        
    var tbody = document.querySelector('tbody');
    
    let tr = document.createElement('tr');

    for(let i in report){

        let td = document.createElement('td');
        td.innerHTML = report[i];
        tr.appendChild(td);
    } 
    tbody.appendChild(tr);
}