const endpoint = "http://192.168.1.2";

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDapur.style.backgroundColor = "blue";
            dapurLedImage.src = "./assets/led-on (1).png";
        } else {
            ledDapur.style.backgroundColor = "#579fff";
            dapurLedImage.src = "./assets/led-off (1).png";
        }
    });
}

function getGarasiLed() {
    fetch(endpoint + "/garasi", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledGarasi.style.backgroundColor = "blue";
            garasiLedImage.src = "./assets/led-on (1).png";
        } else {
            ledGarasi.style.backgroundColor = "#579fff";
            garasiLedImage.src = "./assets/led-off (1).png";
        }
    });
}

function getKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledKamar.style.backgroundColor = "blue";
            kamarLedImage.src = "./assets/led-on (1).png";
        } else {
            ledKamar.style.backgroundColor = "#579fff";
            kamarLedImage.src = "./assets/led-off (1).png";
        }
    });
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setGarasiLed() {
    fetch(endpoint + "/garasi", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setKamarLed() {
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

function setTerasLed() {
    ledTeras.style.backgroundColor = "red";
    terasLedImage.src = "./assets/led-on (1).png";
}

getDapurLed();
getGarasiLed();
getKamarLed();