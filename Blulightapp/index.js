//which button is active 0if none, 1 if profiles 2 if devices 3 if liveedit
var option = 0;
//mainbutton function based on active nav
function mainButton(){
  if(option === 0){

  }else if(option === 1){

  }else if(option === 2){

  }else if (option === 3) {
	document.getElementById("sendDiv").innerHTML = "Sent: " + "1".value + "<br/>";
  }else if (option === 4) {

  }else if (option === 5){

  }
}
//profiles button on press actions
function profiles(){
if(option != 1){
option = 1;
activeButton(1);
closeOpenNav(1, 1);
closeOpenNav(2, 0);
closeOpenNav(3, 0);
closeOpenNav(4, 0);
closeOpenNav(5, 0);

}else{
  option = 0;
  closeOpenNav(1, 0);
  activeButton(0);
}
}
//devices button on press actions
function devices(){
if(option != 2){
option = 2;
closeOpenNav(1, 0);
closeOpenNav(2, 1);
closeOpenNav(3, 0);
closeOpenNav(4, 0);
closeOpenNav(5, 0);
activeButton(2);

}else{
  option = 0;
  closeOpenNav(2, 0);
  activeButton(0);
}
}
//liveedit button on press actions
function liveEdit(){
if(option != 3){
option = 3;
closeOpenNav(1, 0);
closeOpenNav(2, 0);
closeOpenNav(3, 1);
closeOpenNav(4, 0);
closeOpenNav(5, 0);
activeButton(3);
}else{
  option = 0;
  closeOpenNav(3, 0);
activeButton(0);
}
}
//routine button on press actions
function routine(){
if(option != 4){
option = 4;
closeOpenNav(1, 0);
closeOpenNav(2, 0);
closeOpenNav(3, 0);
closeOpenNav(4, 1);
closeOpenNav(5, 0);
activeButton(4);
}else{
  option = 0;
  closeOpenNav(4, 0);
activeButton(0);
}
}
//preset button on press actions
function preset(){
if(option != 5){
  closeOpenNav(1, 0);
  closeOpenNav(2, 0);
  closeOpenNav(3, 0);
  closeOpenNav(4, 0);
  closeOpenNav(5, 1);
option = 5;
activeButton(5);
}else{
  option = 0;
  closeOpenNav(5, 0);
activeButton(0);
}
}
//function which changes layout based on active button
function activeButton(activeButton){
  document.getElementById('profiles').style.borderColor ="rgb(222,184,135)";
  document.getElementById('devices').style.borderColor ="rgb(222,184,135)";
  document.getElementById('liveEdit').style.borderColor ="rgb(222,184,135)";
  document.getElementById('routine').style.borderColor ="rgb(222,184,135)";
  document.getElementById('preset').style.borderColor ="rgb(222,184,135)";
  if(activeButton === 0){
    document.getElementById('mainButton').innerHTML = "";
    document.getElementById('mainButton').style.backgroundColor ="rgb(55,55,55)";
  }
  if(activeButton === 1){
  document.getElementById('profiles').style.borderColor ="rgb(202,202,202)";
  document.getElementById('mainButton').innerHTML ="Create new profile";
  document.getElementById('mainButton').style.backgroundColor ="rgb(50,205,50)";
  document.getElementById('mainButton').style.color ="rgb(0,0,0)";
}else if(activeButton === 2){
  document.getElementById('devices').style.borderColor ="rgb(202,202,202)";
  document.getElementById('mainButton').style.backgroundColor ="rgb(0,210,255)";
  document.getElementById('mainButton').innerHTML ="Connect";
  document.getElementById('mainButton').style.color ="rgb(55,55,55)";
}else if(activeButton === 3){
  document.getElementById('liveEdit').style.borderColor ="rgb(202,202,202)";
  document.getElementById('mainButton').style.backgroundColor ="rgb(255,165,0)";
  document.getElementById('mainButton').innerHTML ="On/Off";
  document.getElementById('mainButton').style.color ="rgb(55,55,55)";
}else if(activeButton === 4){
  document.getElementById('routine').style.borderColor ="rgb(202,202,202)";
  document.getElementById('mainButton').style.backgroundColor ="rgb(153,50,204)";
  document.getElementById('mainButton').innerHTML ="";
  document.getElementById('mainButton').style.color ="rgb(55,55,55)";

}else if(activeButton === 5){
  document.getElementById('preset').style.borderColor ="rgb(202,202,202)";
  document.getElementById('mainButton').style.backgroundColor ="rgb(255,255,0)";
  document.getElementById('mainButton').innerHTML ="";
  document.getElementById('mainButton').style.color ="rgb(55,55,55)";
  }
}
// navigation function opens or close settings deppending on active button or if theres no active button
function closeOpenNav(navToCloseOpen, closeOpenNav){
 if(navToCloseOpen === 1){
   if(closeOpenNav === 1){
  document.getElementById("profileNav").style.left = "40%";
}else{
  document.getElementById("profileNav").style.left = "120%";
  }
}
if(navToCloseOpen === 2){
  if(closeOpenNav === 1){
    document.getElementById("deviceNav").style.left = "40%";
  }else{
    document.getElementById("deviceNav").style.left = "120%";
  }
}
if(navToCloseOpen === 3){
  if(closeOpenNav ===1){
    document.getElementById("liveEditNav").style.left = "40%";
  }else{
    document.getElementById("liveEditNav").style.left = "120%";
  }
}
if(navToCloseOpen === 4){
  if(closeOpenNav ===1){
    document.getElementById("routineNav").style.left = "40%";
  }else{
    document.getElementById("routineNav").style.left = "120%";
  }
}
if(navToCloseOpen === 5){
  if(closeOpenNav ===1){
    document.getElementById("presetNav").style.left = "40%";
  }else{
    document.getElementById("presetNav").style.left = "120%";
  }
}
}

