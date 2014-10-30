(function(w, d) {
 var api = {
	initApi : function(success, failure) {
		dispatch("initApi", {}, success, failure);
	},
 
    printAsset : function(id, success, failure) {
        dispatch("printAsset", {assetId : id}, success, failure);
    },
    emailAsset : function(id, success, failure) {
        dispatch("emailAsset", {assetId : id}, success, failure);
    },
	viewAsset : function(id, success, failure) {
		dispatch("viewAsset", {assetId : id}, success, failure);
	}, 
 
    getCommand : function(key) {
        var cmd = _commands[key];
        return JSON.stringify(cmd);
    },
    
    callback : function(key, success, result) {
        var cmd = _commands[key];
        if(success) {
            cmd.success(result);
        }
        else {
            cmd.failure(result);
        }
        delete _command[key];
    }
 };
 
 var _commands = {};
 var _commandId = 0;
 
 function dispatch(command, arguments, successCallback, faliureCallback) {
    var key = "n" + (++ _commandId); 
    var commandObject = {cmd : command, args : arguments, success : successCallback, failure : faliureCallback};
    _commands[key] = commandObject;
    notify(key);
 }
 
 function notify(key) {
    var iframe = d.createElement("IFRAME");
    iframe.setAttribute("src", "macs://" + key);
    d.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
 }
 
 currentState = {
 
	getKeyPath : function (path) {
		var pathComponentsArray = path.split("/");
		return pathComponentsArray[pathComponentsArray.length - 2];
	},
 
	createCookie :function (key,value) {
		var date = new Date();
		date.setTime(date.getTime()+(365*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		document.cookie = key+"="+value+expires+"; path=/";
	},
 
	readCookie : function (key){
		var nameEQ = key + "=";
		var ca = document.cookie.split(';');
 
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return "";
	},
 
	eraseCookie : function (key) {
		currentState.createCookie(key,"");
	}
 
 };

 w.macs = api;
 d.macs = currentState;
 
})(window, document);