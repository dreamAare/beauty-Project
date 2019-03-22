/*
\ * 분류 : 문자함수
 * 요약 : 문자열이 공백인지 체크한다.
 */
function isEmpty(P) {
    if (P != null) {
      P = fnReplaceCharAll(P,"\n","");
      P = fnReplaceCharAll(P,"\r","");
   }
   return ((P == null) || (P.replace(/ /gi,"").length == 0));
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열이 공백인지 체크한다.
 */
function isEmpty2(P) {
	
	if (P != null) {
		P = fnReplaceCharAll(P,"\n","");
	    P = fnReplaceCharAll(P,"\r","");
	    P = fnReplaceCharAll(P," ","");
	    
	    return (P == "");
	}
	return true;  
}

function EmptyReplace(P){

	if (P != null) {
		P = fnReplaceCharAll(P,"\n","");
	}
	
	return P;
}
/**
 * 분류 : 문자함수
 * 요약 : 문자열에서 태그 삭제
 * @param P
 * @returns
 */
function removeHTMLTag(P) {
	return P.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,"");
}


function removeExp(str) {
	var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	return str.replace(regExp, "");
}

/*
 * 분류 : 문자함수
 * 요약 : 변수에 문자만 있는지 체크한다.(공백허용X)
 */
function isString(P) {
   var len = P.length;

   for (var i = 0; i < len; i++) {
      if ( ((P.charAt(i) >= "a") && (P.charAt(i) <= "z")) || ((P.charAt(i) >= "A") && (P.charAt(i) <= "Z")) ) {
      }
      else {
         return false;
      }
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 변수에 문자만 있는지 체크한다.(공백허용O)
 */
function isString2(P) {
   var len = P.length;

   for (var i = 0; i < len; i++) {
      if ( ((P.charAt(i) >= "a") && (P.charAt(i) <= "z")) || ((P.charAt(i) >= "A") && (P.charAt(i) <= "Z")) || P.charAt(i) == " " ) {
      }
      else {
         return false;
      }
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 변수에 숫자만 있는지 체크한다.
 */
function isDigit (P) {
   var len = P.length;

   for (var i = 0; i < len; i++) {
      if ( (P.charAt(i) >= "0") && (P.charAt(i) <= "9") ) {
      }
      else {
         return false;
      }
   }
   return true;
}

/************************************************************
* 문자열이 숫자형태 인지 체크
* @param str
* @param inputName
* @return
* (kc < 48 || kc > 57)   //키보드 0,1,2,3,4,5,6,7,8,9 를 제외한 키코드
* (kc < 96 || kc > 105)  //키보드 num0, num1 ........ num9를 제외한 키코드
* (kc != 8 && kc != 9)     //키보드 backspace키와 tab키를 제외한 키코드 *
***********************************************************/
function strCheckNum(inputName){
  var kc = event.keyCode;
  if(!((kc > 47 && kc < 58) || (kc > 95 && kc < 106) || kc == 8 || kc == 9 || kc == 13)){
  	alert('숫자만 입력할 수 있습니다.');
     $("[name = "+inputName+"]").val("");
     $("[name = "+inputName+"]").focus();
     return false;
  }
}

/*
 * 분류 : 문자함수
 * 요약 : 객체의 값이 숫자만 있는지 체크한다. 숫자외에 값이 잇을경우 경우창을 뛰우고 해당객체로 포커스를 이동시킨다.
 */
function isDigit2 (obj) {
   if(isNaN(obj.value) && obj.value != 0){
      alert("숫자를 입력하십시오");
      obj.focus();
      return false;
   }
   return true;
}

/*
 * 분류 : 문자함수
 * 요약 : 단순 PASSWORD Check, 6자 미만, 영숫자 미 혼용, ID+글자사용, ID 와 동일 사용, 동일문자열 4회 이상연속
 */
function simplePASSWORDCheck(strpass, id) {

   var chkStr = new Array();
   var chkFlag = 0;
   var chkCnt = 0;
   var digitFlag = 0;
   var alphaFlag = 0;

   if(strpass.length < 6)
   {
      // 영 숫자 혼용으로 6자 이상 입력 하십시요.
      return "MIN_LENGTH";
   }

   if(strpass == id || strpass.search(id) != -1)
   {
      return "INCLUDE_ID";
   }


   for(i= 0; i < strpass.length; i++)
   {
      if(chkStr[chkCnt] == strpass.charAt(i)) chkCnt += 1;
      else chkCnt = 0;

      chkStr[chkCnt] = strpass.charAt(i);
      if(chkFlag == 0 && (chkCnt + 1) > 3) chkFlag = 1;

      if ( (strpass.charAt(i) >= "0") && (strpass.charAt(i) <= "9") )
          digitFlag = 1;

      if ( (strpass.charAt(i) >= "a") && (strpass.charAt(i) <= "z") ||
           (strpass.charAt(i) >= "A") && (strpass.charAt(i) <= "Z") )
          alphaFlag = 1;

   }
   // 영 숫자 혼용이 아닌경우
   if(digitFlag == 0 || alphaFlag == 0)
   {
      // 영 숫자 혼용으로 6자 이상 입력 하십시요.
      return "NOT_MIX";
   }

   // 동일 문자 연속 4회 이상인 경우
   if(chkFlag == 1)
   {
     // 동일 문자열이 4회 이상 연속되었습니다.
     return "SAME_STRING";
   }

   return "OK";
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열에서 대상문자를 모두 대체문자로 변경한다. (원본문자열, 대상 문자, 대체 문자)
 */
function fnReplaceCharAll(str, tarCh, repCh) {
	
	var nowCh  = "";
	var sumStr = "";
	
	if (typeof str == "string") {
		var len    = str.length;
		
		for (var i = 0; i < len; i++) {
			if (str.charAt(i) == tarCh)
				nowCh = repCh;
			else
				nowCh = str.charAt(i);

	      sumStr = sumStr + nowCh;
		}
	}
	return sumStr;
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열의 자우공백을 제거한다. 공백만 있는경우에는 작동하지 않는다.
 */
function trim(str) {
    var start = 0;
    var end   = str.length - 1;
    
    for (var i=0; i < str.length; i++) {
         if (str.substring(i,i+1) != " ") {
             start = i;
             break;
         }
    }

    for (var i=str.length - 1; i >= 0; i--) {
         if (str.substring(i,i+1) != " ") {
             end = i + 1;
             break;
         }
    }

    return str.substring(start, end);
}

/*
 * 분류 : 문자함수
 * 요약 : 문자열의 자우공백을 제거한다. (공백만 있는경우도 됨)
 */
function trim2(str) {
	if(isEmpty(str)){
		return "";
	}
    var start = 0;
    var end   = str.length - 1;
    
    for (var i=0; i < str.length; i++) {
         if (str.substring(i,i+1) != " ") {
             start = i;
             break;
         }
    }

    for (var i=str.length - 1; i >= 0; i--) {
         if (str.substring(i,i+1) != " ") {
             end = i + 1;
             break;
         }
    }

    return str.substring(start, end);
}

/*
 * 분류 : 문자함수
 * 요약 : 객체의 문자열의 길이를 바이트 단위로 체크한다. (객체, 최대 바이트 길이값)
 */
function fnCheckStringLength(stringElement,MAX)
{
  	var origin_str = stringElement.value;
  	var return_str ="";
  	var strLen = 0;
  	var return_total = 0;
  	var temp_len=0;
  	    
  	strLen = origin_str.length;
  	    
  	for( i=0 ; i < strLen ; i++ )
  	{
  	   var ch = origin_str.charAt(i);
  
  	   if( escape(ch).length > 4 ) return_total += 2;
  	   else if( ch != '\r' ) return_total++;
  		
  	   if( return_total > MAX )
  	   {
  	      alert(MAX + " 바이트 이하로 입력해 주세요.");
  	      stringElement.value=return_str;
  					  stringElement.focus();
  					  return_total=temp_len;
  	      break;
  	   }
  	   else
  	   {
  				   return_str += ch;
  				   temp_len=return_total;
  	   }
  	}
  	return;
}

/**
 * 분류 : 문자함수
 * 요약 : 텍스트를 * 로 변환  (ex : ("abcdebe" , 2)  = abcde**)
 * @param source
 * @param len
 * @returns {String}
 */
function getStringReverseHidden(source, len) {
	var sReturn = "";
	if(!isEmpty(source)) {
		var strLen = source.length;
		for(var i=0; i<strLen; i++) {
			if( i >= (strLen - len)) {
				sReturn += "*";
			} else {
				sReturn += source.charAt(i);
			}
		}
	}
	return sReturn;
}

function getStringByte(source) {
	var result = "";
	var nowLength = 0;
	
	if(!isEmpty(source)) {
		try {
			var cTmp = "";
			var bTmp = "";
			var strLength = 0;
			
			for (var i = 0; i < source.length; i++) {
				cTmp = source.charAt(i);
				
				nowLength += cTmp.length;
			}
			
		} catch(e) {
		}
	}
	return nowLength;
}

/**
 * 분류 : 문자함수
 * 요약 : 문자열을 len 만큼 자르고 "..." 을 붙여 잘린 문자열임을 표시
 * @param source
 * @param len
 * @returns {String}
 */
function getByteString(source, len) {
	var result = "";
	if(!isEmpty(source) && len > 0) {
		try {
			var cTmp = "";
			var bTmp = "";
			var nowLength = 0;
			var strLength = 0;
			
			for(var i=0; i<source.length; i++) {
				cTmp = source.charAt(i);
				strLength = cTmp.length;
				if(strLength == 3) {
					nowLength += 2;
				} else {
					nowLength += strLength;
				}
				
				if(nowLength <= len) {
					result += cTmp;
				} else {
					break;
				}
			}
			
			if(source.length > result.length) {
				result += "...";
			}
			
		} catch(e) {
			result = source;
		}
	}
	return result;
}


/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 리턴한다. 숫자가 존재하지 않을 경우 0을 리턴한다. 콤마 제거시에 사용한다.
 */
function fnOnlyNumber(str){
	var	len		= "";
	var oRtn	= {};
	var iRtn	= 0;
	var sRtn	= "";
	if(str != undefined){
		len		= str.length;
		oRtn	= {};
		iRtn	= 0;
		sRtn	= "";
		
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i) >= "0" && str.charAt(i) <= "9") || (str.charAt(i) == "-") || (str.charAt(i) == ".")) 
				sRtn	+= str.charAt(i);
		}
		if (sRtn != "")
			iRtn		= parseInt(sRtn, 10);
		
		oRtn.number	= iRtn;
		oRtn.string	= sRtn;
	}
	return oRtn;
}


/*
 * 분류 : 숫자함수
 * 요약 : 객체에 숫자만 입력하도록 한다.
 */
function SetNumObj(obj) {
    obj.value   = SetNum(obj.value);
    obj.select();
    return;
}

/*
 * 분류 : 숫자함수
 * 요약 : 문자열에서 콤마를 제거한다. 
 */
function SetNum(str) {
    return fnReplaceCharAll(str, ",", "");
}

/*
 * 분류 : 숫자함수
 * 요약 : 천단위마다 콤마를 삽입한다.
 */
function SetNumComma(str) {
	var decimal = "";
	var arrStr = [];
	if (str == undefined) {
		return "";
	}
	
	str = "" + str;
	
	if(str.indexOf(".") > -1){
		arrStr = str.split(".");
		str = arrStr[0];
		decimal = arrStr[1];
	}
	
	var isMinus = false;
	
	if (str.length > 1) {
		if (str.charAt(0) == '-') {
			isMinus = true;
		}
	}
	
    var tmpStr  = onlyNumber( "" + str );
    var sResult = "";

    if (tmpStr != "")  {
        tmpStr  = "" + parseInt(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

        var len     = tmpStr.length;
        var cnt     = 0;

        for (var i = len - 1; i >= 0; i--) {
            if (cnt > 0 && cnt % 3 == 0 ) {
                sResult  = "," + sResult;
            }
            sResult  = tmpStr.charAt(i) + sResult;
            cnt++;
        }
    }
    
    if (isMinus && sResult != "") {
    	sResult = "-" + sResult;
    }
    
    if(decimal != ""){
    	sResult = sResult + "." + decimal;
    }
    
    return sResult;
}


/*
 * 분류 : 숫자함수
 * 요약 : 숫자값만을 리턴한다. 콤마제거시에 사용한다.
 */
function onlyNumber (str) {
    var len      = str.length;
    var sReturn  = "";

    for (var i = 0; i < len; i++) {
        if ( (str.charAt(i) >= "0") && (str.charAt(i) <= "9") ) 
            sReturn += str.charAt(i);
    }
    return sReturn;
}

/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 입력 KeyDown 이벤트 (keyPressCheck와 동시사용해야함, 한글은 적용 안됨)
 */
function keyDownCheck(event, P) {
   var sKeyCode  = event.keyCode;
   var sKeyValue = String.fromCharCode(sKeyCode);
   var sKeyCheck = "";
   var sTmpKey1  = 0;
   var sTmpKey2  = 0;

   if (P == "Y") {
      sKeyCheck = "-0123456789";
      sTmpKey1  = 109;
      sTmpKey2  = 189;
   }
   else {
      sKeyCheck = "0123456789";
      sTmpKey1  = 8;
      sTmpKey2  = 8;
   }
   
   if (sKeyCheck.indexOf(sKeyValue) > -1 || sKeyCode == sTmpKey1 || sKeyCode == sTmpKey2 || sKeyCode == 8 || sKeyCode == 9 || sKeyCode == 110 || sKeyCode == 190 || sKeyCode == 46 || sKeyCode == 16 || sKeyCode == 17 || (sKeyCode >= 96 && sKeyCode <= 105)|| (sKeyCode >= 35 && sKeyCode <= 40) ) {
      event.returnValue = true;
   }
   else {
    event.keyCode = 0;
      event.returnValue = false;
   }
}

/*
 * 분류 : 숫자함수
 * 요약 : 숫자만 입력 KeyPress 이벤트 (keyDownCheck와 동시사용해야함, 한글은 적용 안됨)
 */
function keyPressCheck( event, P) {
   var sKeyCode  = event.keyCode;
   var sKeyValue = String.fromCharCode(sKeyCode);
   var sKeyCheck = "";
   if (P == "Y") {
      sKeyCheck = "-0123456789";
   }
   else {
      sKeyCheck = "0123456789";
   }
   if (sKeyCheck.indexOf(sKeyValue) > -1 || sKeyCode == 46) {
      event.returnValue = true;
   }
   else {
    event.keyCode = 0;
      event.returnValue = false;
   }
}


//파일 다운로드
function CmImageDown(attachId, thumbnailId) {

	if (jQuery("#cm_download").html() == null) {
		
		var arrHtml	= [];
		arrHtml.push("<iframe id='cm_download' name='cm_download src='about:blank' style='display:none;' scrolling='auto' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0'></iframe>");
		jQuery(arrHtml.join("")).appendTo("body");
		
	}
	
	var url = WEB_ROOT + "comm/comm_image_download.do?i_sAttachId=" + attachId +"&i_sThumbnailId=" + thumbnailId;
	
	jQuery("#cm_download").attr("src", url);
	
}

function CmFileDown(flag, attachid) {
	if(jQuery("#cm_download").html() == null) {
		var arrHtml = [];
		arrHtml.push("<iframe id='cm_download' name='cm_download' src='about:blank' style='display:none; scrolling='auto' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0'></iframe>");
		jQuery(arrHtml.join("")).appendTo("body");
	}
	
	var url = GLOBAL_WEB_ROOT + "comm/comm_download.do?i_sAttachid=" + attachid + "&i_sFlagDownCnt=" + flag;
	
	jQuery("#cm_download").attr("src", url);
}

//플래시 표시
function fnShowFlash(url, width, height){
   document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '"  id = "movie" VIEWASTEXT>');
   document.write('<param name="movie" value="' + url + '">');
   document.write('<param name="quality" value="high">');
   document.write('<param name="wmode" value="transparent">');
   document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" name = "movie"></embed>');
   document.write('</object>');
}

//플래시 메뉴표시
function fnShowFlashMenu(url, width, height){
   document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '"  onmouseout="fnSubMenuHide()" id = "movie" VIEWASTEXT >');
   document.write('<param name="movie" value="' + url + '">');
   document.write('<param name="quality" value="high">');
   document.write('<param name="wmode" value="transparent">');
   document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '" name = "movie"></embed>');
   document.write('</object>');
}