//bluetooth based on https://github.com/don/cordova-plugin-ble-central
// ASCII only
function bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

// ASCII only
function stringToBytes(string) {
    var array = new Uint8Array(string.length);
    for (var i = 0, l = string.length; i < l; i++) {
        array[i] = string.charCodeAt(i);
    }
    return array.buffer;
}

// this is ble hm-10 UART service
/*var blue= {
    serviceUUID: "0000FFE0-0000-1000-8000-00805F9B34FB",
    characteristicUUID: "0000FFE1-0000-1000-8000-00805F9B34FB"
};*/

//the bluefruit UART Service
var blue ={
	serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    txCharacteristic: '6e400002-b5a3-f393-e0a9-e50e24dcca9e', // transmit is from the phone's perspective
    rxCharacteristic: '6e400003-b5a3-f393-e0a9-e50e24dcca9e'  // receive is from the phone's perspective
}

var ConnDeviceId;
var deviceList =[];

function onLoad(){
	document.addEventListener('deviceready', onDeviceReady, false);
    bleDeviceList.addEventListener('touchstart', conn, false); // assume not scrolling
}

function onDeviceReady(){
	refreshDeviceList();
}


function refreshDeviceList(){
	document.getElementById("deviceList").innerHTML = ''; // empties the list
	if (cordova.platformId === 'android') { // Android filtering is broken
		ble.scan([], 5, onDiscoverDevice, onError);
	} else {
		ble.scan([blue.serviceUUID], 5, onDiscoverDevice, onError);
	}
}


function onDiscoverDevice(device){
	//Make a list in html and show devises

		var listItem = document.createElement('li'),
		html = device.name+ "," + device.id;
		listItem.innerHTML = html;
		document.getElementById("deviceList").appendChild(listItem);

}


function conn(){
	var  deviceTouch= event.srcElement.innerHTML;
	document.getElementById("debugDiv").innerHTML =""; // empty debugDiv
	var deviceTouchArr = deviceTouch.split(",");
	ConnDeviceId = deviceTouchArr[1];
	document.getElementById("debugDiv").innerHTML += "<br>"+deviceTouchArr[0]+"<br>"+deviceTouchArr[1]; //for debug:
	ble.connect(ConnDeviceId, onConnect, onConnError);
 }

 //succes
function onConnect(){
	document.getElementById("statusDiv").innerHTML = " Status: Connected";
	document.getElementById("deviceIDs").innerHTML = ConnDeviceId;
	ble.startNotification(ConnDeviceId, blue.serviceUUID, blue.rxCharacteristic, onData, onError);
}

//failure
function onConnError(){
	alert("Problem connecting");
	document.getElementById("statusDiv").innerHTML = " Status: Disonnected";
}

 function onData(data){ // data received from Arduino
	document.getElementById("receiveDiv").innerHTML =  "Received: " + bytesToString(data) + "<br/>";
}

function data(txt){
	messageInput.value = txt;
}

function sendData() { // send data to Arduino
	 var data = stringToBytes(messageInput.value);
	ble.writeWithoutResponse(ConnDeviceId, blue.serviceUUID, blue.txCharacteristic, data, onSend, onError);
}


function disconnect() {
	ble.disconnect(deviceId, onDisconnect, onError);
}

function onDisconnect(){
	document.getElementById("statusDiv").innerHTML = "Status: Disconnected";
}
function onError(reason)  {
	alert("ERROR: " + reason); // real apps should use notification.alert
}
