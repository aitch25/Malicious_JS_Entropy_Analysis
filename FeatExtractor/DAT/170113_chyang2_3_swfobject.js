
if(typeof deconcept == "undefined") var deconcept = {};
if(typeof deconcept.util == "undefined") deconcept.util = {};
if(typeof deconcept.SWFObjectUtil == "undefined") deconcept.SWFObjectUtil = {};
deconcept.SWFObject = function(swf, id, w, h, ver, c, quality, xiRedirectUrl, redirectUrl, detectKey) {
	if (!document.getElementById) { return; }
	this.DETECT_KEY = detectKey ? detectKey : 'detectflash';
	this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
	this.params = {};
	this.variables = {};
	this.attributes = [];
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }
	if(w) { this.setAttribute('width', w); }
	if(h) { this.setAttribute('height', h); }
	if(ver) { this.setAttribute('version', new deconcept.PlayerVersion(ver.toString().split("."))); }
	this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
	if (!window.opera && document.all && this.installedVer.major > 7) {
	if (!deconcept.unloadSet) {
	deconcept.SWFObjectUtil.prepUnload = function() {
	__flash_unloadHandler = function(){};
	__flash_savedUnloadHandler = function(){};
	window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs);
	}
	window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
	deconcept.unloadSet = true;
	}
	}
	if(c) { this.addParam('bgcolor', c); }
	var q = quality ? quality : 'high';
	this.addParam('quality', q);
	this.setAttribute('useExpressInstall', false);
	this.setAttribute('doExpressInstall', false);
	var xir = (xiRedirectUrl) ? xiRedirectUrl : window.location;
	this.setAttribute('xiRedirectUrl', xir);
	this.setAttribute('redirectUrl', '');
	if(redirectUrl) { this.setAttribute('redirectUrl', redirectUrl); }
}
deconcept.SWFObject.prototype = {
	useExpressInstall: function(path) {
	this.xiSWFPath = !path ? "expressinstall.swf" : path;
	this.setAttribute('useExpressInstall', true);
	},
	setAttribute: function(name, value){
	this.attributes[name] = value;
	},
	getAttribute: function(name){
	return this.attributes[name] || "";
	},
	addParam: function(name, value){
	this.params[name] = value;
	},
	getParams: function(){
	return this.params;
	},
	addVariable: function(name, value){
	this.variables[name] = value;
	},
	getVariable: function(name){
	return this.variables[name] || "";
	},
	getVariables: function(){
	return this.variables;
	},
	getVariablePairs: function(){
	var variablePairs = [];
	var key;
	var variables = this.getVariables();
	for(key in variables){
	variablePairs[variablePairs.length] = key +"="+ variables[key];
	}
	return variablePairs;
	},
	getSWFHTML: function() {
	var swfNode = "";
	if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
	if (this.getAttribute("doExpressInstall")) {
	this.addVariable("MMplayerType", "PlugIn");
	this.setAttribute('swf', this.xiSWFPath);
	}
	swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ (this.getAttribute('style') || "") +'"';
	swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
	var params = this.getParams();
	 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
	var pairs = this.getVariablePairs().join("&");
	 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
	swfNode += '/>';
	} else { 
	if (this.getAttribute("doExpressInstall")) {
	this.addVariable("MMplayerType", "ActiveX");
	this.setAttribute('swf', this.xiSWFPath);
	}
	swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'" style="'+ (this.getAttribute('style') || "") +'">';
	swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
	var params = this.getParams();
	for(var key in params) {
	 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
	}
	var pairs = this.getVariablePairs().join("&");
	if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
	swfNode += "</object>";
	}
	return swfNode;
	},
	write: function(elementId){
	if(this.getAttribute('useExpressInstall')) {
	var expressInstallReqVer = new deconcept.PlayerVersion([6,0,65]);
	if (this.installedVer.versionIsValid(expressInstallReqVer) && !this.installedVer.versionIsValid(this.getAttribute('version'))) {
	this.setAttribute('doExpressInstall', true);
	this.addVariable("MMredirectURL", escape(this.getAttribute('xiRedirectUrl')));
	document.title = document.title.slice(0, 47) + " - Flash Player Installation";
	this.addVariable("MMdoctitle", document.title);
	}
	}
	if(this.skipDetect || this.getAttribute('doExpressInstall') || this.installedVer.versionIsValid(this.getAttribute('version'))){
	var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
	n.innerHTML = this.getSWFHTML();
	return true;
	}else{
	if(this.getAttribute('redirectUrl') != "") {
	document.location.replace(this.getAttribute('redirectUrl'));
	}
	}
	return false;
	}
}
deconcept.SWFObjectUtil.getPlayerVersion = function(){
	var PlayerVersion = new deconcept.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
	var x = navigator.plugins["Shockwave Flash"];
	if(x && x.description) {
	PlayerVersion = new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
	}
	}else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0){ 
	var axo = 1;
	var counter = 3;
	while(axo) {
	try {
	counter++;
	axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+ counter);
//	document.write("player v: "+ counter);
	PlayerVersion = new deconcept.PlayerVersion([counter,0,0]);
	} catch (e) {
	axo = null;
	}
	}
	} else { try{
	var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
	}catch(e){
	try {
	var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
	PlayerVersion = new deconcept.PlayerVersion([6,0,21]);
	axo.AllowScriptAccess = "always";
	} catch(e) {
	if (PlayerVersion.major == 6) {
	return PlayerVersion;
	}
	}
	try {
	axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
	} catch(e) {}
	}
	if (axo != null) {
	PlayerVersion = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
	}
	}
	return PlayerVersion;
}
deconcept.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
	this.nbwm = arrVersion[3] != null ? parseInt(arrVersion[3]) : 0;
}
deconcept.PlayerVersion.prototype.versionIsValid = function(fv){
	if(this.major < fv.major) return false;
	if(this.major > fv.major) return true;
	if(this.minor < fv.minor) return false;
	if(this.minor > fv.minor) return true;
	if(this.rev < fv.rev) return false;
	return true;
}
deconcept.util = {
	getRequestParameter: function(param) {
	var q = document.location.search || document.location.hash;
	if (param == null) { return q; }
	if(q) {
	var pairs = q.substring(1).split("&");
	for (var i=0; i < pairs.length; i++) {
	if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
	return pairs[i].substring((pairs[i].indexOf("=")+1));
	}
	}
	}
	return "";
	}
}
deconcept.SWFObjectUtil.cleanupSWFs = function() {
	var objects = document.getElementsByTagName("OBJECT");
	for (var i = objects.length - 1; i >= 0; i--) {
	objects[i].style.display = 'none';
	for (var x in objects[i]) {
	if (typeof objects[i][x] == 'function') {
	objects[i][x] = function(){};
	}
	}
	}
}
if (!document.getElementById && document.all) { document.getElementById = function(id) { return document.all[id]; }}
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject; 
var SWFObject = deconcept.SWFObject;