//일정크기만큼 문자열 길이 반환(문자열, 길이, 확장자 포함 여부-Y/N)
function fnCutString(sData, iLen, isExt)
{
  	var origin_str = sData;
  	var strExt = "";
  	var return_str ="";
  	var strLen = 0;
  	var return_total = 0;
  	var temp_len=0;
  	
  	strLen = origin_str.length;
  	
  	if(isExt == "Y"){
  	   arrTemp = sData.split('.');
  	   strExt = arrTemp[arrTemp.length-1];
  	   strLen = strLen - (strExt.length + 1);
  	   iLen = iLen - (strExt.length + 1);
  	}
  	
  	for( var i=0 ; i < strLen ; i++ )
  	{
  	   var ch = origin_str.charAt(i);
  
  	   if( escape(ch).length > 4 ) return_total += 2;
  	   else if( ch != '\r' ) return_total++;
  		
  	   if( return_total > iLen )
  	   {
  					  return_total=temp_len;
  	      break;
  	   }
  	   else
  	   {
  				   return_str += ch;
  				   temp_len=return_total;
  	   }
  	}
  	
  	if(isExt == "Y"){
  	   return_str = return_str + "." + strExt;
  	}
  	
  	return return_str;
}

/******************************************************************************
 *  Function Name : jsValidBizRegNo
 *  Description   : 사업자등록번호 검사
 *  Parameters    : bizRegNo - '-'를 제외한 사업자등록번호 10자리의 문자열
 *  Example       : if (!jsValidBizRegNo("1231212345")) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsValidBizRegNo(bizRegNo) {
	var	i, sum		= 0;
	var	check		= parseInt(bizRegNo.charAt(9), 10);
	var	tempBizRegNo	= new Array(10);
	var	checkValue	= new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);

	if (bizRegNo == "0000000000") {
		alert("입력항목 [사업자등록번호]의 형식이 맞지 않습니다.");
		return false;
	}

	for (i = 0; i < 10; i++)	tempBizRegNo[i]	= parseInt(bizRegNo.charAt(i), 10);

	for (i = 0; i < 10; i++)
		sum += (tempBizRegNo[i] * checkValue[i]);

	sum	+= Math.floor((tempBizRegNo[8] * 5) / 10);
	sum	%= 10;
	sum	= (sum == 0) ? 0 : (10 - sum);

	if (sum == 0)	return true;
	else {
		alert("입력항목 [사업자등록번호]의 형식이 맞지 않습니다.");
		return false;
	}
}

/******************************************************************************
 *  Function Name : jsMakeAndCheckTelNo
 *  Description   : 전화번호 검사 및 한 문자열로 변환하는 기능
 *  Parameters    : tel_no  - 전체 전화번호를 받을 form id
 *                  tel_no0 - 지역번호 또는 휴대폰 ID 번호의 form id
 *                  tel_no1 - 국번의 form id
 *                  tel_no2 - 번호의 form id
 *                  title   - 전화번호 필드의 명칭
 *                  need    - 필수 입력 여부 (true : 필수, false : 필수 아님)
 *  Example       : if (jsMakeAndCheckTelNo(document.myForm.tel_no, document.myForm.tel_no0,
 *                                          document.myForm.tel_no1, document.myForm.tel_no2,
 *                                          "휴대폰", false) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsMakeAndCheckTelNo(tel_no, tel_no0, tel_no1, tel_no2, title, need) {
	var	count	= 0;

	if (tel_no0.value != "") count++;
	if (tel_no1.value != "") count++;
	if (tel_no2.value != "") count++;

	if (need && (count == 0)) {
		alert("입력항목 [" + title + "]을(를) 입력하십시오.");
//		tel_no0.focus();
		return false;
	}

	if ((count != 0) && (count != 3)) {
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	tel_no.value	= tel_no0.value + "-" + tel_no1.value + "-" + tel_no2.value;
	if ((count != 0) && ((tel_no.value.length < 11) || (tel_no.value.length > 13))) {
//		tel_no.value	= "";
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	if (tel_no.value == "--")	tel_no.value	= "";

	return true;
}

/******************************************************************************
 *  Function Name : jsCheckTelNo
 *  Description   : 전화번호 검사 기능
 *  Parameters    : tel_no0 - 지역번호 또는 휴대폰 ID 번호의 form id
 *                  tel_no1 - 국번의 form id
 *                  tel_no2 - 번호의 form id
 *                  title   - 전화번호 필드의 명칭
 *                  need    - 필수 입력 여부 (true : 필수, false : 필수 아님)
 *  Example       : if (jsCheckTelNo(document.myForm.tel_no0, document.myForm.tel_no1,
 *                                   document.myForm.tel_no2, "휴대폰번호", false) return;
 *  Comment       : 
 ******************************************************************************
 *  History       : 2008. 06. 25  방지한  (최초 작성)
 ******************************************************************************/
function jsCheckTelNo(tel_no0, tel_no1, tel_no2, title, need) {
	var	count	= 0;

	if (tel_no0.value != "") count++;
	if (tel_no1.value != "") count++;
	if (tel_no2.value != "") count++;

	if (need && (count == 0)) {
		alert("입력항목 [" + title + "]을(를) 입력하십시오.");
//		tel_no0.focus();
		return false;
	}

	if ((count != 0) && (count != 3)) {
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	var	tel_no	= tel_no0.value + "-" + tel_no1.value + "-" + tel_no2.value;
	if ((count != 0) && ((tel_no.length < 11) || (tel_no.length > 13))) {
//		tel_no.value	= "";
		alert("입력항목 [" + title + "]의 형식이 맞지 않습니다.");
//		tel_no0.focus();
		return false;
	}

	return true;
}

/* 체크박스 전체 선택, 전체 해제 */
function fnChkAll(obj1, tmpStr) {
	var obj2	= document.getElementsByName(tmpStr);
	var totCnt	= obj2.length;

	if (obj1.checked == true) {
		for (var i = 0; i < totCnt; i++ ) {
			if ( obj2[i].disabled == false) {
				obj2[i].checked = true;
			}
		}
	} else {
		for (var i = 0; i < totCnt; i++ ) {
			obj2[i].checked = false;
		}
	}
}

/* 체크박스 전체 선택 유무 체크 */
function fnChkEach(tmpStr1, tmpStr2) {
	var obj1	= document.getElementsByName(tmpStr1);
	var obj2	= document.getElementById(tmpStr2);		// 전체 선택, 전체 해제 체크박스
	var totCnt	= obj1.length;
	var bresult	= true;

	for(var i = 0; i < totCnt; i++) {
		if ( obj1[i].disabled == false && obj1[i].checked == false) {
			bresult = false;
		}
	}

	obj2.checked = bresult;
}


/* 팝업 */
function pop(pop,name,width,height,flag)
{
	var url = pop;
	var wd 	= width;
	var he 	= height;
	var obj	= null; 

	if ((window.navigator.userAgent.indexOf("SV1") != -1) || (window.navigator.userAgent.indexOf("MSIE 7") != -1)) {
		wd = wd + 8;
		he = he + 10;

		if(flag == "0" ){
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd + ",height=" + he + ";");  
		}else{  
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd + ",height=" + he + ";");
		}
	} else {
		if (flag == "0" ) {
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";");
		} else {  
			obj = window.open(url,name,"toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";");
		}
	}
	return obj;
}

function check_length(sInputStr, strLength) {

	nStrLen = calculate_byte(sInputStr);

	if ( nStrLen > strLength ) {
		return false;
	} else {
		return true;
	}

}

function calculate_byte( sTargetStr ) {
	var sTmpStr, sTmpChar;
	var nOriginLen = 0;
	var nStrLength = 0;

	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength += 2;
		}else if (sTmpChar!='\r') {
			nStrLength ++;
		}
	}
	return nStrLength;
}

function Cut_Str( sTargetStr , nMaxLen ) {
	var sTmpStr, sTmpChar, sDestStr;
	var nOriginLen = 0;
	var nStrLength = 0;
	var sDestStr = "";
	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength = nStrLength + 2;
		} else if (sTmpChar!='\r') {
			nStrLength ++;
		}

		if (nStrLength <= nMaxLen) {
			sDestStr = sDestStr + sTmpChar;
		} else {
			break;
		}
	}
	return sDestStr;
}

/* 메시지의 길이를 체크 txtObj 길이 체크할 객체, sTarget : span id, maxLength 최대 길이 */
function fnMsgLength(txtObj, sTarget, maxLength) {
	var sObj				= document.getElementById(sTarget);
	var txtLength			= 0;
	txtLength				= calculate_byte(txtObj.value);
	sObj.innerHTML			= SetNumComma(txtLength);

	if (txtLength>40) {
		$("#span_cotents_check").text("");
	}
	
	if (maxLength < txtLength) {
		sObj.innerHTML	=	"<font color='red'>" + SetNumComma(calculate_byte(txtObj.value)) + "</font>";
	}
}

/* 메시지의 길이를 체크후 submit  frm form이름, txtObj 길이 체크할 객체, maxLength 최대 길이, url 주소*/
function fnMsgLengthVal(frm, txtObj, maxLength, url) {
	var txtLength			= 0;
	txtLength				= calculate_byte(txtObj.value);
	
	if (maxLength > txtLength) {
		frm.action	=	url;
		frm.submit();
	}else{
		alert("최대 허용 문자수를 초과하였습니다.");
		txtObj.focus();
		return;
	}
}


/**
* 문자 변경
*
* @param tmpStr
* @param searchStr
* @param replaceStr  
*/
function fnReplaceAll ( tmpStr, searchStr, replaceStr) {

	while( tmpStr.indexOf( searchStr ) != -1 )	{
		tmpStr = tmpStr.replace( searchStr, replaceStr );
	}
	return tmpStr;

}

function fnChangeBr(tmpStr) {
	while(tmpStr.indexOf("\n") != -1) {
		tmpStr = tmpStr.replace("\n", "<br/>");
	}
	return tmpStr;
}

