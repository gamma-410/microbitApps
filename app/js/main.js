// initialize BlueJelly
var ble = new BlueJelly();
var switchBox = false;

// gets DOM
var device_name = document.getElementById('device_name');
var get_device_name_button = document.getElementById('scan');
var connect_device_button = document.getElementById('connect');
var disconnect_device_button = document.getElementById('disconnect');
var button_box = document.getElementById('buttonbox');

button_box.style.display = "none";

window.onload = function () {
    ble.setUUID("UUID1", 'e95d6100-251d-470a-a062-fa1922dfa9a8', 'e95d9250-251d-470a-a062-fa1922dfa9a8');
}

ble.onScan = function (deviceName) {
    try{
        device_name.innerHTML = deviceName;
        get_device_name_button.style.display = "none";
        button_box.style.display = "block";
        alert("ペア設定が完了しました！");
    }
    catch {
        alert("ペア設定に失敗しました...");
    }
}


get_device_name_button.addEventListener('click', function () {
    ble.scan('UUID1')
});

connect_device_button.addEventListener('click', function(){
    ble.connectGATT('UUID1');
});

disconnect_device_button.addEventListener('click', function(){
    ble.disconnect('UUID1');
});
