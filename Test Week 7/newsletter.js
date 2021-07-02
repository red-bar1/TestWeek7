//forse questa funzione non è necessaria visto che indico io che lo storage è locale e 
//gli do io il nome ma non so se possono comunque esserci delle eccezioni strane
function getStorage() {
    storageName = "localStorage";
    try {
        return (storageName in window && window[storageName] != null) ? window[storageName] : null;
    } catch (e) {
        return null;
    }
}

function subscribe() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").getAttribute("name");
    try {
        storage.setItem(key, value);
    } catch (e) {
        alert("Impossibile salvare i dati richiesti");
    }
}

function enableButton() {
    let inputName = document.getElementById("storageKey").value;
    if (inputName != "") {
        document.getElementById("subscribeButton").removeAttribute("disabled");
    }
}

function getItem() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    return key = storage.getItem(key);
}

function changeButton() {
    let key = getItem();
    if (key != null) {
        document.getElementById("subscribeButton").innerText = "Unsubscribe";
    }
}

function unsubscribe() {
    let storage = getStorage();
    let key = getItem();
    if (key != null) {
        storage.removeItem(key);    
    }
}

function welcomeUser() {
    let value = getItem();
    if (value != null) {
        alert("Benvenuto/a" + value);
    }
}


