function obterContato(callback, filtro) {
    let baseurl = 'http://localhost:3000/contatos/buscar'
    if (!!filtro) {
        baseurl += '?' + filtro.coluna + '=' + filtro.valor;
    }

    fetch(baseurl).then(function (response) { return response.json() })
        .then(callback)
}

function filtrarValor() {
    const buscarContato = document.getElementById('buscarContato').value;
    obterContato(listarContatos, { coluna: 'nome', valor: buscarContato })
}

function listarContatos(response) {
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
        enviarMsg.classList.add('enviarMsg');
        const addFila = document.createElement('div');
        addFila.classList.add('btn');
        addFila.classList.add('btn-success');
        addFila.classList.add('main-block-component-body-list-item-cta1');
        Id.innerHTML = element.Id;
        nome.innerHTML = element.firstName + ' ' + element.lastName;
        status.innerHTML = element.status == 'Active' ? 'Ativo' : 'Inativo';
        atualizar.innerHTML = '<div style="cursor: pointer;" onclick="editarContato(' + element.id + ')">Atualizar</div>';
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

document.getElementById('botaoBuscarContato').addEventListener('click', function () {
    filtrarValor();
});

function criarContato() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("cpfOrCnpj").value = "";
    document.getElementById("status").checked = true;
    document.getElementById("status").value = "Active";
    document.getElementById("formSubmit").value = "Salvar";
    document.getElementById("formMethodAction").method = "POST";
    document.getElementById("formMethodAction").action = "/contatos/criar";
    document.getElementById("main-block-component-body-detail-header-name").innerHTML = "Criando um novo contato";

    document.getElementById("main-block-component-body-detail").style.visibility = "visible";
    document.getElementById("main-block-component-body-detail").style.display = "block";
}

document.getElementById('phoneNumber').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

function fecharContatoForm() {
    document.getElementById("main-block-component-body-detail").style.display = "none";
    document.getElementById("main-block-component-body-detail").style.visibility = "hidden";
}

// function confirmationAlert() {
//   document.getElementById("confirmationAlert").style.display = "block";
//   document.getElementById("confirmationAlert").style.visibility = "visible";
// }

function editarContato(id) {
    const buscarContato = id;
    obterContato(editarContatoForm, { coluna: 'id', valor: buscarContato })
}

function editarContatoForm(response) {
    response.forEach(element => {
        console.log(element);

        const status = element.status;
        const firstName = element.firstName;
        const lastName = element.lastName;
        const email = element.email;
        const phoneNumber = element.phoneNumber;
        const cpf = element.cpf;
        const cnpj = element.cnpj;
        
        let cpfOrCnpj;
        if (!!cpf) {
            cpfOrCnpj = cpf;
        };
        if (!!cnpj) {
            cpfOrCnpj = cnpj;
        };

        let checked;
        if (status == "Active") {
            checked = true;
        };
        if(status == "Inactive") {
            checked = false;
        };

        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("email").value = email;
        document.getElementById("phoneNumber").value = phoneNumber;
        function phoneNumberFormat(e) {
            var e = document.getElementById("phoneNumber");
            var x = e.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        };
        phoneNumberFormat();
        document.getElementById("cpfOrCnpj").value = cpfOrCnpj;
        document.getElementById("status").value = status;
        document.getElementById("status").checked = checked;

        document.getElementById("main-block-component-body-detail-header-name").innerHTML = firstName + " " + lastName;


        document.getElementById("formMethodAction").action = "/contatos/editar/"+ element.id + "?_method=PUT";
        console.log("status = " + status);
        console.log("checked = " + checked);

    });

    document.getElementById("formMethodAction").method = "POST";
    document.getElementById("formSubmit").value = "Atualizar";
    document.getElementById("main-block-component-body-detail").style.visibility = "visible";
    document.getElementById("main-block-component-body-detail").style.display = "block";
}

function concactStatusToggle(){
    const status = document.getElementById("status").value;
    if(status == "Active"){
        document.getElementById("status").value = "Inactive";
        console.log(document.getElementById("status").value);
    };
    if(status == "Inactive"){
        document.getElementById("status").value = "Active";
        console.log(document.getElementById("status").value);
    };
}