// cookie 생성
function setCookie (name, value, expiredays)
{
	var todayDate		= new Date();
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

// cookie 확인
function getCookie(name) 
{
	var nameOfCookie = name + '='; 
	var x = 0;
	while ( x <= document.cookie.length ) 
	{
		var y = (x + nameOfCookie.length);
		
		if ( document.cookie.substring( x, y ) == nameOfCookie ) 
		{
			if ( (endOfCookie=document.cookie.indexOf( ';',y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring(y, endOfCookie ) );
		}
		x = document.cookie.indexOf( ' ', x ) + 1;
		if ( x == 0 )break;
	}
	return '';
}

function selBoxOptionCopy(selFrom, selTo)
{
	var len		= selFrom.options.length;
	
	selTo.options.length	= 0;
	
	if (len > 0)
	{
		for (var i = 0; i < len; i++)
		{
			selTo.options.add(new Option( selFrom.options[i].text, selFrom.options[i].value ));
		}
	}
}

function asciiChk(strChk) 
{
	var i; 
	var result;
	for(i=0; i<strChk.length; i++) 
	{
		if((strChk.charAt(i) < " ") || (strChk.charAt(i) > "~"))
			return false;
	}
	return true;
}

//E-mail 체크
function emailChk(email) 
{
	if (!asciiChk(email)) {
		alert("E-mail을 다시 확인해 주세요");
		return false;
	}

	var invalidStr = "\"|&;<>!*\'\\"   ;

	for (var i = 0; i < invalidStr.length; i++) 
	{
		if (email.indexOf(invalidStr.charAt(i)) != -1) 
		{
			alert("E-mail을 다시 확인해 주세요");
			return false;
		}
	}

	if (email.indexOf("@")==-1)
	{
		alert("E-mail형식이 맞지 않습니다.");
		return false;
	}

	if (email.indexOf(" ") != -1){
		alert("E-Mail에 공백이 있습니다.");
		return false;
	}

	if (window.RegExp) 
	{
		var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";

		var reg1 = new RegExp (reg1str);
		var reg2 = new RegExp (reg2str);
		if (reg1.test(email) || !reg2.test(email)) 
		{
			alert("E-Mail에 잘못된 문자가 있습니다.");
			return false;
		}
	}
	return true;
}

function emailChkMsg(email) {
	var resObj = {
		message : ""
		, isResult : true
	};
	
	if (!asciiChk(email)) {
		resObj.message = "E-mail을 다시 확인해 주세요";
		resObj.isResult = false;
		return resObj;
	}

	var invalidStr = "\"|&;<>!*\'\\"   ;

	for (var i = 0; i < invalidStr.length; i++) 
	{
		if (email.indexOf(invalidStr.charAt(i)) != -1) 
		{
			resObj.message = "E-mail을 다시 확인해 주세요";
			resObj.isResult = false;
			return resObj;
		}
	}

	if (email.indexOf("@")==-1)
	{
		resObj.message = "E-mail형식이 맞지 않습니다.";
		resObj.isResult = false;
		return resObj;
	}

	if (email.indexOf(" ") != -1){
		resObj.message = "E-Mail에 공백이 있습니다.";
		resObj.isResult = false;
		return resObj;
	}

	if (window.RegExp) 
	{
		var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
		var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$";

		var reg1 = new RegExp (reg1str);
		var reg2 = new RegExp (reg2str);
		if (reg1.test(email) || !reg2.test(email)) 
		{
			resObj.message = "E-Mail에 잘못된 문자가 있습니다.";
			resObj.isResult = false;
			return resObj;
		}
	}
	
	return resObj;
	
}


function fnStrMaxCheck ( inputNode, message)
{
	var sMaxLength;
	var iMaxLength		= 0;
	try {
		sMaxLength	= inputNode.getAttribute("maxlength");
	} catch (e) {
		alert("잘못된 객체입니다.\n" + e.message);
		return false;
	}
	
	if (sMaxLength == null)
	{
		alert("maxlength 값 미설정");
		return false;
	}
	
	try {
		iMaxLength = parseInt(sMaxLength, 10);
	} catch (e) {
		alert("maxlengt 값이 없거나 숫자가 아닌 값이 있습니다.");
		return false;
	}
	
	if (calculate_byte(inputNode.value) > iMaxLength)
	{
		if (message != null && message != "")
		{
			alert(message + "\n\n" + iMaxLength + "byte 이내로 작성해 주세요.\n영문 : " + iMaxLength + "자, 한글 : " + Math.floor(iMaxLength/2) + "자" );
		}
		return false;
	}
	return true;
}

// 한글을 자름
function js_han_split(char)
{  
	var char_st = 44032; //'가'의 유니코드 넘버(10진수) 
	var char_ed = 55203; //'힝'의 유니코드 넘버(10진수)

	var arr_1st = new Array('ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');//초성 19개 
	var arr_2nd = new Array('ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ');//중성 21개 
	var arr_3th = new Array('','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ');//종성 28개 

	if(char.length>2)
		char=char.charAt(0);
		
	var uninum = escape(char); 

	if(uninum.length<4) 
		return false;//한글이 아니다 

	uninum = parseInt(uninum.replace(/\%u/,''),16);

	if(uninum < char_st || uninum > char_ed) 
		return false;//한글이 아니다 

	var uninum2		= uninum-char_st; 
    var arr_1st_v	= Math.floor( uninum2 / 588); 

    uninum2			= uninum2 % 588; 

    var arr_2nd_v	= Math.floor(uninum2 / 28); 

    uninum2			= uninum2 % 28; 
    var arr_3th_v	= uninum2; 
    var return_arr	= new Array(arr_1st[arr_1st_v],arr_2nd[arr_2nd_v],arr_3th[arr_3th_v]); 

    return return_arr; 
}

/**
 * target 이름 완성
 * @param name
 * @param str1
 * @param str2
 * @returns
 */
function makeTargetName(name, str1, str2) {
	var lastName, strArr;
	if (name != "") {
		lastName	= name.substr(name.length-1 , 1);
		strArr		= js_han_split(lastName);
		
		if (typeof strArr != "boolean") {
			if (strArr[2] == "")
				name	+= str1;
			else
				name	+= str2;
		}
		else {
			name += str1 + "(" + str2 + ")";
		}
	}
	return name;
}

/*********************************************
 * [START] date 관련 함수
**********************************************/
/**
 * 해당월의 마지막 날자 가져오기
 * @param year
 * @param month
 * @returns
 */
function getMonthLastDay( year, month ) {
	var iYear, iMonth;
	
	if (typeof year == "number") {
		iYear	= year;
	}
	else {
		try {
			iYear	= parseInt(year, 10);
		} catch (e) {
			return 0;
		}
	}
	
	if (typeof month == "number") {
		iMonth	= month;
	}
	else {
		try {
			iMonth	= parseInt(month, 10);
		} catch (e) {
			return 0;
		}
	}
	
	if (iMonth == 12)
		return 31;
	
	var dt	= new Date(iYear, iMonth, 0);
	
	return dt.getDate();
}

/**
 * String 날짜 비교 (작은값)
 * @param date1
 * @param date2
 * @param sChar
 * @returns
 */
function getMinDate(date1, date2, sChar)
{
	if ( isDate(date1, sChar) && isDate(date2, sChar) ) {
		var dt1		= getDate(date1, sChar);
		var dt2		= getDate(date2, sChar);
		
		if (dt1.getTime() < dt2.getTime())
			return date1;
		else
			return date2;
	}
	else if ( isDate(date1, sChar) && !isDate(date2, sChar) ) {
		return date1;
	}
	else if ( !isDate(date1, sChar) && isDate(date2, sChar) ) {
		return date2;
	}
	else {
		return "";
	}
}

/**
 * String 날짜 비교 (큰값)
 * @param date1
 * @param date2
 * @param sChar
 * @returns
 */
function getMaxDate(date1, date2, sChar)
{
	if ( isDate(date1, sChar) && isDate(date2, sChar) ) {
		var dt1		= getDate(date1, sChar);
		var dt2		= getDate(date2, sChar);
		
		if (dt1.getTime() > dt2.getTime())
			return date1;
		else
			return date2;
	}
	else if ( isDate(date1, sChar) && !isDate(date2, sChar) ) {
		return date1;
	}
	else if ( !isDate(date1, sChar) && isDate(date2, sChar) ) {
		return date2;
	}
	else {
		return "";
	}
}

/**
 * String => date 로 변
 * @param sDate	: String 날
 * @param sChar : 구분자
 * @returns {Date}
 */
function getDate( sDate, sChar )
{
	var strLen		= sDate.length;
	var tmpDate		= new Date();
	var year		= 0;
	var month		= 0;
	var date		= 0;
	
	if (strLen != 10 && strLen != 8)
		return tmpDate;
	
	if (strLen == 10)
	{
		var arrDate		= sDate.split(sChar);
		
		if (arrDate.length != 3)
			return tmpDate;

		year		= parseInt(arrDate[0], 10);
		month		= parseInt(arrDate[1], 10) - 1;
		date		= parseInt(arrDate[2], 10);
	}
	else
	{
		year		= parseInt(sDate.substring(0, 4), 10);
		month		= parseInt(sDate.substring(4, 6), 10) - 1;
		date		= parseInt(sDate.substring(6, 8), 10);
	}
	
	tmpDate.setFullYear(year);
	tmpDate.setMonth(month);
	tmpDate.setDate(date);
	
	return tmpDate; 
}

/**
 * 날짜 체크
 * @param sDate
 * @param sChar
 * @returns {Boolean}
 */
function isDate( sDate, sChar)
{
	var strLen		= sDate.length;
	var tmpDate		= new Date();
	var year		= 0;
	var month		= 0;
	var date		= 0;
	
	if (strLen != 10 && strLen != 8)
		return false;
	
	if (strLen == 10) {
		var arrDate		= sDate.split(sChar);
		
		if (arrDate.length != 3)
			return false;

		year		= parseInt(arrDate[0], 10);
		month		= parseInt(arrDate[1], 10) - 1;
		date		= parseInt(arrDate[2], 10);
	}
	else {
		year		= parseInt(sDate.substring(0, 4), 10);
		month		= parseInt(sDate.substring(4, 6), 10) - 1;
		date		= parseInt(sDate.substring(6, 8), 10);
	}
	
	tmpDate.setFullYear(year);
	tmpDate.setMonth(month);
	tmpDate.setDate(date);
	
	if (tmpDate.getFullYear() == year && tmpDate.getMonth() == month && tmpDate.getDate() == date)
		return true;
	else
		return false;
}

function getDateAddMonth(target, month_gap) {
	
	if (month_gap == 0) {
		return target;
	}
	
	var year = target.getFullYear();
	var month = target.getMonth();
	var date = target.getDate();
	var gap_dt;
	var last_date = (new Date(year, month + month_gap + 1, 0)).getDate();
	
	if (month_gap < 0) {
		
		if (date <= last_date) {
			gap_dt = new Date(year, month + month_gap, date + 1);
		}
		else {
			gap_dt = new Date(year, month + month_gap + 1, 1);
		}
	}
	else {
		
		if (date <= last_date) {
			gap_dt = new Date(year, month + month_gap, date - 1);
		}
		else {
			gap_dt = new Date(year, month + month_gap, last_date);
		}
	}
	
	return gap_dt;
}

/**
 * date => String 으로 변환
 * @param date
 * @param sChar
 * @returns {String}
 */
function dateToString(date, sChar) {
	
	if (date == undefined)
		return "";
	
	if (sChar == undefined)
		sChar = ".";
	
	var year = date.getFullYear();
	var month = date.getMonth();
	var date = date.getDate();
	
	return "" + year + sChar + (month >= 9 ? "" : "0" ) + (month + 1) + sChar + (date > 9 ? "" : "0") + date;
}

/**
 * 년.월 => String 으로 변환 
 * @param date
 * @param sChar
 * @returns {String}
 */
function yearMonthToString(date, sChar) {
	if (date == undefined) 
		return "";
	
	if (sChar == undefined)
		sChar = ".";
	
	var year = date.getFullYear();
	var month = date.getMonth();
	
	return "" + year + sChar + (month >= 9 ? "" : "0" ) + (month + 1);
}

/**
 * YHCHOI : 날짜 나타내주는 형식 변환 
 * @param date
 * @param sChar
 * @returns {String}
 */
function dateStrucChange(date, sChar) {
	var StringDate = date.replace("/./gi","");

    var sYear = StringDate.substring(0,4);
    var sMonth = StringDate.substring(4,6);
    var sDate = StringDate.substring(6,8);
    
    if(date.length > 8 && (sChar == 5 || sChar == 7 || sChar == 8)){
    	var sHour = StringDate.substring(8,10);
        var sMinute = StringDate.substring(10,12);
    }else if(date.length <= 8 && sChar == 5){
    	sChar = "";
    }
    
    
	if(sChar == 1){
    
	    date = sYear+"년 "+sMonth+"월 "+sDate+"일";
	    
	}
	else if(sChar == 2){
		
		date = sYear+""+sMonth+""+sDate+"";
		
	}
	else if(sChar == 3){ // YYYY/MM/DD
		
		date = sYear+"/"+sMonth+"/"+sDate+"";
		
	}
	else if(sChar == 4){
		
		date = sYear+"-"+sMonth+"-"+sDate+"";
		
	}
	else if(sChar == 5){
		
		date = sYear+"-"+sMonth+"-"+sDate+" "+sHour+":"+sMinute+"";
		
	}
	else if(sChar == 6){ // YY/MM/DD
		
		date = sYear.substring(2,4)+"/"+sMonth+"/"+sDate+"";
		
	}
	else if(sChar == 7 ){ // YY/MM/DD (HH:mm)
		date = sYear.substring(2,4)+"/"+sMonth+"/"+sDate+" ("+sHour+":"+sMinute+")";
	}
	else if(sChar == 8 ){ // DD/MM/YY HH:mm
		date = sDate+"/"+sMonth+"/"+sYear.substring(2,4)+" "+sHour+":"+sMinute;
	}else if(sChar == 9){
		sYear = sYear.substring(2,4);
		date = sYear+"."+sMonth+"."+sDate+"";
	}
	else{
		
		date = sYear+"."+sMonth+"."+sDate+"";
		
	}
	
	return date;
	
}

/*********************************************
 * [END] date 관련 함수
**********************************************/

function msgBoxHide( flag ) {
	if (flag)
		jQuery(".msgBoxHide").hide();
	else
		jQuery(".msgBoxHide").show();
}

//index 값 구하기
function fnGetIndex( obj )
{
	var target	= jQuery(obj);
	var tagName	= target.attr("tagName");
	var index	= -1;
	
	if (tagName == "INPUT") {
		var name	= target.attr("name");
		index	= jQuery("input[name='" + name + "']", this.frm ).index(target);
	}
	else {
		var id	= target.attr("id");
		index	= jQuery("#" + id, this.frm ).index(target);
	}
	return index;
}

//숫자금액을 한글로 변환
function cmChangeHangul(num) { 
    if(isNaN(num)){
    	return "";
    }
    if(num == 0 || num == "0"){
    	return "";
    }
    
	var hanA = new Array("","일","이","삼","사","오","육","칠","팔","구","십"); 
    var danA = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천"); 
    var result = "";
    
    if(num*1 > 0){
    	for(i=0; i<num.length; i++) { 
            str = ""; 
            han = hanA[num.charAt(num.length-(i+1))]; 
            if(han != "") str = han+danA[i]; 
            if(i == 4){
            	var sum=0;
            	for(var j=i; j < 8; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "만";
            	}
            }
            if(i == 8){
            	//만단위 숫자가 모두 0일 경우 
            	var sum=0;
            	for(var j=i; j < 12; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "억";
            	}
            }
            if(i == 12){
            	var sum=0;
            	for(var j=i; j < 16; j++){
            		sum = sum + num.charAt(num.length-(j+1))*1;
            	}
            	if(sum > 0){
            		str += "조";
            	}
            }
            result = str + result; 
        } 
        return result; 
    }
}

function SetFloatComma(str)
{
    var tmpStr  = "" + str;
    var sResult = "";
    if (tmpStr != "")
    {
        var ArrtemStr = tmpStr.split(".");

        if(ArrtemStr.length > 1){
            tmpStr = ArrtemStr[0];
            tmpStr  = "" + parseInt(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

            var len     = tmpStr.length;
            var cnt     = 0;

            for (i = len - 1; i >= 0; i--)
            {
                if (cnt > 0 && cnt % 3 == 0 )
                {
                    sResult  = "," + sResult;
                }
                sResult  = tmpStr.charAt(i) + sResult;
                cnt++;
            }

            sResult = sResult + "." + ArrtemStr[1];
        } else {
            tmpStr  = "" + parseFloat(tmpStr, 10);        // 0부터 시작할 경우 앞에 0 모두 제거

            var len     = tmpStr.length;
            var cnt     = 0;

            for (i = len - 1; i >= 0; i--)
            {
                if (cnt > 0 && cnt % 3 == 0 )
                {
                    sResult  = "," + sResult;
                }
                sResult  = tmpStr.charAt(i) + sResult;
                cnt++;
            }
        }
    }

    return sResult;
}

//글자 카운트
function updateInputCount(textareaname,MaxLength,spanid){
    var textStr = jQuery('textarea[name='+textareaname+']').val();
    var textLength = textStr.length;
    var textChar = "";
    var count = 0;
    var countMax = MaxLength;
    var countLen = 0;
    var textStr2 = "";

    for(var i = 0; i < textLength; i++){
        // 한글자추출
        textChar = textStr.charAt(i);

        // 한글이면 2를 더한다.
        if (escape(textChar).length > 4) {
            count += 2;
        }
        else {   // 그밗의 경우는 1을 더한다.
            count++;
        }

        // 전체 크기가 countMax 넘지않으면
        if(count <= countMax){
            countLen = i + 1;
        }
    }

    if(count > countMax){
        showMessageBox({
            message : "한글"+MaxLength/2+"글자, 영문"+MaxLength+"글자를 초과 입력할수 없습니다. \n초과된 내용은 삭제 됩니다.",
            close : function(){
                jQuery('span.'+spanid).text(countMax);
            }
        });
        textStr2 = textStr.substr(0, countLen);
        jQuery('textarea[name='+textareaname+']').val(textStr2);

    }
    jQuery('span.'+spanid).text(count);
}

//list
function cmGoList(formName, urlName, parsName) {
    var frm		= jQuery("form[name='"+ formName + "']");
    var url		= jQuery.trim(jQuery("input[name='" + urlName + "']", frm).val());
    var pars	= jQuery.trim(jQuery("input[name='" + parsName + "']", frm).val());

    if (url == "") {
        alert(urlName + " 값이 없습니다.");
        return;
    }

    if (pars != "") {
        document.location.href	= url + "?" + pars;
    }
    else {
        document.location.href	= url;
    }
}

/**
 * 2010.10.10 형식을 다른 형식으로 변환
 * @param dateStr
 * @param typeString ( DATEFORMAT : 20101010, 명시안함 : 2010년 10월 10일 )
 * @return 문자열
 */
function changeDate(dateStr, typeString) {

    var dateStrAry = dateStr.split(".");
    var returnStr = "";

    if (typeString == "DATEFORMAT")
    {
        returnStr += dateStrAry[0];
        returnStr += dateStrAry[1];
        returnStr += dateStrAry[2];
    }
    else {
        returnStr += dateStrAry[0] + "년 ";
        returnStr += dateStrAry[1] + "월 ";
        returnStr += dateStrAry[2] + "일";
    }

    return returnStr;
}

/**
 * 숫자를 시간으로 변경
 * 15시 30분 (1530) => 155
 * @param numberStr
 * @return
 */
function changeNumberToHhMm ( numberStr ) {

    var sHhMm = "";

    var sHh = parseInt((parseInt(numberStr, 10) / 10), 10);

    var sMm = numberStr.substr((numberStr.length - 1), (numberStr.length - 1));

    if(sMm == "" && numberStr == "0"){
        sMm = "0";
    }

    sHhMm = (sHh < 10 ? "0"+sHh : sHh) + ( sMm == "0" ? "00" : "30" ) ;

    return sHhMm;
}

/**
 * 숫자를 시간으로 변경
 * 15시 30분 (1530) => 15:5
 * @param numberStr
 * @return
 */
function changeNumberToHhMm2 ( numberStr ) {

    var sHhMm = "";

    var sHh = parseInt((parseInt(numberStr, 10) / 10), 10);

    var sMm = numberStr.substr((numberStr.length - 1), (numberStr.length - 1));

    if(sMm == "" && numberStr == "0"){
        sMm = "0";
    }

    sHhMm = (sHh < 10 ? "0"+sHh : sHh) +":"+ ( sMm == "0" ? "00" : "30" ) ;

    return sHhMm;
}

/**
 * 시간을 숫자로 변경
 * 155 => 15시 30분 (1530)
 * @param HhMmStr
 * @return
 */
function changeHhMmToNumber ( HhMmStr )
{
    var sHh = parseInt((parseInt(HhMmStr, 10) / 10), 10);

    var sMm = HhMmStr.substr((HhMmStr.length - 1), (HhMmStr.length - 1));

    if(sMm == "" && HhMmStr == "0"){
        sMm = "0";
    }

    var sNumber1 = sHh < 10 ? "0"+sHh : sHh;
    var sNumber2 = sMm == "0" ? "00" : "30";

    return sNumber1 + sNumber2;
}

function addThumnailImagePop(target, p_opt) {

    if (target == undefined || target == null) {
        target = jQuery(".lrk_thumbnail_image");
    }

    target.click(function (event) {
        event.preventDefault();
        var src = jQuery(this).attr("src");
        var ext = src.substring(src.lastIndexOf("."), src.length);
        var url = src.substring(0, src.lastIndexOf("_"));

        var temp_frm = jQuery("<form name='temp_thumbnail_frm'/>");
        temp_frm.appendTo("body");
        temp_frm.attr({"action" : url + ext, "target": "_blank"});
        temp_frm.submit();
        temp_frm.remove();
    });
}

function getBrowserInfo() {
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	var fullVersion = '' + parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;
	
	if( (verOffset = nAgt.indexOf("Opera")) != -1 ) { //In Opera, the true version is after "Opera" or after "Version"
		browserName = "Opera";
		fullVersion = nAgt.substring(verOffset + 6);
		if( (verOffset = nAgt.indexOf("Version")) != -1 ) {
			fullVersion = nAgt.substring(verOffset + 8);
		}
	} else if( (verOffset = nAgt.indexOf("MSIE")) != -1 ) { //In MSIE, the true version is after "MSIE" in userAgent
		browserName = "Microsoft Internet Explorer";
		fullVersion = nAgt.substring(verOffset + 5);
	} else if( (verOffset = nAgt.indexOf("Chrome")) != -1 ) { //In Chrome, the true version is after "Chrome"
		browserName = "Chrome";
		fullVersion = nAgt.substring(verOffset + 7);
	} else if( (verOffset = nAgt.indexOf("Safari")) != -1 ) { //In Safari, the true version is after "Safari" or after "Version"
		browserName = "Safari";
		fullVersion = nAgt.substring(verOffset + 7);
		if( (verOffset = nAgt.indexOf("Version")) != -1 ) {
			fullVersion = nAgt.substring(verOffset + 8);
		}
	} else if( (verOffset = nAgt.indexOf("Firefox")) != -1 ) { // In Firefox, the true version is after "Firefox"
		browserName = "Firefox";
		fullVersion = nAgt.substring(verOffset + 8);
	} else if( (nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf(verOffset + 1)) ) { //In most other browsers, "name/version" is at the end of userAgent
		browserName = nAgt.substring(nameOffset, verOffset);
		fullVersion = nAgt.substring(verOffset + 1);
		if(browserName.toLowerCase() == browserName.toUpperCase()) {
			browserName = navigator.appName;
		}
	}
	
	//trim the fullVersion string at semicolon/space if present
	if( (ix = fullVersion.indexOf(";")) != -1 ) {
		fullVersion = fullVersion.substring(0, ix);
	}
	
	if( (ix = fullVersion.indexOf(" ")) != -1 ) {
		fullVersion = fullVersion.substring(0, ix);
	}
	
	majorVersion = parseInt('' + fullVersion, 10);
	if(isNaN(majorVersion)) {
		fullVersion = '' + parseFloat(navigator.appVersion);
		majorVersion = parseInt(navigator.appVersion, 10);
	}
	
	var obj = {
		browserName : browserName
		, fullVersion : fullVersion
		, majorVersion : majorVersion
	};
	return obj;
}

//파일 사이즈 
function getFileSize(fileSize) {
	fileSize = parseInt(fileSize);
	var sReturn = "";
	if(fileSize >= (1 * 1024 * 1024 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024 / 1024 / 1024)) + "GB";
	} else if(fileSize >= (1 * 1024 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024 / 1024)) + "MB";
	} else if(fileSize >= (1 * 1024)) {
		sReturn = SetNumComma(Math.ceil(fileSize / 1024)) + "KB";
	} else if(fileSize > 0) {
		sReturn = "1KB";
	}
	return sReturn;
}

//문자열 크기 비교
function fnStringByte(targetString) {
	var tempStr, tempChar;
	var originalLength = 0;
	var stringLength = 0;
	
	tempStr = new String(targetString);
	originalLength = tempStr.length;
	
	for(var i=0; i<originalLength; i++) {
		tempChar = tempStr.charAt(i);
		if(escape(tempChar).length > 4) {
			stringLength += 2;
		} else if(tempChar != '\r') {
			stringLength++;
		}
	}
	return stringLength;
}

function calculate_byte( sTargetStr ) {
	var sTmpStr, sTmpChar;
	var nOriginLen = 0;
	var nStrLength = 0;

	sTmpStr = new String(sTargetStr);
	nOriginLen = sTmpStr.length;

	for ( var i=0 ; i < nOriginLen ; i++ ) {
		sTmpChar = sTmpStr.charAt(i);

		if (escape(sTmpChar).length > 4) {
			nStrLength += 3;
		}else if (sTmpChar!='\r') {
			nStrLength ++;
		}
	}
	return nStrLength;
}

function addErrorMessage_bak(target, msg) {
	var old_bgcolor = target.css("border-color");
	var name = target.attr("name");
	var index = jQuery("*[name='"+ name +"']").index(target);
	var msgTarget = jQuery(".error_" + name);
	
	if (msgTarget.size() > index) {
		var data_msg = msgTarget.eq(index).data("error_old_msg");
		var old_msg = msgTarget.eq(index).text();
		
		msgTarget.eq(index).text(msg);
		if (data_msg == null)
			msgTarget.eq(index).data("error_old_msg", old_msg);
	}
	
	target.css({"border-color": "#7cdae"});
	msgTarget.css({"font-weight": "bold"});
	
	//target.css({"border": "3px solid #ff6980"});
	
	target.data("error_old_bgcolor", old_bgcolor);
	target.addClass("error_message");
}

function removeErrorMessageTarget(target) {
	jQuery(".error_" + target.attr("name")).text("");
}
//
//function removeErrorMessage() {
//	var target = jQuery(".error_message");
//	
//	target.each(function (n) {
//		var old_bgcolor  = jQuery(this).data("error_old_bgcolor");
//		jQuery(this).css({"border-color": old_bgcolor});
//		
//		var name = jQuery(this).attr("name");
//		var index = jQuery("*[name='"+ name +"']").index(target);
//		var msgTarget = jQuery(".error_" + name);
//		
//		if (msgTarget.size() > index) {
//			var old_msg = msgTarget.eq(index).data("error_old_msg");
//			msgTarget.eq(index).text(old_msg);
//		}
//		jQuery(this).removeClass("error_message");
//	});
//}

function removeErrorMessageForTarget(name) {
    var target = jQuery("*[name='"+ name +"']");

    target.each(function (n) {
        var old_bgcolor  = jQuery(this).data("error_old_bgcolor");
        jQuery(this).css({"border-color": old_bgcolor});

        var name = jQuery(this).attr("name");
        var index = jQuery("*[name='"+ name +"']").index(target);
        
        var msgTarget = jQuery(".error_" + name);

        if (msgTarget.size() > index) {
            var old_msg = msgTarget.eq(index).data("error_old_msg");
            msgTarget.eq(index).text(old_msg);
        }
        jQuery(this).removeClass("lirikos_error_message");
    });
}


//사업자 등록번호 체크
function checkBizID(bizID) {
	// bizID는 숫자만 10자리로 해서 문자열로 넘긴다. 
	var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1); 
	var i, chkSum = 0, c2, remander;
    
	bizID = bizID.replace(/-/gi,''); 
	
	if (bizID.length < 10) {
		return false;
	}

	for (i=0; i<=7; i++) {
    	chkSum += checkID[i] * bizID.charAt(i);
	}
    
	c2 = "0" + (checkID[8] * bizID.charAt(8)); 
	c2 = c2.substring(c2.length - 2, c2.length); 
	chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1)); 
	remander = (10 - (chkSum % 10)) % 10 ; 

    if (Math.floor(bizID.charAt(9)) == remander) {
    	return true ; // OK!
    } 
	return false; 
}

