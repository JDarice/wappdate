function obterContato(callback,filtro){
    let baseurl = 'http://localhost:3000/contatos/buscar'
    if(!!filtro){
        baseurl += '?' + filtro.coluna + '=' + filtro.valor;
        }

    fetch(baseurl).then(function(response){return response.json()})
        .then(callback)
}

function filtrarValor(){
    const buscarContato = document.getElementById('buscarContato').value;
    obterContato(listarContatos,{coluna:'nome',valor:buscarContato})
}

function listarContatos(response){
    const container = document.getElementById('main-block-component-body-list-container');
    container.innerHTML = '';
    response.forEach(element => {
        console.log(element);
        const mainBlockComponentBodyListLine = document.createElement('div');
        mainBlockComponentBodyListLine.classList.add('main-block-component-body-list-line');
        const row = document.createElement('div');
        row.classList.add('row');
        const Id = document.createElement('div');
        Id.classList.add('col-sm-1');
        Id.classList.add('main-block-component-body-list-item-name');
        const nome = document.createElement('div');
        nome.classList.add('col-sm-3');
        nome.classList.add('main-block-component-body-list-item-name');
        const status = document.createElement('div');
        status.classList.add('col-sm-1');
        status.classList.add('main-block-component-body-list-item-name');
        const acoes = document.createElement('div');
        acoes.classList.add('col-sm-6');
        acoes.classList.add('main-block-component-body-list-item-name');
        const atualizar = document.createElement('div');
        atualizar.classList.add('atualizar');
        const excluir = document.createElement('div');
        excluir.classList.add('excluir');
        const enviarMsg = document.createElement('div');
        excluir.classList.add('enviarMsg');
        const addFila = document.createElement('div');
        addFila.classList.add('btn');
        addFila.classList.add('btn-success');
        addFila.classList.add('main-block-component-body-list-item-cta1');
        Id.innerHTML = element.Id;
        nome.innerHTML = element.firstName + ' ' + element.lastName;
        status.innerHTML = element.status == 'on' ? 'Ativo' : 'Inativo';
        atualizar.innerHTML = 'Atualizar';
        excluir.innerHTML = 'Excluir';
        enviarMsg.innerHTML = 'Enviar Mensagem';
        addFila.innerHTML = '+ Fila/Esteira';
        acoes.appendChild(atualizar);
        acoes.appendChild(excluir);
        acoes.appendChild(enviarMsg);
        acoes.appendChild(addFila);
        row.appendChild(Id);
        row.appendChild(nome);
        row.appendChild(status);
        row.appendChild(acoes);
        mainBlockComponentBodyListLine.appendChild(row);
        container.appendChild(mainBlockComponentBodyListLine);        
    });
};

obterContato(listarContatos);

document.getElementById('botaoBuscarContato').addEventListener('click',function(){
    filtrarValor();
});