var page_vars = {};

function addHeaderEvt() {

	// 로그아웃
	$("#btn_header_logout, #btn_header_logout_m, #btn_footer_logout").click(function(e) {
		e.preventDefault();

		cmAjax({
			url 	: GLOBAL_WEB_ROOT + "user/lo/user_lo_logout_json.do",
			type	: "post",
			data	: {
			},
			dataType	: "json",
			success		: function(data, textStatus, jqXHR){
				if(data.status == 'succ'){
					document.location.href = GLOBAL_WEB_URL + "main.do";
				} else {
					alert(data.message);
				}
			}
		});
	});
	
	// 로그인
	$("#btn_header_login").click(function(event){
		event.preventDefault();
		WebBodyStart.goLogin();
	});
	
	// 장바구니
	$("#btn_cart1, #btn_cart2").click(function(event){
		event.preventDefault();
		
		getCartListPop();
	});
	
	$("#btn_cart3").click(function(event){
		event.preventDefault();
		
		getCartListPop();
	});
	
	$("#w_current_lang .select_language").click(function(e) {
		var language = $(this).attr("id");
		if(language == ""){
			return false;
		}
		
		try {
			// 언어 클릭이벤트 태깅
			GA_Event("MENU", "LANGUAGE", id.toUpperCase());
		} catch( e) {}
		
		fnChangeLang(language);
	});
	
	// 모바일 언어 변경
	$("#m_current_lang").change(function(e) {
		var language = $(this).val();
		
		if(language == ""){
			return false;
		}
		
		try {
			// 언어 클릭이벤트 태깅
			GA_Event("MENU", "LANGUAGE", language.toUpperCase());
		} catch( e) {}
		
		fnChangeLang(language);
	});

	// 배송지 변경
	$("#w_current_shipping, #m_current_shipping").change(function(e){
		fnChangeShipping($(this).val());
	});
	
	
	var w_current_shipping = $("#w_current_shipping");
	
	if (w_current_shipping.length > 0) {
		w_current_shipping.selectric();
		
		$("#header_ship_select").find(".selectric-scroll").mCustomScrollbar({
			mouseWheelPixels: 150, //스크롤 속도
			advanced:{
				updateOnBrowserResize:true,
				updateOnContentResize:true,
				zIndexBoost:false,
				onDragStart:function() {
					container.mCustomScrollbar("stop");
				},
				callbacks:{
					whileScrolling:function(){
						$(this).parents(".selectric-wrapper").addClass("selectric-open")
					}
				},
			}
		});
	}
	
	
	//검색창 클릭
	$("#top_search_input").click(function() {
		if (!$("#src_pop_div").is(":visible")) { 
			fnTopSearchInit();
			$("#src_pop_div").show();
			//$("#btn_boxDel").show();
		}
		
	});
	//검색창 클릭 _m
	$("#top_search_input_m").click(function() {
		if (!$("#src_pop_div_m").is(":visible")) { 
			//fnTopSearchInit("m");
			$("#src_pop_div_m").show();
			//$("#btn_boxDel").show();
		}
		
	});
	
	//검색어 입력
	$("#top_search_input, #top_search_input_m").on('keyup', function(e) {
	//$("#top_search_input, #top_search_input_m").on('keydown', function(e) {
		var code = e.keyCode;
		if(code == 13) {
			e.preventDefault();
			fnTopSearch("", this.value);
			
		} else {
			fnTopSearchAjax(this.value);
		}
	});

	$("#top_search_input, #top_search_input_m").on('keydown', function(e) {
		var code = e.keyCode;
		if(code == 13) {
			e.preventDefault();
		}
	});
	
	//검색버튼
	$("#top_search_btn").on('click', function() {
		var keyword = $("#top_search_input").val();
		fnTopSearch("", keyword);
	});
	$("#top_search_btn_m").on('click', function() {
		var keyword = $("#top_search_input_m").val();
		fnTopSearch("", keyword);
	});
	
	//검색삭제
	$("#btn_boxDel").on('click', function() {
		var $keyword = $("#top_search_input");

		if ($keyword.val() != "" && $("#src_pop2_div").is(":visible")) {
			$keyword.val('');
			fnTopSearchInit();
			
		} else {
			$("#src_pop_div").hide();
		}
	});
	
	//자동완성 마우스오버
	$("#ac_list_ul").on('mouseover','li',function(){
		var h = "";
		if (this.id != "") {
			h = "<a href=\"javascript:WebBodyStart.getPrdView('"+this.id+"');\"><img src=\""+$(this).attr("name")+"\" alt=\"\"><p>"+this.title+"</p></a>";
		}
		$("#ac_list_img").html(h);
	});
}