// 휴대폰 번호 체크
function checkMobile(mobile) {
	
	var len = mobile.length;
	
	if (len > 11 || len < 10) {
		return false;
	}
	
	var mobile1, mobile2, mobile3;
	
	if (len == 11) {
		mobile1 = mobile.substr(0, 3);
		mobile2 = mobile.substr(3, 4);
		mobile3 = mobile.substr(7, 4);
	}
	else {
		mobile1 = mobile.substr(0, 3);
		mobile2 = mobile.substr(3, 3);
		mobile3 = mobile.substr(6, 4);
	}
	
	var patten1 = /01[016789]$/;		
	var patten2 = /[1-9]{1}[0-9]{2,3}$/;
	var patten3 = /[0-9]{4}$/;
	
	if (!patten1.test(mobile1)) {
		return false;
	}
	else if (!patten2.test(mobile2)) {
		return false;
	}
	else if (!patten3.test(mobile3)) {
		return false;
	}
	return true;
}

/**
 * Web Parameter 문자열(Query String)을 JSON 구조로 파싱한다.
 * @param param
 */
function CmParameterParseToJSON(param) {
	var	json	= {};
	var	params	= param.split("&");

	for (var i = 0; i < params.length; i++) {
		var	pair	= params[i].split("=");
		json[pair[0]]	= pair[1];
	}

	return json;
}

function changeDatePatten (sDate) {
    var result = '';

    if (sDate != null && sDate.length >= 8) {
        result += sDate.substring(0, 4) + '.' + sDate.substring(4, 6) + '.' + sDate.substring(6, 8);
    } else if (sDate != null && sDate.length() >= 6) {
        result += sDate.substring(0, 4) + '.' + sDate.substring(4, 6);
    }

    return result;
}

function changeDatePatten2 (sDate,sChar) {
	var result = '';
	
	if (sDate != null && sDate.length >= 8) {
		result += sDate.substring(0, 4) + sChar + sDate.substring(4, 6) + sChar + sDate.substring(6, 8);
	} else if (sDate != null && sDate.length() >= 6) {
		result += sDate.substring(0, 4) + sChar + sDate.substring(4, 6);
	}
	
	return result;
}
//해당 날짜를 현재시간 기준 ~~분전 ~시간 전 어제~시 등의 형식으로 나타내기
function changeBeforeDate(date){
	var sResult = "";
		
		var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
				date.substring(8, 10), date.substring(10, 12), 00);
		
		if (12 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
					+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
			
			var	endDate		= new Date();
			var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
			
			if(gap == 0){
				sResult = "방금";
			}
			else if(gap<60){
				sResult = gap + "분전";
			}
			else if(gap>=60 && gap<(60*24)){
				sResult = parseInt((gap / 60)) + "시간전";
			}
			else if(gap >= (60 * 24) && gap <(60 * 48)){
				
				var time =starDate.getHours();
			var minute = starDate.getMinutes();
			sResult = time >12 ? "어제 오후 " + (time - 12) + ":" + minute : "어제 오전 " + time +":" + minute;
			}
			else{
				sResult = date;
			}						
		}
		return sResult;
}
//~분전 ~시간전 지나면 ~일전으로 표시
function changeBeforeDate_day(date){
	var sResult = "";
		
	var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
			date.substring(8, 10), date.substring(10, 12), 00);
	
	if (12 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
				+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
		
		var	endDate		= new Date();
		var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
		
		if(gap == 0){
			sResult = cm_global_function_msg.just;
		}
		else if(gap<60){
			if(gap == 1){
				sResult = gap + " " + cm_global_function_msg.min;
			}else{
				sResult = gap + " " + cm_global_function_msg.min_s;
			}
		}
		else if(gap>=60 && gap < (60*24)){
			var tempHour = parseInt((gap / 60));
			
			if(tempHour == 1){
				sResult = tempHour +" "+ cm_global_function_msg.hour;
			}else{
				sResult = tempHour +" "+ cm_global_function_msg.hour_s;
			}
		}
		else if(gap >= (60 * 24) && gap <= (60 * 24 * 30)){
			var tempDay = Math.ceil((endDate.getTime() - starDate.getTime()) / 1000 / 60 / 60 / 24);
			
			if(tempDay == 1){
				sResult = tempDay + " " + cm_global_function_msg.day;
			}else{
				sResult = tempDay + " " + cm_global_function_msg.day_s;
			}
		}
		else{
			sResult = date;
		}						
	}
	return sResult;
}

