// Load library
var gui = require('nw.gui');
// Reference to window and tray
var win = gui.Window.get();
win.isMaximized = false;

function convert(toUp){
	var source = document.getElementById('source').value,
		result = document.getElementById('result');

	if(source.length > 0){
		if(toUp){
			result.innerHTML = source.toUpperCase();
		}
		else{
			result.innerHTML = source.toLowerCase();
		}
		
	}
	else{
		alert("Write or paste something to convert please!");
	}
}


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