// 검색 메인 페이지로 이동
function fnTopSearch(type, keyword, colorcd) {
	
	$("#i_sTopSearchType").val(type);
	
	if(type == "color"){
		$("#i_sTopColorcd").val(colorcd);
	} else {
		$("#i_sTopColorcd").val("");
	}
	
	esp_storage.removeItem("esp_shop.sessionStorage.preUrl");
	
	var keyword  =  encodeURIComponent(fnReplaceAll(removeExp($.trim(keyword))," ","**"));
	//var keyword  =  $.trim(keyword);
	var frm = $("#sch_frm");
	frm.find("#i_sKeyword").val(keyword);
	frm[0].action = GLOBAL_WEB_ROOT + "search/search_main.do";
	frm.submit();
	//document.location.href = GLOBAL_WEB_ROOT + "/search/search_main.do?i_sKeyword="+keyword;
}

// 검색레이어 초기 세팅
function fnTopSearchInit(m) {
	var _m = m == undefined ? "" : "_"+m;
	
	cmAjax({
		url : GLOBAL_WEB_ROOT + "search/search_header_init_ajax.do"
		, type : "POST"
		, data : {}
		, dataType : "json"
		, success : function(data){
			if (data.status == "succ") {
				var html = "";
				var rkList = data.object.recentKeywordList;
				var rkLen = rkList != undefined ? rkList.length : 0;
				var pkList = data.object.popularKeywordList;
				var pkLen = pkList != undefined ? pkList.length : 0;
				var pcList = data.object.popularColorList;
				var pcLen = pcList != undefined ? pcList.length : 0;
				
				//최근검색어
				if (rkLen > 0) {
					html = "";
					for(var i=0; i < rkLen; i++) {
						var obj = rkList[i];
						html += "<li><a href=\"javascript:fnTopSearch('recent', '" + obj.v_keyword + "');\">" + obj.v_keyword + "</a><button type=\"button\" onclick=\"fnTopDeleteRecentWord(this,'" + obj.v_keyword + "')\">삭제</button></li>";
					}
					$("#rk_list_ul"+ _m).html(html);
					$("#h_sch_del_btn"+ _m).show();
				} else {
					if (m == "m") {
						$("#rk_list_ul"+ _m).html("<li class=\"no_list\">" + header_page_message.no_recent_search_words + "</li>");//최근 검색한 내역이 없습니다.
					} else {
						$("#rk_list_ul").html(header_page_message.no_recent_search_words);//최근 검색한 내역이 없습니다.
					}
					$("#h_sch_del_btn"+ _m).hide();
				}
				
				//인기검색어
				if (pkLen > 0) {
					html = "";
					for(var i=0; i < pkLen; i++) {
						var obj = pkList[i];
						html += "<li><a href=\"javascript:fnTopSearch('popword', '" + obj.v_keyword + "');\">" + obj.v_keyword + "</a></li>";
					}
					$("#pk_list_ul"+ _m).html(html);
					$("#pk_section_dl"+ _m).show();
				} else {
					$("#pk_section_dl"+ _m).hide();
				}
	
				//컬러로 검색
				if (pcLen > 0) {
					html = "";
					var cls_line = "";
					for(var i=0; i < pcLen; i++) {
						var obj = pcList[i];
						
						if (obj.v_buffer1 == undefined || obj.v_buffer1 == 'undefined' || obj.v_buffer1 == "#FFFFFF") {
							cls_line = "line";
						}
						
						html += "<li>";
						html += "<a href=\"javascript:fnTopSearch('color', '" + obj.v_keyword + "','" + obj.v_sub_code1 + "');\"><span class=\""+ cls_line +"\" style=\"background:" + obj.v_buffer1 + "\"></span></a>";
						html += "<p>" + obj.v_keyword + "</p>";
						html += "</li>";
					}
					$("#pc_list_ul"+ _m).html(html);
					$("#pc_section_dl"+ _m).show();
				} else {
					$("#pc_section_dl"+ _m).hide();
				}
				
				if ( !$("#src_pop_div"+ _m).is(":visible") ) {
					$("#src_pop2_div"+ _m).hide();
					$("#src_pop_div").show();
				}
			}
		}
	});
}

// 검색레이어 실시간 노출
function fnTopSearchAjax(keyword) {
	//var keyword  =  $.trim(keyword);
	var keyword  =  encodeURIComponent(fnReplaceAll(removeExp($.trim(keyword))," ","**"));
	var _m = "";
	if ($("#search_moLayer").is(":visible")) { //모바일UI
		_m = "_m";
	}
	
	if (keyword != undefined && keyword != "") {
		cmAjax({
			url : GLOBAL_WEB_ROOT + "search/search_header_ajax.do"
			, type : "POST"
			, data : {acKeyword : keyword}
			, dataType : "json"
			, success : function(data){
				if (data.status == "succ") {
					var acList = data.object.autoCompList;
					var acLen = acList != undefined ? acList.length : 0;
					
					if (acLen > 0) {
					
						html = "";
						for(var i=0; i < acLen; i++) {
							var obj = acList[i];
							html += "<li id=\""+ obj.v_productcd +"\" title=\"" + obj.v_keyword_orig + "\" name=\""+obj.v_img_path+"\"><a href=\"javascript:fnTopSearch('','" + obj.v_keyword_orig + "');\">" + obj.v_keyword + "</a></li>";
							
							if (i == 0 && _m == "" && obj.v_productcd != "") { //PC만 적용
								var h = "<a href=\"javascript:WebBodyStart.getPrdView('"+obj.v_productcd+"');\"><img src=\""+obj.v_img_path+"\" alt=\"\"><p>"+obj.v_keyword+"</p></a>";
								$("#ac_list_img").html(h);
							}
						}
						$("#ac_list_ul"+ _m).html(html);
						
						if ( !$("#src_pop2_div"+ _m).is(":visible") ) {
							$("#src_pop_div"+ _m).hide();
							$("#src_pop2_div"+ _m).show();
						}
					} else {
						$("#src_pop2_div"+ _m).hide();
						$("#src_pop_div"+ _m).show();
					}
				}
			}
		});
	} else {
		$("#src_pop2_div"+ _m).hide();
		$("#src_pop_div"+ _m).show();
	}
}