//~분전 ~시간전 지나면 ~일전으로 표시
function changeBeforeDate_day_global(date, langcd){
	var sResult = "";
	var sMin  = "";
	var sHour = "";
	var sDay  = "";
	var sJust = "";
	
	if(langcd == "" || langcd == undefined || langcd == "ko"){
		sMin = "분전"; sDay = "일전"; sHour = "시간전"; sJust = "방금";
	} else if (langcd == "en"){
		sMin = "Minute(s) ago"; sDay = "Day(s) ago"; sHour = "Hour(s) ago"; sJust = "Just ago";
	} else if (langcd == "cn"){
		sMin = "分前"; sDay = "天前"; sHour = "小时前"; sJust = "刚刚";
	}
	
		var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
				date.substring(8, 10), date.substring(10, 12), 00);
		
		if (12 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
					+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
			
			var	endDate		= new Date();
			var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
			
			if(gap == 0){
				sResult = sJust;
			}
			else if(gap<60){
				sResult = gap + " "+ sMin;
			}
			else if(gap>=60 && gap<(60*24)){
				sResult = parseInt((gap / 60)) + " "+  sHour;
			}
			else if(gap >= (60 * 24)){
				
				sResult = Math.ceil((endDate.getTime() - starDate.getTime()) / 1000 / 60 / 60 / 24) + " "+ sDay;
			}
			else{
				sResult = date;
			}						
		}
		return sResult;
}

function changeBeforeDate2(date){
	var sResult = "";
		
		var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
				date.substring(8, 10), date.substring(10, 12), 00);
		
		if (12 <= date.length) {
			date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8);
			
			var	endDate		= new Date();
			var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
			
			if(gap == 0){
				sResult = "방금";
			}
			else if(gap<60){
				sResult = gap + "분전";
			}
			else if(gap>=60 && gap<(60*24)){
				sResult = parseInt((gap / 60)) + "시간전";
			}
			else if(gap >= (60 * 24) && gap <(60 * 48)){
				
				var time =starDate.getHours();
			var minute = starDate.getMinutes();
			if(time == "00"){
				time = 24;
			}else if(time<10){
				time = "0" + time;
			}
			if(minute <10){
				minute="0"+minute;
			}
			sResult = "어제 " + time +":" + minute;
			}
			else{
				sResult = date;
			}						
		}
		return sResult;
}
//해당 날짜를 현재시간 기준 으로 하루가 지나지 않았으면 시:분 하루가 지났으면 년월일 시간 으로 표시
function changeTodayDate(date){
	var sResult = "";
	
	var	starDate	= new Date(date.substring(0, 4), parseInt(date.substring(4, 6), 10) - 1, date.substring(6, 8),
			date.substring(8, 10), date.substring(10, 12), 00);
	
	if (12 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
				+ " " + date.substring(8, 10) + ":" + date.substring(10, 12); 
		
		var	endDate		= new Date();
		var gap	= parseInt((endDate.getTime() - starDate.getTime()) / 1000 /60);
		
		if(gap<(60*24)){
			var time =starDate.getHours();
		var minute = starDate.getMinutes();
		if(minute<10){
			minute="0"+minute;
			}
			sResult = time +":"+minute ;
		
		}
		else {
			
			sResult = date;
		}
	}
	return sResult;
}

function changeDateHour(date) {
	var sResult = "";
	
	if (12 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
				+ " " + date.substring(8, 10) + ":" + date.substring(10, 12);
	}
	
	sResult = date;
	
	return sResult;
}

function subStrChangStr(str,index,repl) {
	var cnt = str.length;
	if(cnt > index){
		str = str.substring(0,index);
		str += repl;
	}
	
	return str;
}

/**
 * 상품 검색필터에서 사용함
 * @param str
 * @param type
 * @returns {Number}
 */
function getProdBitFilter( str, type ) {
	
	var arrParam;
	
	switch (type) {
	case "i_sPrdStatus" :
		arrParam = [
		     "DG_P017"
		     , "DG_P028"
		];
		break;
	case "i_sPrdService" :
		arrParam = [
            "DG_P001"
            , "DG_P002"
            , "DG_P019"
        ];
		break;
	case "i_sPrdFeature" :
		arrParam = [
			"DG_P020"
			, "DG_P003"
			, "DG_P021"
			, "DG_P004"
			, "DG_P007"
			, "DG_P022"
			, "DG_P005"
			, "DG_P023"
			, "DG_P024"
			, "DG_P025"
			, "DG_P011"
			, "DG_P012"
			, "DG_P026"
			, "DG_P008"
		];
		break;
	case "i_sPrdPrice" : 
		arrParam = [
			"DG_P009"
			, "DG_P010"
			, "DG_P014"
			, "DG_P027"
			, "DG_P016"
        ];
		break;
	case "i_sPrdFunc" : 
		arrParam = [
            "DR_001"
            , "DR_002"
            , "DR_003"
        ];
		break;
	case "i_sPrdSkin" : 
		arrParam = [
            "AT010"
            , "AT011"
            , "AT012"
            , "AT013"
            , "AT014"
            , "AT017"
        ];
		break;
	case "i_sPrdTrubleType" : 
		arrParam = [
            "DW_0101"
            , "DW_0102"
            , "DW_0103"
            , "DW_0104"
            , "DW_0105"
            , "DW_0106"
            , "DW_0107"
        ];
		break;
	case "i_sOptMakeupeft" : 
		arrParam = [
            "DI_001"
            , "DI_002"
            , "DI_003"
            , "DI_004"
            , "DI_005"
            , "DI_006"
            , "DI_007"
            , "DI_008"
            , "DI_009"
            , "DI_010"
            , "DI_011"
            , "DI_012"
            , "DI_013"
            , "DI_014"
            , "DI_015"
            , "DI_016"
            , "DI_017"
            , "DI_018"
            , "DI_019"
            , "DI_020"
            , "DI_021"
        ];
		break;
	case "i_sOptMakeupDir" : 
		arrParam = [
			"DN_001"
			, "DN_002" 
			, "DN_003" 
			, "DN_004" 
			, "DN_005"
		];
		break;
	default :
		arrParam = [];
		break;
	}
	
	var len = arrParam.length;
	var num = 0;
	
	for (var i = 0; i < len; i++) {
		if (str.indexOf(arrParam[i]) > -1) {
			num += Math.pow(2, len - i - 1);
		}
	}
	
	return num;
}


function getFilterHtmlTag(str) {
	if(str == "" || str == undefined) {
		return;
	}
	
	var arrStr = str.split(";");
	
	var html = [];
	for(var i=0; i<arrStr.length; i++) {
		var type = arrStr[i].split(",")[2];
		
		var typeDiv = "";
		
		if(type == "FEATURE") {
			typeDiv = "typeA";
		} else if(type == "PRICE") {
			typeDiv = "typeB";
		} else if(type == "SAMPLE_TYPE") {
			typeDiv = "typeE";
		} else if(type == "SAMPLE_FEATURE") {
			typeDiv = "sample";
		}
		
		if(arrStr[i].split(",")[0] !="" && typeDiv != "") {
			html.push("<span class=\"ico_label "+typeDiv+"\">"+arrStr[i].split(",")[1]+"</span>");
		}
	}
	
	return html.join("");
}

function getFilterHtmlTag2(str) {
	if(str == "" || str == undefined) {
		return;
	}
	
	var arrStr = str.split(";");
	
	var html = [];
	for(var i=0; i<arrStr.length; i++) {
		var type = arrStr[i].split(",")[2];
		
		var typeDiv = "";
		
		if(type == "FEATURE") {
			typeDiv = "typeA";
		} else if(type == "PRICE") {
			typeDiv = "typeB";
		} else if(type == "SAMPLE_TYPE") {
			typeDiv = "typeE";
		} else if(type == "SAMPLE_FEATURE") {
			typeDiv = "sample";
		}
		
		if(arrStr[i].split(",")[0] !="" && typeDiv != "") {
			html.push("<p class=\"ico_label "+typeDiv+"\">"+arrStr[i].split(",")[1]+"</p>");
		}
	}
	
	return html.join("");
}

function changeAgeYear(birthyear){
	var cAge = null;
	if(birthyear == ""){
		return "";
	}
	var birthyear2 = parseInt(birthyear);
	var today = new Date();
	var year = today.getFullYear();
	var year2 = parseInt(year);
	var age = year2 - birthyear2 +1;
	var first_age = parseInt(age/10);
	var last_age = parseInt(age%10);
	
	if(age<10){
		cAge = "10대 이하";
	}else if(age>49){
		cAge = "50대 이상";
	}else if(last_age>=0 && last_age<4){
		cAge = first_age+"0대 초반";
	}else if(last_age>3 && last_age<7){
		cAge = first_age+"0대 중반";
	}else if(last_age>6 && last_age<=9){
		cAge = first_age+"0대 후반";
	}
	return cAge;
	
}

function updateMobileVoteCnt(reviewcd, type, idx) {
	if(!IS_LOGIN) {
		showConfirmBox({
			message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
			, ok_func : function() {
				var returnUrl = $("#i_sReturnUrl").val()+"?"+$("#i_sReturnParam").val();
				alert(returnUrl);
				MobileBodyStart.goLogin(returnUrl);
			}
		});
	} else {
		MobileCommon.ajax({
			url : GLOBAL_WEB_ROOT + "mobile/shop/mobile_shop_review_vote_save.do"
			, type : "POST"
			, data : {
				i_sReviewcd : reviewcd
				, i_sType : type
				, regChannel : "MOBILE"
			}
			, dataType : "json"
			, animation : false
			, async : false
			, success : function(data, textStatus) {
				if(data.status == "succ") {
					
					if(data.object == "vote") {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt+1));
						$(".btn_vote").eq(idx).text("취소");
					} else {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt-1));
						$(".btn_vote").eq(idx).text("네");
					}
				} else if(data.status == "isNotLogin") {
					showConfirmBox({
						message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
						, ok_func : function() {
							var returnUrl = $("#i_sReturnUrl").val()+"?"+$("#i_sReturnParam").val();
							
							MobileBodyStart.goLogin(returnUrl);
						}
					});
				}
				else {
					showMessageBox({
						message : data.message
					});
				}
			}
		});
	}
}

function updateVoteCnt(reviewcd, type, idx) {
	if(!IS_LOGIN) {
		showConfirmBox({
			message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
			, ok_func : function() {
				var returnUrl = $("#i_sReturnUrl").val()+"?"+$("#i_sReturnParam").val();
				WebBodyStart.goLogin(returnUrl);
			}
		});
	} else {
		cmAjax({
			url : GLOBAL_WEB_ROOT + "mobile/shop/mobile_shop_review_vote_save.do"
			, type : "POST"
			, data : {
				i_sReviewcd : reviewcd
				, i_sType : type
				, regChannel : "PC"
			}
			, dataType : "json"
			, animation : false
			, async : false
			, success : function(data, textStatus) {
				if(data.status == "succ") {
					if(data.object == "vote") {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt+1));
						$(".btn_vote").eq(idx).text("취소");
					} else {
						var preCnt = parseInt(SetNum($(".span_voteCnt").eq(idx).text()));
						
						$(".span_voteCnt").eq(idx).text(SetNumComma(preCnt-1));
						$(".btn_vote").eq(idx).text("네");
					}
				} else if(data.status == "isNotLogin") {
					showConfirmBox({
						message : "해당 서비스는 로그인한 고객만 사용할 수 있습니다. 로그인하시겠습니까?"
						, ok_func : function() {
							var returnUrl = $("#i_sReturnUrl").val()+"?"+$("#i_sReturnParam").val();
							
							WebBodyStart.goLogin(returnUrl);
						}
					});
				}
				else {
					showMessageBox({
						message : data.message
					});
				}
			}
		});
	}
}

function rgbToHsv(color) {
	var colors = [];
	
	var r = parseInt(color.substring(0,2), 16)/255;
	var g = parseInt(color.substring(2,4), 16)/255;
	var b = parseInt(color.substring(4,6), 16)/255;
	
	var max = Math.max.apply(Math, [r,g,b]);
	var min = Math.min.apply(Math, [r,g,b]);
	
	/*var h = (max + min)/2;
	var s = (max + min)/2;
	var l = (max + min)/2;
	
	if(max == min) {
		h = 0;
		s = 0;
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2-max-min) : d/(max + min);
		switch(max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	        case g: h = (b - r) / d + 2; break;
	        case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	
	colors.push({h : h * 360, s : s*100, l : l * 100});*/
	var chr = max - min;
	var hue = 0;
	var val = max;
	var sat = 0;
	
	if(val > 0) {
		sat = chr/val;
		if(sat > 0) {
			if(r == max) {
				hue = 60*(((g-min)-(b-min))/chr);
				if (hue < 0) {hue += 360;}
			} else if (g == max) { 
                hue = 120+60*(((b-min)-(r-min))/chr); 
            } else if (b == max) { 
                hue = 250+60*(((r-min)-(g-min))/chr); 
            }
		}
	}
	
	return {
		h : hue
		, s : sat
		, v : val
		, color : color
	};
}

