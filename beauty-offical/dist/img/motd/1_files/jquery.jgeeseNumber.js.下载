/**
 * @date : 2016. 10. 20.
 * @author : by jgeese
 * @email : jgeese@paran.com
 * @jQuery : jquery-1.6.4.min.js
 * 
 * 2016.10.20 => minus 처리부분 오류 수정
 **/
(function ($, G) {
	function K() {
	}
	$.extend(K.prototype, {
		_attachNumber : function (p_target, p_opt) {
			$(p_target).focus(this._doFocus).keydown(this._doKeydown).keyup(this._doKeyup).blur(this._doBlur);
			
			var _defaults = {
				isMinus : false
				, isComma : false
				, pointLength : 0
				, isStringNumber : false
			};
			
			var opt = $.extend(_defaults, p_opt);
			
			$(p_target).data("jgeeseNumberOption", opt);
		},
		_doFocus : function (event) {
			var target = $(event.target);
			var val = target.val();
			while( val.indexOf(",") > -1 ) {
				val = val.replace(",", "");
			}
			target.val(val);
		},
		_doBlur : function (event) {
			var target = $(event.target);
			var options = target.data("jgeeseNumberOption");
			
			$.jgeeseNumber._setNumber(target);
			
			var val = target.val();
			var isMinus = false;
			var pf, pa;
			
			if (val == "")
				return;
			
			if (val.substring(0, 1)  == "-") {
				isMinus = true;
				val = val.substring(1);
			}
			
			if (val.indexOf(".") > -1) {
				pf = val.substring(0, val.indexOf("."));
				pa = "." + val.substring(val.indexOf(".") + 1);
				
				if (pa == ".")
					pa = "";
			}
			else {
				pf = val;
				pa = "";
			}
			
			// 3자리씩 콤마 구분시
			if (options.isComma) {
				var len = pf.length; 
				var cnt = 0;
				var chgVal = "";
				
				for (var i = len -1; i >= 0; i--) {
					if (cnt > 0 && cnt % 3 == 0) {
						chgVal = "," + chgVal;
					}
					chgVal = pf.charAt(i) + chgVal;
					cnt++;
				}
				pf = chgVal;
			}
			target.val(isMinus ? "-" + pf + pa : pf + pa);
		}, 
		_doKeydown : function (event) {
			var sKeyCode = event.which;
			var target = $(event.target);
			var val = target.val();
			var options = target.data("jgeeseNumberOption");
			
			if (sKeyCode == 229) {
				return true;
			}
			
			// 0 ~ 9
			if ( (sKeyCode >= 48 && sKeyCode <= 57) || (sKeyCode >= 96 && sKeyCode <= 105)) {
				return true;
			}
			// - (minus)
			else if (options.isMinus && val.indexOf("-") == -1 && (sKeyCode == 189 || sKeyCode == 109) ) {
				return true;
			}
			// . (point)
			else if (options.pointLength > 0 && val.indexOf(".") == -1 && (sKeyCode == 190 || sKeyCode == 110) ) {
				return true;
			}
			//
			else if (sKeyCode >= 112 && sKeyCode <= 123) {
				return true;
			}
			
			if ($.jgeeseNumber._getOS().isMac) {
				// c, r, x, z
				if (sKeyCode == 67 || sKeyCode == 82 || sKeyCode == 86 || sKeyCode == 88 ) {
					return true;
				}
			}
			else {
				// ctrl + c, x, z
				if (event.ctrlKey && (sKeyCode == 67 || sKeyCode == 86 || sKeyCode == 88) ) {
					return true;
				}
			}
			
			switch (sKeyCode) {
			case 8 : 	// backspace
			case 9 : 	// TAB
			case 17 : 	// ctrl
			case 35 :	// HOME
			case 36 : 	// END
			case 37 :	// move up
			case 38 :	// move left
			case 39 :	// move right
			case 40 :	// move down
			case 46 :	// delete
			case 91 :	// window  (mac : command)
			case 144 :  // numlock
				return true;
				break;
			default :
				return false;
				break;
			}
		},
		_doKeyup : function (event) {
			var sKeyCode = event.which;
			var isCheck = false;
			
			// - (minus)
			if (sKeyCode == 189) {  
				isCheck = true;
			}
			// . (point)
			else if (sKeyCode == 190) { 	
				isCheck = true;
			}
			
			if (isCheck) {
				$.jgeeseNumber._setNumber($(event.target));
				return;
			}
		}, 
		_setNumber : function (target) {
			var val = target.val();
			var options = target.data("jgeeseNumberOption");
			var isMinus = options.isMinus;
			var pointLen = options.pointLength;
			var isPoint = false;
			var pointAfterCnt = 0;
			var c;
			var arrVal = [];
			var arrVal2 = [];
			var isMinsuVal = false;
			
			for (var i = 0; i < val.length; i++) {
				c = val.charAt(i);
				
				switch (c){
				case '-' :
					if (isMinus && i == 0) {
						isMinsuVal = true;
					}
					break;
				case '.' :
					if (pointLen <= 0)
						continue;
					else if (isPoint)
						continue;
					else if (arrVal.join("").indexOf("-") > -1 && i == 0)
						continue;
					
					arrVal2.push(c);
					isPoint = true;
					break;
				case '0' :
				case '1' :
				case '2' :
				case '3' :
				case '4' :
				case '5' :
				case '6' :
				case '7' :
				case '8' :
				case '9' :
					if (!isPoint) {
						arrVal.push(c);
					}
					else if (isPoint && pointLen > pointAfterCnt ) {
						arrVal2.push(c);
						pointAfterCnt++; 
					}
					break;
				}
			}
			
			if (arrVal.join("") == "" && arrVal2.join("") == "") {
				target.val("");
			}
			else if (options.isStringNumber) {
				target.val((isMinsuVal ? "-" : "") + arrVal.join("") + arrVal2.join(""));
			}
			else {
				target.val((isMinsuVal ? "-" : "") + parseInt("0" + arrVal.join(""), 10) + arrVal2.join(""));
			}
		},
		_getOS : function () {
			var agent = navigator.userAgent.toLowerCase();
			
			var os = {
				isWindows : /win/.test(agent),
				isMac : /mac/.test(agent),
				isLinux : /linux/.test(agent),
				isUnix : /x11/.test(agent)
			};
			return os;
		}
	});
	
	$.fn.jgeeseNumber = function (p_opt) {
		if (!this.length) return this;
		
		if (!$.jgeeseNumber.initialized) {
			$.jgeeseNumber.initialized = true;
		}
		return this.each(function () {
			$.jgeeseNumber._attachNumber(this, p_opt);
		});
	}; 
	
	$.jgeeseNumber = new K;
	$.jgeeseNumber.initialized = false;
	$.jgeeseNumber.version = "1.1";
})(jQuery);

/**
 * 
 * @param target
 * @param p_opt
 */
function addOnlyNumberEvent(target, p_opt) {
	
	if(target == null || typeof target != "object")
		target		= jQuery(".onlyNumber");
	
	target.jgeeseNumber(p_opt)
		.css({
			"ime-mode" : "disabled"
		});
}