var flash = function() {};

flash.prototype.controlVersion = function() {
    var version;
    var axo;
    var e;


    try {
        // version will be set for 7.X or greater players
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        version = axo.GetVariable("$version");
    } catch (e) {
    }


    if (!version) {
        try {
            // version will be set for 6.X players only
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");


            // installed player is some revision of 6.0
            // GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
            // so we have to be careful. 


            // default to the first public version
            version = "WIN 6,0,21,0";


            // throws if AllowScripAccess does not exist (introduced in 6.0r47)                
            axo.AllowScriptAccess = "always";


            // safe to call for 6.0r47 or greater
            version = axo.GetVariable("$version");


        } catch (e) {
        }
    }


    if (!version) {
        try {
            // version will be set for 4.X or 5.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = axo.GetVariable("$version");
        } catch (e) {
        }
    }


    if (!version) {
        try {
            // version will be set for 3.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = "WIN 3,0,18,0";
        } catch (e) {
        }
    }


    if (!version) {
        try {
            // version will be set for 2.X player
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            version = "WIN 2,0,0,11";
        } catch (e) {
            version = -1;
        }
    }
    var verArr = version.toString().split(',');
    var str = '';
    for (var i = 0, l = verArr.length; i < l; i++) {


        if (verArr[i].indexOf('WIN') != -1) {
            str += verArr[i].substring(3);
            str += '.';
        } else if (i == (l - 1)) {
            str += verArr[i];
        } else {
            str += verArr[i];
            str += '.';
        }


    }
    return (str);
};
flash.prototype.getSwfVer = function() {
    var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
    var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
    var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
    // NS/Opera version >= 3 check for Flash plugin in plugin array
    var flashVer = -1;


    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            var descArray = flashDescription.split(" ");
            var tempArrayMajor = descArray[2].split(".");
            var versionMajor = tempArrayMajor[0];
            var versionMinor = tempArrayMajor[1];
            var versionRevision = descArray[3];
            if (versionRevision == "") {
                versionRevision = descArray[4];
            }
            if (versionRevision[0] == "d") {
                versionRevision = versionRevision.substring(1);
            } else if (versionRevision[0] == "r") {
                versionRevision = versionRevision.substring(1);
                if (versionRevision.indexOf("d") > 0) {
                    versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
                }
            }
            var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
            //alert("flashVer="+flashVer);
        }
    }
    // MSN/WebTV 2.6 supports Flash 4
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
    // WebTV 2.5 supports Flash 3
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
    // older WebTV supports Flash 2
    else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
    else if (isIE && isWin && !isOpera) {
        flashVer = new flash().controlVersion();
    }
    return flashVer;
}