/*function sortColors(colorStr) {
	var arrColors = colorStr.split(",");
	var hslArr = new Array();
	for(var i=0; i<arrColors.length; i++) {
		hslArr[i] = [rgbToHsl(arrColors[i]), i];
	}
	
	
	var sortedHslArr = new Array();
	outerloop :
	for(var i=0; i<hslArr.length; i++) {
		for(var j=0; j<sortedHslArr.length; j++) {
			
			if(sortedHslArr[j][0][0] == undefined || sortedHslArr[j][0][0] == "") {
				sortedHslArr[j][0][0] = hslArr[i][0][0];
			}
			
			if(sortedHslArr[j][0][0] > hslArr[i][0][0]) {
				sortedHslArr.splice(j, 0, hslArr[i]);
				continue outerloop;
			}
		}
		sortedHslArr.push(hslArr[i]);
	}
	var sortedRgbArr = new Array();
	
	for(var i=0; i<sortedHslArr.length; i++) {
		sortedRgbArr[i] = arrColors[sortedHslArr[i][1]];
	}
	
	return sortedRgbArr;
}*/
function sortColors(colorStr) {
	var arrColors = colorStr.split(",");
	var r, g, b, i, f, p, q, t;
	var colors = [];
	var arrRgb = [];
	var arrSortColors = [];
	for(var i=0; i<arrColors.length; i++) {
		colors = rgbToHsv(arrColors[i]);
		
		arrSortColors.push(colors);
	}
	
	arrSortColors.sort(function(a, b) {return a.h - b.h;});
	
	/*for(var j=0; j<arrSortColors.length; j++) {
		var h = arrSortColors[j].h;
		var s = arrSortColors[j].s;
		var v = arrSortColors[j].v;
		var c = arrSortColors[j].color;
		i = Math.floor(h * 6);
	    f = h * 6 - i;
	    p = v * (1 - s);
	    q = v * (1 - f * s);
	    t = v * (1 - (1 - f) * s);
	    
	    switch (i % 6) {
	        case 0: r = v, g = t, b = p; break; 
	        case 1: r = q, g = v, b = p; break;
	        case 2: r = p, g = v, b = t; break;
	        case 3: r = p, g = q, b = v; break;
	        case 4: r = t, g = p, b = v; break;
	        case 5: r = v, g = p, b = q; break;
	        default : 
	        	r = 0, g = 0, b = 0;
	        	break;
	    }
	    
	    arrRgb.push({
	        r: Math.floor(r * 255),
	        g: Math.floor(g * 255),
	        b: Math.floor(b * 255),
	        color : c
	    });
	    
	    console.log(c);
	}*/
	
	return arrSortColors;
}

function hsvToRgb(h, s, v) {
	h = h * 1.0;
	s = s * 1.0;
	v = v * 1.0;
	
	var obj = {
		r : 0
		, g : 0
		, b : 0
	};
	
	var ang = h / 60;
	var angf = Math.floor(ang);
	var ha = angf%6;
	var f=ang-angf;
	var p = v * (1-s);
	var q=v*(1-f*s);
    var t=v*(1-(1-f)*s);
    
    if(ha == 0) {
    	obj.r = Math.floor(v*255);
    	obj.g = Math.floor(t*255);
    	obj.b = Math.floor(p*255);
    } else if(ha == 1) {
    	obj.r=Math.floor(p*255);
    	obj.g=Math.floor(v*255);
    	obj.b=Math.floor(t*255);
    } else if(ha == 2) {
    	obj.r=Math.floor(p*255);
        obj.g=Math.floor(v*255);
        obj.b=Math.floor(t*255);
    } else if(ha == 3) {
    	obj.r=Math.floor(p*255);
        obj.g=Math.floor(q*255);
        obj.b=Math.floor(v*255);
    } else if(ha == 4) {
    	obj.r=Math.floor(t*255);
    	obj.g=Math.floor(p*255);
    	obj.b=Math.floor(v*255);
    } else if(ha == 5) {
    	obj.r=Math.floor(v*255);
    	obj.g=Math.floor(p*255);
    	obj.b=Math.floor(q*255);
    }
    
    return obj;
}

function getFilterHtmlTagForWeb (str) {
	
	if(str != undefined && str != "") {
		return "";
	}
	
	var html = [];
	var arrTag = str.split(";");
	
	var type = "";
	
	for(var i=0; i<arrTag.length; i++) {
		type = arrTag[i].split(",")[0];
		
		if(type !="DG_P018" && type != "DG_P017") {
			html.push("<span class=\"ico_srvAlim2 srv\""+type+"\">"+arrTag[i].split(",")[1]+"</span>");
		}
	}
	
	return html.join("");
}

//YHCHOI : 에러 메세지 노출.
function addErrorMessageBox(target,message){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);
	
	if (msgTarget.size() > index) {
		msgTarget.eq(index).text("* " + message);
		msgTarget.eq(index).removeClass("error_hide");
	}
	
	target.addClass("error");

}

//YHCHOI : 에러 메세지 삭제.
function removeErrorMessageBox(target){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);

	if (msgTarget.size() > index) {

		msgTarget.addClass("error_hide");
		
	}
	
	target.removeClass("error");
	
}

//YHCHOI : 전체 삭제
function removeErrorMessage() {
	var target = $(".error");
	
	target.each(function (n) {
		
		var name = $(this).attr("name");
		var index = $("*[name='"+ name +"']").index(target);
		var msgTarget = $(".error_" + name);
		
		if (msgTarget.size() > index) {
			msgTarget.addClass("error_hide");
		}
		
		target.removeClass("error");
	});
}

//YHCHOI : 에러 메세지 삭제.
function removeWebErrorMessageBox(target){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);

	if (msgTarget.size() > index) {

		msgTarget.eq(index).addClass("error_hide");
		
	}
	
	target.parent().removeClass("error");
	
}

//YHCHOI : 에러 메세지 삭제.
function removeWebErrorMessageBox2(target,msgTarget){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);

	if (msgTarget.size() > index) {

		msgTarget.addClass("error_hide");
		
	}
	
	target.parent().removeClass("error");
	
}

//YHCHOI : 전체 삭제
function removeWebErrorMessage() {
	var target = $(".error");
	
	target.each(function (n) {
		
		var name = $(this).attr("name");
		var index = $("*[name='"+ name +"']").index(target);
		var msgTarget = $(".error_" + name);
		
		if (msgTarget.size() > index) {
			msgTarget.addClass("error_hide");
		}
		
		target.parent().removeClass("error");
	});
}

//YHCHOI : 전체 삭제
function removeWebErrorMessage2() {
	$(".error").removeClass("error");
	$("[class*=error_]").addClass("error_hide");
}

//YHCHOI : 에러 메세지 노출.
function addWebErrorMessageBox(target,message){
	
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $(".error_" + name);
	
	if (msgTarget.size() > index) {
	
		msgTarget.eq(index).text("* " + message);
		msgTarget.eq(index).removeClass("error_hide");
		
	}
	
	target.parent().addClass("error");

}

//YHCHOI : 에러 메세지 노출.
function addWebErrorMessageBox2(target,message,msgTarget){
	var name = target.attr("name");
	var index = $("*[name='"+ name +"']").index(target);

	if(msgTarget == null || msgTarget == undefined){
		msgTarget = $(".error_" + name);
	}
	
	if (msgTarget.size() > index) {

		msgTarget.eq(index).text("* " + message);
		msgTarget.removeClass("error_hide");
		
	}
	
	target.parent().addClass("error");

}

function setNaviIndex(obj, event) {
	var len = obj.length;
	var idx = event;
	
	if (len == 2) {
		idx = event % 2;
	}
	
	return idx;
}

//YHCHOI : 배송지조회
function fnDeliverySearch(delino) {
	
	  if(GLOBAL_MOBILE_APP != "WEB"){		  
		  document.location.href="https://trace.epost.go.kr//xtts/tt/epost/ems/ems_kor.jsp";		  
	  }else{		  
		  window.open("https://trace.epost.go.kr//xtts/tt/epost/ems/ems_kor.jsp","DELIVERY_INFO", "width=700, height=600, left="+(screen.availWidth/2-700/2)+", top="+(screen.availHeight/2-511/2)+", scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");		  
	  }
}

function fnDeliverySearch(deliComp, deliNum){
	
	var url = "";
	// EMS
	if (deliComp == "SD_001") {
		url	=	"https://trace.epost.go.kr/xtts/servlet/kpl.tts.common.svl.SttSVL?POST_CODE="+deliNum+"&target_command=kpl.tts.tt.epost.cmd.RetrieveEmsTraceEngCmd";
	}
	// K-packet
	else if (deliComp == "SD_002") {
		alert("조회 불가능한 배송사 입니다.");
		return;
	}
	// DHL
	else if (deliComp == "SD_003") {
		url	=	"http://www.dhl.com/en/express/tracking.html?brand=DHL&AWB="+deliNum
	}
	// 한진택배
	else if (deliComp == "SD_004") {
		url = "https://tracking.sagawa-sgx.com/sgx/trackeng.asp?CAT=awb&enc=JP&AWB="+deliNum
	}
	else if (deliComp == "CJ") {
		url = "http://nexs.cjgls.com/web/info.jsp?slipno="+deliNum;
	}
	else if (deliComp == "LOGEN") {
		url = "https://www.ilogen.com/iLOGEN.Web.New/TRACE/TraceNoView.aspx?slipno=" + deliNum + "&gubun=slipno";
	}
	else {
		alert("[" + deliComp + "] 조회 불가능한 배송사 입니다.");
		return;
	}
	
	var popup = pop(url, "delivery_info", "900", "500", 1);
	try {
		popup.focus();
	} catch (e) {}
}

function addMobileNodata(beforeUrl) {
	var nodataHtml = [];
	
	nodataHtml.push("<div class=\"errorCont dataDelete\">");
	nodataHtml.push("	<div class=\"ttlbox\">");
	nodataHtml.push("		<p class=\"ttl\">죄송합니다. <br />요청하신 페이지를 <span>찾을 수 없습니다.</span></p>");
	nodataHtml.push("		<p class=\"txt\">웹페이지 주소가 바뀌었거나 잘못 입력 하신 경우입니다. 입력하신 페이지 주소가 정확한지 다시 한번 확인해 보시거나 <span class=\"line\">새로고침</span>을 해 보시기 바랍니다.</p>");
	nodataHtml.push("		<p class=\"txt\">계속 같은 문제가 반복적으로 발생 될 경우 <span class=\"line\">고객센터</span>로 문의해 주세요.</p>");
	nodataHtml.push("	</div>");
	nodataHtml.push("	<div class=\"btnArea\">");
	nodataHtml.push("		<span class=\"btn_ty3\"><a href=\""+beforeUrl+"\">이전페이지로 이동</a></span>");
	nodataHtml.push("		<span class=\"btn_ty\"><a href=\""+GLOBAL_WEB_URL+"mobile/main.do\">아모레퍼시픽몰 홈</a></span>");
	nodataHtml.push("	</div>");
	nodataHtml.push("</div>");
	
	return nodataHtml.join("");
}

//YHCHOI : 1+1 구매 갯수
function onPlusCount(totalcnt, preCnt, nowCnt, plusBuyCnt, plusGiveCnt){

	var start  	  = preCnt + 1;
	var end	   	  = preCnt + nowCnt;
	var grpPrdCnt = plusBuyCnt + plusGiveCnt;
	var num		  = 0;
	
	var buyCnt = 0;
	var giveCnt = 0;
	var buyGapCnt = 0;
	var giveGapCnt = 0;
	
	for(var i= start; i<=end; i++){
	
		num = i % grpPrdCnt;
		
		if(num != 0 && num <= plusBuyCnt){
			buyCnt++;
		}else{
			giveCnt++;
		}
	}
	
	var buyGap = buyCnt % plusBuyCnt;
	
	var freeGap = parseInt(Math.floor(buyCnt/plusBuyCnt));
	
	if(giveCnt < freeGap * plusGiveCnt){
		
		giveGapCnt = freeGap * plusGiveCnt - giveCnt;
	}
	
	if(buyGap > 0){
		
		buyGapCnt = plusBuyCnt + plusGiveCnt - buyGap;
	}
	
	var list = {
			totalcnt : totalcnt
           ,preCnt : preCnt
           ,nowCnt : nowCnt
		   ,buyCnt : buyCnt
		   ,giveCnt : giveCnt
		   ,buyGapCnt : buyGapCnt
		   ,giveGapCnt : giveGapCnt
	};
	
	return list;
}

function onePlusCheck(totalCnt, plusBuyCnt, plusGiveCnt) {
	var groupPrdCnt = plusBuyCnt + plusGiveCnt;
	var buyCnt = 0;
	var giveCnt = 0;
	var num = 0;
	
	for(var i=1; i<=totalCnt; i++) {
		num = i % groupPrdCnt;
		
		if(num != 0 && num <= plusBuyCnt) {
			buyCnt++;
		} else {
			giveCnt++;
		}
	}
	
	var buyGap = buyCnt % plusBuyCnt;
	var freeGap = parseInt(Math.floor(buyCnt / plusBuyCnt));
	var giveGapCnt = 0;
	var buyGapCnt = 0;
	
	if(giveCnt < freeGap * plusGiveCnt) {
		giveGapCnt = freeGap * plusGiveCnt - giveCnt;
	}
	
	if(buyGap > 0) {
		buyGapCnt = plusBuyCnt + plusGiveCnt - buyGap;
	}
	
	var list = {
		buyCnt : buyCnt
		, giveCnt : giveCnt
		, buyGapCnt : buyGapCnt
		, giveGapCnt : giveGapCnt
	};
	
	return list;
}

