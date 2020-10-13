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
        console.log(element);

        const sentFromName = element.sentFromName;
        if (!!sentFromName) {
            document.getElementById("businessFromName").value = sentFromName;
            document.getElementById("sentFromNameform").action = "/mensageiro/configuracoes/remetente/editar/" + element.id + "?_method=PUT";
            console.log("Sender = " + sentFromName);
            mensageiroIniciar()
            mostrarbotaomensageiro2()
            mensageiro2()
        } else {
            document.getElementById("sentFromNameform").action = "/mensageiro/configuracoes/remetente/";
            console.log("Sender = " + sentFromName);

        };
    });
};

mostrarRemetente();

function buscarTemplate(callback) {
    let baseurl = 'http://localhost:3000/mensageiro/templates/buscar/'
    fetch(baseurl).then(function (response) { return response.json() })
        .then(callback)
}

function mostrarTemplateCriadosNaConfig() {
    buscarTemplate(mostrarTemplateCriadosNaConfigForm)
};

function mostrarTemplateCriadosNaConfigForm(response) {
    response.forEach(element => {
        console.log(element);

        if(!!element) {
            const messageId = element.id;
            const forProductStage = element.forProductStage;
    
            if (messageId == 1 && forProductStage == "started") {
                const messageContent = element.messageContent
                document.getElementById("forProductStageStarted").value = messageContent;
                document.getElementById("forProductStageStarted").disabled = true;
            };
            
            if (messageId == 2 && forProductStage == "ready") {
                const messageContent = element.messageContent
                document.getElementById("forProductStageReady").value = messageContent;
                document.getElementById("forProductStageReady").disabled = true;
            };        
    
            document.getElementById("myFirstTemplateMessagesform").action = "";
            document.getElementById("myFirstTemplateMessagesform").method = "";
            document.getElementById("submitMyFirstTemplateMessagesform").type = "";
    
            document.getElementById("editTemplatesFromConfigAlert").innerHTML = "<b>Para editar estes templates, visite a página de templates :)</b>";
            document.getElementById("submitMyFirstTemplateMessagesform").value = "Visitar Templates";
            document.getElementById("submitMyFirstTemplateMessagesform").onclick = redirecionarPaginaTodosTemplates;
        
            mensageiroIniciar()
            mostrarbotaomensageiro2()
            mensageiro2()
            mostrarbotaomensageiro3()
            mensageiro3()
        }
    });
};

mostrarTemplateCriadosNaConfig();

function redirecionarPaginaTodosTemplates(){
    window.location.href = "/mensageiro/templates";
}


function mensageiroIniciar() {
    document.getElementById("main-block-component-body-card-form-0").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-0").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-left-column-1").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-1").classList.add('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-1").classList.remove('main-block-component-body-card-form-hidden');

    document.getElementById('main-block-component-body-card-left-column-index-0').style = "cursor: pointer;";
    document.getElementById('main-block-component-body-card-left-column-index-0').onclick = mostrarInstrucoes;
}

function mostrarbotaomensageiro2() {
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.add('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.remove('main-block-component-body-card-left-column-button-hidden');
}

function mensageiro2() {
    document.getElementById("main-block-component-body-card-form-1").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-1").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-left-column-2").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form-hidden');

    document.getElementById('main-block-component-body-card-left-column-index-1').style = "cursor: pointer;";
    document.getElementById('main-block-component-body-card-left-column-index-1').onclick = mostrarMensageiro1;
}

function mostrarbotaomensageiro3() {
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.add('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.remove('main-block-component-body-card-left-column-button-hidden');
}

function mensageiro3() {
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-3").classList.remove('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-left-column-3").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-3").classList.add('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-form-3").classList.add('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form-hidden');

    document.getElementById('main-block-component-body-card-left-column-index-2').style = "cursor: pointer;";
    document.getElementById('main-block-component-body-card-left-column-index-2').onclick = mostrarMensageiro2;
}

function countChar(val) {
    let businessFromName = val.value.toUpperCase();
    let len = val.value.length;
    let totalSMSChar = 160;
    let availableChar = totalSMSChar - len;
    let smsLength1 = "Ao usar este nome, ainda vão restar <strong>";
    let smsLength2 = " caracteres</strong> para sua mensagem de SMS.";
    document.getElementById("charNum").innerHTML = smsLength1 + availableChar + smsLength2;
}

