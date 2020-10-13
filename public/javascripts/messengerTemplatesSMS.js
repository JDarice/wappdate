function obterTemplate(callback, filtro) {
    let baseurl = 'http://localhost:3000/mensageiro/templates/buscar/'
    if (!!filtro) {
        baseurl += '?' + filtro.coluna + '=' + filtro.valor;
    }

    fetch(baseurl).then(function (response) { return response.json() })
        .then(callback)
}

function filtrarTemplate() {
    const buscarTemplate = document.getElementById('buscarTemplate').value;
    obterTemplate(mostrarTemplateForm, { coluna: 'nome', valor: buscarTemplate })
};

function mostrarTemplateForm(response) {
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
        const canal = document.createElement('div');
        canal.classList.add('col-sm-1');
        canal.classList.add('main-block-component-body-list-item-name');
        const acoes = document.createElement('div');
        acoes.classList.add('col-sm-6');
        acoes.classList.add('main-block-component-body-list-item-name');
        const atualizar = document.createElement('div');
        atualizar.classList.add('atualizar');
        const excluir = document.createElement('div');
        excluir.classList.add('excluir');
        const enviarMsg = document.createElement('div');
        enviarMsg.classList.add('enviarMsg');
        const addFila = document.createElement('div');
        addFila.classList.add('btn');
        addFila.classList.add('btn-success');
        addFila.classList.add('main-block-component-body-list-item-cta1');
        Id.innerHTML = element.Id;
        nome.innerHTML = element.messageName;
        canal.innerHTML = element.messageChannel;
        atualizar.innerHTML = '<div style="cursor: pointer;" onclick="editarTemplate(' + element.id + ')">Atualizar</div>';
        excluir.innerHTML = 'Excluir';
        enviarMsg.innerHTML = 'Enviar Mensagem';
        addFila.innerHTML = '+ Fila/Esteira';
        acoes.appendChild(atualizar);
        acoes.appendChild(excluir);
        acoes.appendChild(enviarMsg);
        acoes.appendChild(addFila);
        row.appendChild(Id);
        row.appendChild(nome);
        row.appendChild(canal);
        row.appendChild(acoes);
        mainBlockComponentBodyListLine.appendChild(row);
        container.appendChild(mainBlockComponentBodyListLine);
    });
};

function redirectIfNoTemplate(){
    if(!!obterTemplate(mostrarTemplateForm)){
        window.location.replace("/mensageiro/configuracoes/")
    }
};

redirectIfNoTemplate();

document.getElementById('botaoBuscarTemplate').addEventListener('click', function () {
    filtrarTemplate();
});

function criarTemplate() {
    document.getElementById("formSubmit").value = "Salvar";
    document.getElementById("formMethodAction").method = "POST";
    document.getElementById("formMethodAction").action = "/mensageiro/templates/criar";
    document.getElementById("main-block-component-body-detail-header-name").innerHTML = "Criando um novo template";

    document.getElementById("main-block-component-body-detail").style.visibility = "visible";
    document.getElementById("main-block-component-body-detail").style.display = "block";
}

function fecharTemplateForm() {
    document.getElementById("main-block-component-body-detail").style.display = "none";
    document.getElementById("main-block-component-body-detail").style.visibility = "hidden";
    document.getElementById("main-block-component-body-detail-visible").style.display = "none";
    document.getElementById("main-block-component-body-detail-visible").style.visibility = "hidden";
}

function editarTemplate(id) {
    const buscarTemplate = id;
    obterTemplate(editarTemplateForm, { coluna: 'id', valor: buscarTemplate })
}

function editarTemplateForm(response) {
    response.forEach(element => {
        // console.log(element);

        const messageName = element.messageName;
        const messageChannel = element.messageChannel;
        const messageContent = element.messageContent;
        const forProductStage = element.forProductStage;
        
        document.getElementById("messageName").value = messageName;
        document.getElementById("forProductStage").value = forProductStage;
        document.getElementById("messageContent").value = messageContent;
        templateCountChar(document.getElementById("messageContent"));
        
        document.getElementById("main-block-component-body-detail-header-name").innerHTML = messageName;
        document.getElementById("formMethodAction").action = "/mensageiro/templates/editar"+ element.id + "?_method=PUT";

    });

    document.getElementById("formMethodAction").method = "POST";
    document.getElementById("formSubmit").value = "Atualizar";
    document.getElementById("main-block-component-body-detail").style.visibility = "visible";
    document.getElementById("main-block-component-body-detail").style.display = "block";
}

function buscarRemetente(callback) {
    let baseurl = 'http://localhost:3000/mensageiro/configuracoes/remetente/buscar/'
    fetch(baseurl).then(function (response) { return response.json() })
        .then(callback)
}

function mostrarRemetente() {
    buscarRemetente(mostrarRemetenteForm)
};

function mostrarRemetenteForm(response) {
    response.forEach(element => {
        const sentFromName = element.sentFromName;
        document.getElementById("senderName").value = sentFromName;
    });
};

mostrarRemetente();

function templateCountChar(val) {
    console.log(val);
    let sentFromName = document.getElementById("senderName").value;
    console.log(sentFromName);
    let messageContent = val.value;
    let businessFromNameFormat = "[" + sentFromName + "]: ";
    let sentFromNameLen = sentFromName.length;
    let totalSMSChar = 160;
    let len = val.value.length;
    let availableChar = "Catacteres disponíveis: ";
    let availableCharCount = totalSMSChar - sentFromNameLen - len;
    document.getElementById("messageDisplayed").innerHTML = "<strong>" + businessFromNameFormat +  "</strong>" + messageContent;
    document.getElementById("messageDisplayedCount").innerHTML = availableChar + "<strong>" + availableCharCount + "</strong>";
}