function onePlusPriceResult(totalCnt, price, plusBuyCnt, plusGiveCnt, list) {
	var grpPrdCnt = plusBuyCnt + plusGiveCnt;//2
	var groupCnt = parseInt(Math.floor(totalCnt / grpPrdCnt));//1
	var unitPrice = parseInt(Math.floor(plusBuyCnt * price / grpPrdCnt / 10)) * 10;
	var lastPrice = (price * plusBuyCnt) - (unitPrice * (grpPrdCnt - 1));
	
	var restCnt = totalCnt - groupCnt * grpPrdCnt;
	var restBuyCnt = restCnt <= plusBuyCnt ? restCnt : plusBuyCnt;
	var restGiveCnt = restCnt - restBuyCnt;
	var restUnitPrice = restGiveCnt == 0 ? price : parseInt(Math.ceil(price * restBuyCnt) / (restBuyCnt + restGiveCnt) / 100) * 100;
	var restLastPrice = (price * restBuyCnt) - (restUnitPrice * (restBuyCnt + restGiveCnt - 1));

//	console.log("#######################################");
//	console.log("#" + plusBuyCnt+"+"+plusGiveCnt+"상품" + totalCnt + "개 구매");
//	console.log("grpPrdCnt::"+grpPrdCnt);
//	console.log("groupCnt::"+groupCnt);
//	console.log("unitPrice::"+unitPrice);
//	console.log("lastPrice::"+lastPrice);
//	console.log("restCnt::"+restCnt);
//	console.log("restBuyCnt::"+restBuyCnt);
	
	var groupList = [];
	for(var i = 0; i<list.length; i++) {
		var cnt = parseInt(list[i].cnt);
		var start = parseInt(list[i].preCnt) + 1;
		var end = start + cnt;
		var num = 0;
		
		var unitCnt = 0;
		var lastCnt = 0;
		var restUnitCnt = 0;
		var restLastCnt = 0;
		
		
		for(var j = start; j < end; j++){
			
			num = j % grpPrdCnt;
			
			if(j > totalCnt - restCnt){
				if (j < totalCnt ) restUnitCnt++;
				else restLastCnt++;
			} else {
				if (num == 0 ) lastCnt++;
				else unitCnt++;
			}
		}
		
		if(unitPrice == lastPrice) {
			if(unitCnt + lastCnt > 0) {
				groupList.push({price : unitPrice, index : list[i].index, cnt : (unitCnt + lastCnt)});
			}
		} else {
			if(unitCnt > 0) {
				groupList.push({price : unitPrice, index : list[i].index, cnt : unitCnt});
			}
			
			if(lastCnt > 0) {
				groupList.push({price : lastPrice, index : list[i].index, cnt : lastCnt});
			}
		}
		
		if(restUnitPrice == restLastPrice) {
			if(restUnitCnt + restLastCnt > 0) {
				groupList.push({price : restUnitPrice, index : list[i].index, cnt : (restUnitCnt + restLastCnt)});
			}
		} else {
			if(restUnitCnt > 0) {
				groupList.push({price : restUnitPrice, index : list[i].index, cnt : restUnitCnt});
			}
			
			if(restLastCnt > 0) {
				groupList.push({price : restLastPrice, index : list[i].index, cnt : restLastCnt});
			}
		}
	}
	
	return groupList;
}

//앱 다운로드 
function appDownloadProc(){
	var userAgent = navigator.userAgent.toLowerCase();
	var userAgentChk = ( userAgent.match(/(ipad|iphone|ipod)/g) ? "iOS" : "UNKNOWN" );
	
	if(userAgentChk == "UNKNOWN"){
		userAgentChk = ( userAgent.match('android') ? "Android" : "UNKNOWN" );
	}
	
	if(userAgentChk == "iOS"){
		//location.href = "https://itunes.apple.com/kr/app/id662044174?mt=8";
		location.href = "https://itunes.apple.com/kr/app/alittaum/id821400042?mt=8";
	}else if(userAgentChk == "Android"){
		//window.open("market://details?id=com.amorepacific.amorepacificmall", "_blank");
		location.href = "https://play.google.com/store/apps/details?id=com.aritaum1";
	}else{
		showMessageBox({
			message : "지원되지 않는 단말입니다."
		});
	}
}


//IE 여부 및 버전 체크
function fnIECheck() {
	var isIE = false;
	var version = null;
	var ua = navigator.userAgent;
	if ( ua.match(/MSIE/) || ua.match(/Trident/) ) {
		isIE = true;
		version = ua.match(/(MSIE\s|rv:)([\d\.]+)/)[2];
	}
	
	return {isIE : isIE, version : version};
}

//길이만큼 *로 변환
function getHidden(source,length){
	
	var sReturn = "";
	
	if(source != null && source != ""){

		var slength = source.length;
		
		for(var i=0; i<slength; i++){
			
			sReturn += "*";
			
		}
		
	}
	return sReturn;
}

//텍스트를 *로 변환
function getStringHidden(source,length){
	
	var sReturn = "";
	
	if(source != null && source != ""){

		var slength = source.length;
		
		for(var i=0; i<slength; i++){
			
			if(i <length){
				sReturn += source.charAt(i);
			}else{
				sReturn += "*";
			}
			
		}
		
	}
	return sReturn;
}

//이메일 *로 변환
function getEmailHidden(email, length){
	
	var sReturn = "";
	
	if(email != null & email !=""){
		
		if(email.indexOf("@") > -1){
			
			var emailFst = email.substring(0,email.indexOf("@"));
			var emailLst = email.substring(email.indexOf("@") , email.length);
			
			sReturn = getStringHidden(emailFst,length) + emailLst;
			
		}else{
			sReturn = getStringHidden(email,length);
		}

	}
	return sReturn;
}

//연락처 변환 및 마킹처리
function getMobileHidden(phone){
	
	var sReturn = "";
	
	if(phone != null && phone !=""){
		
		var phoneFst = phone.substring(0,phone.indexOf("-"));
		var phoneMst = phone.substring(phone.indexOf("-")+1,phone.lastIndexOf("-"));
		var phoneLst = phone.substring(phone.lastIndexOf("-")+1,phone.length);
		
		if(phoneMst.length > 3){
			
			phoneMst = "****";
			
		}else{
			
			phoneMst = "***";
		}
		
		sReturn = phoneFst+"-"+phoneMst+"-"+phoneLst;

	}
	
	return sReturn;
}

function getDtFormat(date){
	
	if (date == undefined) {
		return "";
	}
	
	if (8 <= date.length) {
		date	= date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8);
	}
	return date;
}

function getDtmFormat(date){
	
	if (date == undefined) {
		return "";
	}
	
	if (12 <= date.length) {
		date = date.substring(0, 4) + "." + date.substring(4, 6) + "." + date.substring(6, 8)
			   + date.substring(8, 10) + ":" + date.substring(10, 12)
	}
	return date;
}

function addMobileErrorMessageBox2(target,message){
	var name = target.attr("name");
	
	if(name == "" || name == undefined){
		name = target.attr("id");
	}
	
	var index = $("*[name='"+ name +"']").index(target);
	var msgTarget = $("#msg_" + name);
	
	msgTarget.html(message);
	msgTarget.show();
	target.parent().addClass("err");
}


function addMobileErrorMessageBox2ForMsgTarget(target,message, msgTarget){
	var name = target.attr("name");
	
	var index = $("*[name='"+ name +"']").index(target);
	
	if(msgTarget == undefined){
		msgTarget = $("#msg_" + name);
	}
	
	msgTarget.html(message);
	msgTarget.show();
	target.parent().addClass("err");
}

function removeMobileErrorMessageBox2(target, msgTarget){

	var name = target.attr("name");
	
	if(name == "" || name == undefined){
		name = target.attr("id");
	}
	
	if(msgTarget == "" || msgTarget == undefined){
		
		var index = $("*[name='"+ name +"']").index(target);
		msgTarget = $("#msg_" + name);
	}
	
	msgTarget.hide();
	target.parent().removeClass("err");
	
}

function addChangeDtm(flagmonth,fncname) {
	var today = new Date();
	var monthago="";
	var myear = "";
	var mmonth = "";
	var mday   = "";
	var tyear = "";
	var tmonth = "";
	var tday   = "";
	if(flagmonth == "1Week"){
		    monthago=new Date(Date.parse(today)-7*1000*60*60*24);
		   
		    myear = monthago.getFullYear();
		    mmonth = monthago.getMonth()+1;
		    mday   = monthago.getDate();
		    tyear = today.getFullYear();
		    tmonth = today.getMonth()+1;
		    tday   = today.getDate();
		   
		   if(tmonth<10){
			   tmonth="0"+tmonth;				
		   }
		   if(tday<10){
			   tday ="0"+tday;
		   }
		   if(mmonth<10){
			   mmonth="0"+mmonth;
		   }
		   if(mday<10){
			   mday = "0"+mday;
		   } 
		   
    }else if(flagmonth == "1month") {//1개월
		monthago=new Date(Date.parse(today)-30*1000*60*60*24);
		myear = monthago.getFullYear();
		mmonth = monthago.getMonth()+1;
		mday   = monthago.getDate();
		tyear = today.getFullYear();
		tmonth = today.getMonth()+1;
		tday   = today.getDate();
		if(tmonth<10){
			tmonth="0"+tmonth;				
		}
		if(tday<10){
			tday ="0"+tday;
		}
	 	if(mmonth<10){
	 		mmonth="0"+mmonth;
		}
		if(mday<10){
			mday = "0"+mday;
		} 
	} else if(flagmonth == "3month") {//3개월
			monthago=new Date(Date.parse(today)-90*1000*60*60*24);
			myear = monthago.getFullYear();
			mmonth = monthago.getMonth()+1;
			mday   = monthago.getDate();
			tyear = today.getFullYear();
			tmonth = today.getMonth()+1;
			tday   = today.getDate();
			if(tmonth<10){
				tmonth="0"+tmonth;				
			}
			if(tday<10){
				tday ="0"+tday;
			}
		 	if(mmonth<10){
		 		mmonth="0"+mmonth;
			}
			if(mday<10){
				mday = "0"+mday;
			} 
	} else if(flagmonth == "6month") {//6개월
			monthago=new Date(Date.parse(today)-180*1000*60*60*24);
			myear = monthago.getFullYear();
			mmonth = monthago.getMonth()+1;
			mday   = monthago.getDate();
			tyear = today.getFullYear();
			tmonth = today.getMonth()+1;
			tday   = today.getDate();
			if(tmonth<10){
				tmonth="0"+tmonth;				
			}
			if(tday<10){
				tday ="0"+tday;
			}
		 	if(mmonth<10){
		 		mmonth="0"+mmonth;
			}
			if(mday<10){
				mday = "0"+mday;
			} 
			
	} else if(flagmonth == "1year") {
			var monthago=new Date(Date.parse(today)-365*1000*60*60*24);
			myear = monthago.getFullYear();
			mmonth = monthago.getMonth()+1;
			mday   = monthago.getDate();
			tyear = today.getFullYear();
			tmonth = today.getMonth()+1;
			tday   = today.getDate();
			
			if(tmonth<10){
				tmonth="0"+tmonth;				
			}
			if(tday<10){
				tday ="0"+tday;
			}
		 	if(mmonth<10){
		 		mmonth="0"+mmonth;
			}
			if(mday<10){
				mday = "0"+mday;
			} 
	}
	fncname(myear,mmonth,mday,"st");
	fncname(tyear,tmonth,tday,"ed");
}

/**
 * SRLEE
 * 전화번호를 입력받아 '-' 넣어준다 (ex 021231234 -> 02-123-1234)
 * @param telNum
 */
function convertTelNum(telNum){
	if(telNum == "undefined" || telNum == "" || telNum == null) {
		return "";
	}
	
	var telStr1 = "";
	var telStr2 = "";
	var telStr3 = "";
	var convertTelNum = "";
	
	if(telNum.indexOf("02") == 0) { // 서울 지역번호 따로 변환
		
		if(telNum.length == 9) { // 2-3-4
			telStr1 = telNum.substring(0,2);
			telStr2 = telNum.substring(2,5);
			telStr3 = telNum.substring(5,9);
			
			convertTelNum = telStr1+"-"+telStr2+"-"+telStr3;
		}else if(telNum.length == 10) { // 2-4-4
			telStr1 = telNum.substring(0,2);
			telStr2 = telNum.substring(2,6);
			telStr3 = telNum.substring(6,10);
			
			convertTelNum = telStr1+"-"+telStr2+"-"+telStr3;
		}else{
			
		}
		
	}else{ // 서울 이외 지역
		if(telNum.length == 10) { // 3-3-4
			telStr1 = telNum.substring(0,3);
			telStr2 = telNum.substring(3,6);
			telStr3 = telNum.substring(6,10);
			
			convertTelNum = telStr1+"-"+telStr2+"-"+telStr3;
		}else if(telNum.length == 11) { // 3-4-4
			telStr1 = telNum.substring(0,3);
			telStr2 = telNum.substring(3,7);
			telStr3 = telNum.substring(7,11);
			
			convertTelNum = telStr1+"-"+telStr2+"-"+telStr3;
		}else {
			
		}
	}
	
	return convertTelNum;
};

function getSalePer(listPrice,salePrice){
	var per= Math.round((parseInt(listPrice) - parseInt(salePrice)) * 100 / parseInt(listPrice));
	return per;
}

//ERROR MSG BOX
var ErrorMsg = {
	addBox : function(target,message){
		
		var name = target.attr("name");
		
		if(name == undefined || name.trim() == ""){
			name = target.attr("id");
		}
		
		var msgTarget = $("#msg_" + name);
		
		if(message != ""){
			msgTarget.html("<span class='arr'></span>"+message+"");
			msgTarget.show();
		}
		
		target.addClass("err");
		
	}
	, addBoxTarget : function(target,message,msgTarget){
		
		var name = target.attr("name");
		
		if(name == undefined || name.trim() == ""){
			name = target.attr("id");
		}
		
		if(msgTarget == "" || msgTarget == undefined){
			msgTarget = $("#msg_" + name);
		}
		
		if(message != ""){
			msgTarget.html("<span class='arr'></span>"+message+"");
			msgTarget.show();
		}
		
		msgTarget.removeClass("error_hide");
		target.parent().addClass("error");
		
	}
	, removeBox : function(target){
		
		var name = target.attr("name");
		
		if(name == undefined || name.trim() == ""){
			name = target.attr("id");
		}
		
		var msgTarget = $("#msg_" + name);
		msgTarget.hide();
		
		target.removeClass("err");
	}
	, removeBoxTarget : function(target, msgTarget){
		
		var name = target.attr("name");
		
		if(name == undefined || name.trim() == ""){
			name = target.attr("id");
		}
		
		if(msgTarget == "" || msgTarget == undefined){
			msgTarget = $("#msg_" + name);
		}
		msgTarget.hide();
		msgTarget.addClass("error_hide");
		target.parent().removeClass("error");
		
	}
	, removeBoxAll : function(){
		$(".field").removeClass("error");
		$(".error_msg").addClass(".error_hide");
	}
};