function orderStartedCountChar(val) {
    let businessFromName = document.getElementById("businessFromName").value.toUpperCase();
    let businessFromNameFormat = "[" + businessFromName + "]: ";
    let businessFromNameLen = businessFromName.length;
    let messageOrderStarted = val.value;
    let totalSMSChar = 160;
    let len = val.value.length;
    let availableChar = "Catacteres disponíveis: ";
    let availableCharCount = totalSMSChar - businessFromNameLen - len;
    document.getElementById("orderStarted").innerHTML = "Sua mensagem: " + "<strong>" + businessFromNameFormat + messageOrderStarted + "</strong><br>" + availableChar + "<strong>" + availableCharCount + "</strong>";
}

function orderReadyCountChar(val) {
    let businessFromName = document.getElementById("businessFromName").value.toUpperCase();
    let businessFromNameFormat = "[" + businessFromName + "]: ";
    let businessFromNameLen = businessFromName.length;
    let messageOrderStarted = val.value;
    let totalSMSChar = 160;
    let len = val.value.length;
    let availableChar = "Catacteres disponíveis: ";
    let availableCharCount = totalSMSChar - businessFromNameLen - len;
    document.getElementById("orderReady").innerHTML = "Sua mensagem: " + "<strong>" + businessFromNameFormat + messageOrderStarted + "</strong><br>" + availableChar + "<strong>" + availableCharCount + "</strong>";
}

function mostrarInstrucoes() {
    console.log("oi");

    //original state instruções
    document.getElementById("main-block-component-body-card-form-0").classList.remove('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-0").classList.add('main-block-component-body-card-form');   
    
    // original state form1
    document.getElementById("main-block-component-body-card-form-1").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-1").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.add('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.remove('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.add('main-block-component-body-card-left-column-button');
    
    // original state form2
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.add('main-block-component-body-card-left-column-index');
    // document.getElementById("main-block-component-body-card-left-column-button-2").classList.add('main-block-component-body-card-left-column-button-hidden');
    // document.getElementById("main-block-component-body-card-left-column-button-2").classList.remove('main-block-component-body-card-left-column-button');

    // original state form3
    document.getElementById("main-block-component-body-card-left-column-3").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.add('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-3").classList.add('main-block-component-body-card-form-hidden');
}

function mostrarMensageiro1() {
    console.log("oi");

    //hide instruções
    document.getElementById("main-block-component-body-card-form-0").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-0").classList.remove('main-block-component-body-card-form');   
    
    // show form1
    document.getElementById("main-block-component-body-card-form-1").classList.add('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-1").classList.remove('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.remove('main-block-component-body-card-left-column-button');
    
    // original state form2
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.add('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.remove('main-block-component-body-card-left-column-button');

    // original state form3
    document.getElementById("main-block-component-body-card-left-column-3").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.add('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-3").classList.add('main-block-component-body-card-form-hidden');

    mostrarbotaomensageiro2();
}

function mostrarMensageiro2() {
    console.log("oi");

    // hide instruções
    document.getElementById("main-block-component-body-card-form-0").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-form-0").classList.remove('main-block-component-body-card-form');   
    
    // original state form1
    document.getElementById("main-block-component-body-card-form-1").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-1").classList.add('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-1").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-1").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-1").classList.remove('main-block-component-body-card-left-column-button');
    
    // show form2
    document.getElementById("main-block-component-body-card-form-2").classList.add('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-2").classList.remove('main-block-component-body-card-form-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.add('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-2").classList.remove('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.add('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-2").classList.remove('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-2").classList.remove('main-block-component-body-card-left-column-button');

    // original state form3
    document.getElementById("main-block-component-body-card-left-column-3").classList.remove('main-block-component-body-card-left-column-hidden');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-left-column-3").classList.add('main-block-component-body-card-left-column');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.remove('main-block-component-body-card-left-column-index-hidden');
    document.getElementById("main-block-component-body-card-left-column-index-3").classList.add('main-block-component-body-card-left-column-index');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.add('main-block-component-body-card-left-column-button-hidden');
    document.getElementById("main-block-component-body-card-left-column-button-3").classList.remove('main-block-component-body-card-left-column-button');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-border-radius-right');
    document.getElementById("main-block-component-body-card-form-3").classList.remove('main-block-component-body-card-form');
    document.getElementById("main-block-component-body-card-form-3").classList.add('main-block-component-body-card-form-hidden');

    mostrarbotaomensageiro3();
}