function fnChangeShipping(shippingcd) {

	cmAjax({
		url : GLOBAL_WEB_ROOT + "comm/comm_chg_shipping_ajax.do"
		, type : "post"
		, data : {i_sChgLocationcd : shippingcd}
		, dataType : "json"
		, success : function(data, textStatus){
			if (data.status == "succ") {
				var frm = $("#frm_reload");
				frm.submit();
			}
			else {
				showMessageBox({
					message : data.message
				});
			}
		}
	});
}

function fnChangeLang(language){

	var frm = $("#frm_reload");
	var	url = frm.attr("action");
	var	lang = "/"+language+"/";
	
	if(language == "ko"){
		$(".current_lang").text("KOR");
	}else{
		$(".current_lang").text("ENG");
	}
	
	if( /(en|ko).*.do/.test(url) ){
		url	=	url.replace("/en/", lang);
		url	=	url.replace("/ko/", lang);
		
		$("#frm_reload").attr("action", url).submit();
	} else {
		document.location.href = GLOBAL_WEB_URL + language+"/main.do";
	}
}

function fnFooterSitemap() {
	
	var simtemap = $("#pop_modal_site_map");
	
	if (simtemap.length > 0) {
		modalPopup("#pop_modal_site_map");
		return;
	}
	
	cmAjax({
		url : GLOBAL_WEB_ROOT + "html/html_footer_sitemap_ajax.do"
		, type : "post"
		, data : {}
		, dataType : "html"
		, success : function(html){
			$("#footer_sitemap").html(html);
			modalPopup("#pop_modal_site_map");
		}
	});
	
}

function fnTermPop(type, lang) {
	
	cmAjax({
		url : GLOBAL_WEB_ROOT + "html/html_" + type + "_" + lang  +"_ajax.do"
		, type : "post"
		, data : {}
		, dataType : "html"
		, success : function(html){
			$("#footer_terms_pop").html(html);
			modalPopup("#pop_modal_term");
		}
	});
	
}

function fnTopDeleteRecentWordAll() {
	$("#rk_list_ul").empty().html(header_page_message.no_recent_search_words);//최근 검색한 내역이 없습니다.
	fnTopDeleteRecentWordAjax("ALL^^");
}

function fnTopDeleteRecentWord(obj, keyword) {
	$(obj).parent("li").remove();
	fnTopDeleteRecentWordAjax(keyword);
}

function fnTopDeleteRecentWordAjax(keyword) {
	cmAjax({
		url : GLOBAL_WEB_ROOT + "search/search_delete_recent_keyword_ajax.do"
		, type : "post"
		, data : {i_sRecentKeyword : keyword}
		, dataType : "json"
		, success : function(data, textStatus){
			if (data.status == "succ") {
			}
		}
	});
}

function HandleGoogleApiLibrary() {
	gapi.load('client:auth2',  {
		callback: function() {
			gapi.client.init({
		    	apiKey: 'AIzaSyCFSiW-xRSfMC2iN4l7PsfE3HpQ1PrG9AA', //espoir 계정
		    	clientId: '479327798857-elobl6srd3a8e2u2ioimjnjr2gn85cse.apps.googleusercontent.com',		    	
		    	scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
			}).then(
				function(success) {
				}, 
				function(error) {
			  	}
			);
		},
		onerror: function() {
		}
	});
}

$(function(){
	addHeaderEvt();
	
	//모바일 검색아이콘(돋보기) 클릭
	$(".m_sch").on("click",function(){
		$(".search_moLayer").stop().animate({"left":"0"},100);
		fnTopSearchInit("m");
		//IncRecomItemTopSearch.fn.setRecomItem("SEARCH");
		IncRecomItemTopSearch.init(); //검색팝업 추천영역
	});
	$(".src_close").on("click",function(){
		$(".search_moLayer").stop().animate({"left":"100%"},100);
		$("#src_pop_div_m").hide();
	});
	
	$(".menu, .m_depth2, #select_dep_mCSc>li").on("click",function(){
		esp_storage.removeItem("esp_shop.sessionStorage.preUrl");
	});
});