var CmGlobalFunction = {
		/***********************************************
		 * NWLEE : checkText validation byte check 
		 * @param textStr : 체크할 글자
		 * @param MaxLength : 바이트 제한
		 * @returns boolean
		***********************************************/
		checkText : function(textStr, MaxLength){
			var textLength = textStr.length;
		    var textChar = "";
		    var count = 0;
		    var countMax = MaxLength;
		    var countLen = 0;
		    var textStr2 = "";

		    for(var i = 0; i < textLength; i++){
		        // 한글자추출
		        textChar = textStr.charAt(i);

		        // 한글이면 2를 더한다.
		        if (escape(textChar).length > 4) {
		            count += 2;
		        }
		        else {   // 그밗의 경우는 1을 더한다.
		            count++;
		        }

		        // 전체 크기가 countMax 넘지않으면
		        if(count <= countMax){
		            countLen = i + 1;
		        }
		    }

		    if(count > countMax){
		        return false;

		    }
		    return true;
		}
		/***********************************************
		 * NWLEE : doT Template 삽입 반복 로직 
		 * @param doT_TemplateId
		 * @param injectionObj
		 * @returns {String}
		***********************************************/
		, doTjs_Injection : function(doT_TemplateId, injectionObj){
			var arrHtml = [];
			var pagefn = doT.template(document.getElementById(doT_TemplateId).text, undefined, undefined);
			arrHtml.push(pagefn(injectionObj));
			return arrHtml.join("");
		}

		/***********************************************
		 * NWLEE : 문자 함수 :: splitStr 로 나누고 replaceHeadStr를 나눈 문자열 맨앞에 붙인후 ,로 구분된 문자열 리턴 . (파워리뷰 태그용)
		 * @param doT_TemplateId
		 * @param injectionObj
		 * @returns {String}
		***********************************************/
		, setSplit_HeadReplace : function(tagStr, replaceHeadStr, splitStr){
			if(tagStr != "" && tagStr != undefined){
				
				if(tagStr.indexOf(splitStr) > -1 ){
					
					var splitStr = tagStr.split(splitStr);
					var tagStr = "";
					for(var i = 0 ; i < splitStr.length ; i++){
						if(splitStr[i].indexOf("\(") > -1){
							var arrTemp = splitStr[i].split("\(");
							splitStr[i] = arrTemp[0];
						}
						splitStr[i] = trim(replaceHeadStr+splitStr[i]);
					}
					return splitStr.join(", ");
					
				}
				else{
					return replaceHeadStr+tagStr;
				}
				
			}
			return "";
		}
		/***********************************************
		 * NWLEE : PowerReview 작성자 다른리뷰보기 페이징 처리 
		 * @param totalRecords
		 * @param tableLimit
		 * @param nowPage
		 * @param idname
		 * @param callbackFunction
		***********************************************/
		//페이지 목록 나타내기
		// 총 레코드수, 페이지당 게시물수, 현재 페이지, 페이지목록을 보여줄 id 를 파라미터로 받습니다.
		, reviewPaging : function(totalRecords, tableLimit, nowPage, idname, callbackFunction, size) {
			
			pageList = document.getElementById(idname); // 페이지 목록이 뿌려질 곳 <td>
			pageList.innerHTML = "";
			if(totalRecords==0){		
				//document.getElementById(idname).innerHTML="결과가 없습니다.";	
				return;
			}		
			var totalPages = Math.ceil(totalRecords/tableLimit); // 총페이지수
			
			var strPaging="";
			
			var blockPage = 0; // 1,11,21,...각 블럭 들의 첫페이지 1~10 까지가 한블럭
			var blockSize = 5; // 보여줄 페이지 갯수, 이전 x개, 다음 x개
			
			if(size != undefined && size != "") {
				blockSize = size;
			}
			
			//블럭의 첫번째 페이지 구하기
			blockPage = Math.floor((nowPage-1)/blockSize);
			blockPage = blockPage * blockSize + 1;
			
			//이전 n개구문
			if(blockPage != 1){
				strPaging="<a href='#none' class='first' onClick='"+callbackFunction+"(1)'><span class='blind'>처음</span></a> ";
				strPaging+="<a href='#none' class='prev' onClick='"+callbackFunction+"("+ (blockPage-1) + ")'><span class='blind'>이전</span></a>";
			}else{
				strPaging="<a href='#none' class='first' ><span class='blind'>처음</span></a> ";
				strPaging+="<a href='#none' class='prev'><span class='blind'>이전</span></a>";
			}
			strPaging+="&nbsp;";
			
		     //페이지리스트, blockPage++
			for(var i=1; i<=blockSize; i++, blockPage++){
				// 마지막 페이지와 같다면..
				
				if(blockPage == totalPages){
					i = blockSize+1; 
				}
				// 블럭페이지와 현재페이지가 같으면 링크없다.
				//&nbsp;<a href="#"><span class="page_noverdana_on">1</span></a> . <a href="#">2</a> . <a href="#">3</a> . <a href="#">4</a> . <a href="#">5</a> . <a href="#">6</a> . <a href="#">7</a> . <a href="#">8</a> . <a href="#">9</a> . <a href="#">10</a> &nbsp;
				if(blockPage == nowPage){
					strPaging+="<strong>" + blockPage + "</strong>";
				}else{
					strPaging+="<a href='#none' onClick='"+callbackFunction+"("+ blockPage + ")'>" + blockPage + "</a>";
				}
			}
			
			strPaging+="&nbsp;";
			//다음 n개
			
			if((blockPage-1) < totalPages){
				strPaging +="<a href='#none' class='next' onClick='"+callbackFunction+"("+ blockPage + ")'><span class='blind'>다음</span></a>";
				strPaging +="<a href='#none' class='end' onClick='"+callbackFunction+"("+ totalPages + ")'><span class='blind'>마지막</span></a>";
			}else{
				strPaging+="<a href='#none' class='next'><span class='blind'>다음</span></a>";
				strPaging+="<a href='#none' class='end'><span class='blind'>마지막</span></a>";
			}
			
			pageList.innerHTML = strPaging;
			
		}
		
		, storePaging : function(totalRecords, tableLimit, nowPage, idname, callbackFunction, size) {
			pageList = document.getElementById(idname); // 페이지 목록이 뿌려질 곳 <td>
			pageList.innerHTML = "";
			if(totalRecords==0){		
				//document.getElementById(idname).innerHTML="결과가 없습니다.";	
				return;
			}		
			var totalPages = Math.ceil(totalRecords/tableLimit); // 총페이지수
			
			var strPaging="";
			
			var blockPage = 0; // 1,11,21,...각 블럭 들의 첫페이지 1~10 까지가 한블럭
			var blockSize = 5; // 보여줄 페이지 갯수, 이전 x개, 다음 x개
			
			if(size != undefined && size != "") {
				blockSize = size;
			}
			
			//블럭의 첫번째 페이지 구하기
			blockPage = Math.floor((nowPage-1)/blockSize);
			blockPage = blockPage * blockSize + 1;
			
			//이전 n개구문
			if(blockPage != 1){
				strPaging="<div class='cntPaging'>";
				strPaging+="<div class='paging'>";
				strPaging+="<button class='prev' href='javascript:;' onClick='"+callbackFunction+"("+ (blockPage-1) + ")'><span class='blind'>이전</span></button>";
				strPaging+="<div class='w_paging'>";
				strPaging+="<strong>'"+nowPage+"'</strong>";
				strPaging+="";
				strPaging+="</div>";
				strPaging+="<button class='next' href='javascript:;'><span class='blind'>다음</span></button>";
				strPaging+="</div>";
				strPaging+="</div>";
				
			}else{
				strPaging="<div class='cntPaging'>";
				strPaging+="<div class='paging'>";
				strPaging+="<button class='prev' href='javascript:;'><span class='blind'>이전</span></button>";
				strPaging+="<div class='w_paging'>";
				strPaging+="<strong>"+nowPage+"</strong>";
				strPaging+="";
				strPaging+="</div>";
				strPaging+="<button class='next' href='javascript:;'><span class='blind'>다음</span></button>";
				strPaging+="</div>";
				strPaging+="</div>";
				
			}
			strPaging+="&nbsp;";
			
			//페이지리스트, blockPage++
			for(var i=1; i<=blockSize; i++, blockPage++){
				// 마지막 페이지와 같다면..
				
				if(blockPage == totalPages){
					i = blockSize+1; 
				}
				
				// 블럭페이지와 현재페이지가 같으면 링크없다.
				//&nbsp;<a href="#"><span class="page_noverdana_on">1</span></a> . <a href="#">2</a> . <a href="#">3</a> . <a href="#">4</a> . <a href="#">5</a> . <a href="#">6</a> . <a href="#">7</a> . <a href="#">8</a> . <a href="#">9</a> . <a href="#">10</a> &nbsp;
			if(blockPage == nowPage){
					strPaging+="<strong>" + blockPage + "</strong>";
				}else{
					strPaging+="<a href='#none' onClick='"+callbackFunction+"("+ blockPage + ")'>" + blockPage + "</a>";
				}
			}
			
			strPaging+="&nbsp;";
			//다음 n개
			
			if((blockPage-1) < totalPages){
				strPaging="<div class='cntPaging'>";
				strPaging+="<div class='paging'>";
				strPaging+="<button class='prev' href='javascript:;' onClick='"+callbackFunction+"("+ blockPage + ")'><span class='blind'>이전</span></button>";
				strPaging+="<div class='w_paging'>";
				strPaging+="<strong>"+nowPage+"</strong>";
				strPaging+="";
				strPaging+="</div>";
				strPaging+="<button class='next' href='javascript:javascript;;' onClick='"+callbackFunction+"("+ totalPages + ")'><span class='blind'>다음</span></button>";
				strPaging+="</div>";
				strPaging+="</div>";
				
			}else{
				strPaging="<div class='cntPaging'>";
				strPaging+="<div class='paging'>";
				strPaging+="<button class='prev' href='javascript:;' ><span class='blind'>이전</span></button>";
				strPaging+="<div class='w_paging'>";
				strPaging+="<strong>"+nowPage+"</strong>";
				strPaging+="";
				strPaging+="</div>";
				strPaging+="<button class='next' href='javascript:;'><span class='blind'>다음</span></button>";
				strPaging+="</div>";
				strPaging+="</div>";
				
			}
			pageList.innerHTML = strPaging;
			
		}
		
};

// 콘솔로그
function cm_console(log){
	console.log(log);
}

function lock_touch(e){
    e.preventDefault();
}

//web - 팝업
function popOpen(id){
	var _this = $('#' + id);
	_this.stop(true, false).fadeIn(150);
	_this.addClass('open');
	
	var popCon = _this.find('.pop_con');
	var winH = $(window).height();
	var popW = popCon.width();
	var popH = popCon.height() + 200;

	if(winH < popH){
		popCon.stop(true, false).css({'top': 50, 'marginTop': 0});
	} else {
		document.addEventListener('touchmove', lock_touch);
		popCon.stop(true, false).css({'marginTop': -(popH/2) + 50});
	}

	$('body').addClass('pop_open');
	$('<span class="bg_pop" id="bg_pop_'+id+'"></span>').appendTo('body');

	// esc 닫기
	$(document).keydown(function(e){
		if(e.keyCode == 27) {
			popClose(id);
		}
	});
}
function popClose(id){
	var _this = $('#' + id);
	_this.hide();
	
	var popCon = _this.find('.pop_con');
	popCon.css({'top': '50%', 'marginTop': '50px'});

	$(".bg_pop").eq(0).remove();

	$('body').removeClass('pop_open');
//	 _this.find('.scrollArea').mCustomScrollbar('destroy');
	document.removeEventListener('touchmove', lock_touch);
}

var ballaniVar;
function ballstart(){
    ballaniVar = setTimeout(function(){
        $('.balloon').hide();
    },1400);
}

function ballstop(){
    clearTimeout(ballaniVar);
}

function balloonOpen(elem){
	var ball = "<div class='balloon'><span class='ico'></span><p class='txt'></p></div>";
    $('.balloon').remove();
    ballstop();
    
    if ( !$(elem).hasClass('active') ){
        $(elem).addClass('active');
        $('body').append(ball);
        
        if ($(elem).hasClass('basket')) {
			$('.balloon .txt').html('장바구니 담기 완료');
		} else if ($(elem).hasClass('wishlist')) {
			$('.balloon .txt').html('위시리스트 담기 완료');
		} else if ($(elem).hasClass('favorit')) {
			$('.balloon .txt').html('자주 가는 매장 완료');
		} else if ($(elem).hasClass('btn_like')) {
			$('.balloon .txt').html('추천 완료');
		} else {
			$('.balloon .txt').hide();
		}
        
        var _target = $(ball).attr('class');
        
        $('.' + _target).show();
        ballstart();
    } else {
        $(elem).removeClass('active');
    }
}

//환율 적용 가격
function applyExchangeRate(price, exchangeRate){
	var tmpPrice = 0;
	if(typeof price != "number" && typeof exchangeRate != "number"){
		tmpPrice = 0;
	}else{
		if(exchangeRate == "1"){
			tmpPrice = price;
		}
		// 엔화는 소숫점이 없으므로 1엔단위 반올림
		else if( exchangeRate > 0.07 && exchangeRate < 0.2) {
			tmpPrice = Math.round( price * exchangeRate);
		}
		else {
			tmpPrice = (price * exchangeRate).toFixed(2);
		}
	}
	return tmpPrice;
}

//환율적용가격 KRW로 변경
function applyExchangeRate2(price, exchangeRate){
	var tmpPrice = 0;
	if(typeof price != "number"){
		tmpPrice = 0;
	}
	else {
		tmpPrice = (price / exchangeRate).toFixed(2);
	}
	return tmpPrice;
}

// 반응형 web, mobile 구분
function isResponsiveWebSize () {
	var winW = $(window).width();
	if(winW < 1006){
		return false;
	} else {
		return true;
	}
}

function changeLbsforKg (totweight){
	var tmpWeight = 0;
	tmpWeight = Math.round((totweight * 2.204623)/10);
	tmpWeight = (tmpWeight/100).toFixed(2);
	
	return tmpWeight;
}

function checkPassword (passwd, email, cur_pswd){
	var res = true;
	var num = passwd.search(/[0-9]/g);
	var eng = passwd.search(/[a-z]/ig);
	var pattern = /\s/g;
	var spe = passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

	if(passwd == cur_pswd && cur_pswd != ''){
		return false;
	}
	
	if(passwd.match(pattern)){
		return false;
	}
	
	if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
		return false;
	}
	
	var passwdLength = passwd.length;
	if (parseInt(passwdLength) < 6 || parseInt(passwdLength) > 16){
		return false;
	}
	
	if(passwd.indexOf(email) > -1 && email != ""){
		return false;
	}
	
	return res;
}

/**
 * 이름 마스킹 처리
 * @param usernm
 * @return
 */
function getChangeUserName (usernm)
{
	
	var sb = "";
	
	if (usernm == undefined || usernm == "" ) {
		return "";
	}
	
	switch (usernm.length) {
	case 0 : 
	case 1 :
		sb += usernm ;
		break;
	case 2 : 
		sb += usernm.substring(0, 1) + "*";
		break;
	default :
		sb += usernm.substring(0, 2);
		for (var i = 2; i < usernm.length; i++) {
			sb += "*";
		}
	}
	
	return sb;
};

function goMain(){
	location.href = GLOBAL_WEB_URL + "main.do";
}

function getStrVal(str){

	var rtStr = str;
	if(str == undefined || str == "" || str == null){
		rtStr = "";
	}
	
	return rtStr;
}