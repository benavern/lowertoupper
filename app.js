// Load library
var gui = require('nw.gui');
// Reference to window and tray
var win = gui.Window.get();
win.isMaximized = false;

function winCtrl(action){
	switch(action){

		case "close":
			win.close();
			break;

		case "maximize":
			if(win.isMaximized){
				win.unmaximize()
				win.isMaximized = false;
			}else{
				win.maximize()
				win.isMaximized = true;
			}
			break;

		case "minimize":
			win.minimize()
			break;
	}
}

function convert(){
	var source = document.getElementById('source').value,
		resultup = document.getElementById('resultup');
		resultlo = document.getElementById('resultlo');

	resultup.innerHTML = source.toUpperCase();
	resultlo.innerHTML = source.toLowerCase();
	
}