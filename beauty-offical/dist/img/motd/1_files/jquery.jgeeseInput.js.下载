/**
 * @date : 2016. 05. 29.
 * @author : by jgeese
 * @email : jgeese@naver.com
 * @jQuery : jquery-1.6.4.min.js
 **/

(function ($, G) {
	function K() {
	}
	$.extend(K.prototype, {
		_addEvent : function (p_target, p_act) {
			
			var act = p_act == undefined || typeof p_act != "string" ? "" : p_act.toLowerCase();
			var target = $(p_target);
			var type = target.attr("type").toLowerCase();
			
			if (act == "refresh") {
				this._refresh(target, type);
			}
			else {
				if (type == "radio") {
					this._addRadioEvent(target);
				}
				else if (type == "checkbox"){
					this._addCheckboxEvent(target);
				}
			}
		},
		_refresh : function (target, type) {

			if (type == "radio") {
				
				var name = target.attr("name");
				var frm = target.parents("form").eq(0);
				var arr_rd;
				var len;
				
				if (frm != undefined) {
					arr_rd = frm.find("input[name='"+ name +"']");
				}
				else {
					arr_rd = $("input[name='"+ name +"']");
				}
				
				len = arr_rd.length;
				
				if (len > 0) {
					var is_checked, is_disabled, l, t_id;
					for (var i = 0; i < len; i++) {
						t_id = arr_rd.eq(i).attr("id");
						is_checked = arr_rd.eq(i).is(":checked");
						is_disabled = arr_rd.eq(i).is(":disabled");
						l = arr_rd.eq(i).next("label[for='"+ t_id +"']").eq(0);
						
						l.removeClass("radio_chk_disabled").removeClass("radio_disabled").removeClass("radio_checked");
						
						if (is_disabled && is_checked) {
							l.addClass("radio_chk_disabled");
						}
						else if (is_disabled) {
							l.addClass("radio_disabled");
						}
						else if (is_checked) {
							l.addClass("radio_checked");
						}
					}
				}
			}
			else if (type == "checkbox"){
				var t_id = target.attr("id");
				var is_checked = target.is(":checked");
				var is_disabled = target.is(":disabled");
				var l = target.next("label[for='"+ t_id +"']").eq(0);
				
				l.removeClass("checkbox_chk_disabled").removeClass("checkbox_disabled").removeClass("checkbox_checked");
				
				if (is_disabled && is_checked) {
					l.addClass("checkbox_chk_disabled");
				}
				else if (is_disabled) {
					l.addClass("checkbox_disabled");
				}
				else if (is_checked) {
					l.addClass("checkbox_checked");
				}
			}
		},
		_addCheckboxEvent : function (target) {
			
			if (target.hasClass("jgeeseInput_init")) {
				return;
			}
			
			target.addClass("jgeeseInput_init");
			
			var id = target.attr("id");
			var span = $("<span/>").addClass("jgeeseInput").addClass("checkbox_box");
			var label = $("label[for='"+id+"']");
			var is_checked = target.is(":checked");
			var is_disabled = target.is(":disabled");
			
			if (is_disabled && is_checked) {
				label.addClass("checkbox_chk_disabled").removeClass("checkbox_disabled").removeClass("checkbox_checked");
			}
			else if (is_disabled) {
				label.addClass("checkbox_disabled").removeClass("checkbox_chk_disabled").removeClass("checkbox_checked");
			}
			else if (is_checked) {
				label.addClass("checkbox_checked").removeClass("checkbox_chk_disabled").removeClass("checkbox_disabled");;
			}
			else {
				label.removeClass("checkbox_chk_disabled").removeClass("checkbox_disabled").removeClass("checkbox_checked");
			}
			
			span.insertBefore(target);
			//span.width(label.width() + 50);
			
			target.appendTo(span);
			label.appendTo(span);
			
			target.click(function(event) {
				
				var t = $(this);
				var frm = t.parents("form").eq(0);
				var is_checked = t.is(":checked");
				var name = t.attr("name");
				var id = t.attr("id");
				var arr_rd;
				
				if (frm != undefined) {
					arr_rd = frm.find("input[name='"+ name +"']");
				}
				else {
					arr_rd = $("input[name='"+ name +"']");
				}
				
				var t_id = target.attr("id");
				var l = target.next("label[for='"+ t_id +"']").eq(0);
				
				if (is_checked) {
					l.addClass("checkbox_checked");
				}
				else {
					l.removeClass("checkbox_checked");
				}
			});
			
		},
		_addRadioEvent : function (target) {
			
			if (target.hasClass("jgeeseInput_init")) {
				return;
			}
			
			target.addClass("jgeeseInput_init");
			
			var id = target.attr("id");
			var span = $("<span/>").addClass("jgeeseInput").addClass("radio_box");
			var label = $("label[for='"+id+"']");
			var is_checked = target.is(":checked");
			var is_disabled = target.is(":disabled");
			
			if (is_disabled && is_checked) {
				label.addClass("radio_chk_disabled").removeClass("radio_disabled").removeClass("radio_checked");
			}
			else if (is_disabled) {
				label.addClass("radio_disabled").removeClass("radio_chk_disabled").removeClass("radio_checked");
			}
			else if (is_checked) {
				label.addClass("radio_checked").removeClass("radio_chk_disabled").removeClass("radio_disabled");
			}
			else {
				label.removeClass("radio_chk_disabled").removeClass("radio_disabled").removeClass("radio_checked");
			}
			
			span.insertBefore(target);
//			span.width(label.width() + 50);
			
			target.appendTo(span);
			label.appendTo(span);
			
			target.click(function(event) {
				
				var t = $(this);
				var frm = t.parents("form").eq(0);
				var is_checked = t.is(":checked");
				var name = t.attr("name");
				var id = t.attr("id");
				var arr_rd, l, t_id;
				
				if (frm != undefined) {
					arr_rd = frm.find("input[name='"+ name +"']");
				}
				else {
					arr_rd = $("input[name='"+ name +"']");
				}
				
				var len = arr_rd.length;
				
				for (var i = 0; i < len; i++) {
					t_id = arr_rd.eq(i).attr("id");
					
					l = arr_rd.eq(i).next("label[for='"+ t_id +"']").eq(0);
					
					if (t_id == id) {
						l.addClass("radio_checked");
					}
					else {
						l.removeClass("radio_checked");
					}
				}
			});
		}
		
	});
	
	
	$.fn.jgeeseInput = function (type) {
		if (!this.length) return this;
		
		return this.each(function () {
			$.jgeeseInput._addEvent(this, type);
		});
	};
	
	$.jgeeseInput = new K;
	$.jgeeseInput.version = "1.0";
	
})(jQuery);