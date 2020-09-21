
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

function orderStartedCountChar(val){
    let businessFromName = "[" + document.getElementById("businessFromName").value.toUpperCase() + "]: ";
    let businessFromNameLen = businessFromName.length;
    let messageOrderStarted = val.value;
    let totalSMSChar = 160;
    let len = val.value.length;
    let availableChar = "Catacteres disponíveis: ";
    let availableCharCount = totalSMSChar - businessFromNameLen - len;
    document.getElementById("orderStarted").innerHTML = "Sua mensagem: " + "<strong>" + businessFromName + messageOrderStarted + "</strong><br>" + availableChar + "<strong>" + availableCharCount + "</strong>";
}

function orderReadyCountChar(val){
    let businessFromName = "[" + document.getElementById("businessFromName").value.toUpperCase() + "]: ";
    let businessFromNameLen = businessFromName.length;
    let messageOrderStarted = val.value;
    let totalSMSChar = 160;
    let len = val.value.length;
    let availableChar = "Catacteres disponíveis: ";
    let availableCharCount = totalSMSChar - businessFromNameLen - len;
    document.getElementById("orderReady").innerHTML = "Sua mensagem: " + "<strong>" + businessFromName + messageOrderStarted + "</strong><br>" + availableChar + "<strong>" + availableCharCount + "</strong>";
}