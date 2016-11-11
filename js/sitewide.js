			function viewport() {
				var e = window, a = 'inner';
				if (!('innerWidth' in window)) {
					a = 'client';
					e = document.documentElement || document.body;
				}
				return { width: e[a + 'Width'], height: e[a + 'Height'] };
			}

			$(function () {

				$('#menu-toggle').click(function () {

					if ($("#panel-menu").css("top") == "-1000px") {
						$("#panel-menu").css("top", "0px");
						$(this).toggleClass('open');
						//$("#menu-label").css("position", "fixed");
						//$("#menu-toggle").css("position", "fixed");
					} else if ($("#panel-menu").css("top") == "0px") {
						$("#panel-menu").css("top", "-1000px");
						$(this).toggleClass('open');
						//$("#menu-label").css("position", "absolute");
						//$("#menu-toggle").css("position", "absolute");
					}

				})

				$('iframe[src*="vimeo.com"]').each(function() {
			       $(this).wrap('<div class="videoWrapper"></div>');
			    }); 

			});
			
			$(window).scroll(function () {

				if (viewport().width > 1023) {

					if ($(document).scrollTop() > 236) { 

						$("#panel-inside-menu").css({
							"position": "fixed",
							"top": "0"
						});

					} else {

						$("#panel-inside-menu").css({
							"position": "absolute",
							"top": "236px"
						});

					}
				} else {

					$("#panel-inside-menu").css({
						"position": "relative",
						"top": "0px"
					});

				}

			});

			$(window).resize(function () {
				
				if (viewport().width > 1023) {

					if ($(document).scrollTop() > 236) {

						$("#panel-inside-menu").css({
							"position": "fixed",
							"top": "0"
						});

					} else {

						$("#panel-inside-menu").css({
							"position": "absolute",
							"top": "236px"
						});

					}
				} else {

					$("#panel-inside-menu").css({
						"position": "relative",
						"top": "0px"
					});

				}

			});



			// MAILCHIMP



			var fnames = new Array();
			var ftypes = new Array();
			fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; fnames[2] = 'LNAME'; ftypes[2] = 'text';
			try {
				var jqueryLoaded = jQuery;
				jqueryLoaded = true;
			} catch (err) {
				var jqueryLoaded = false;
			}
			var head = document.getElementsByTagName('head')[0];
			if (!jqueryLoaded) {
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js';
				head.appendChild(script);
				if (script.readyState && script.onload !== null) {
					script.onreadystatechange = function () {
						if (this.readyState == 'complete') mce_preload_check();
					}
				}
			}
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'http://downloads.mailchimp.com/js/jquery.form-n-validate.js';
			head.appendChild(script);
			var err_style = '';
			try {
				err_style = mc_custom_error_style;
			} catch (e) {
				err_style = '#mc_embed_signup input.mce_inline_error{border-color:#6B0505;} #mc_embed_signup div.mce_inline_error{margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff;}';
			}
			var head = document.getElementsByTagName('head')[0];
			var style = document.createElement('style');
			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = err_style;
			} else {
				style.appendChild(document.createTextNode(err_style));
			}
			head.appendChild(style);
			setTimeout('mce_preload_check();', 250);

			var mce_preload_checks = 0;
			function mce_preload_check() {
				if (mce_preload_checks > 40) return;
				mce_preload_checks++;
				try {
					var jqueryLoaded = jQuery;
				} catch (err) {
					setTimeout('mce_preload_check();', 250);
					return;
				}
				try {
					var validatorLoaded = jQuery("#fake-form").validate({});
				} catch (err) {
					setTimeout('mce_preload_check();', 250);
					return;
				}
				mce_init_form();
			}
			function mce_init_form() {
				jQuery(document).ready(function ($) {
					var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function () { }, onfocusout: function () { }, onblur: function () { } };
					var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
					$("#mc-embedded-subscribe-form").unbind('submit');//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator
					options = {
						url: 'http://praxislabs.us1.list-manage.com/subscribe/post-json?u=ea4e98d3eac7dbe9810c0b0af&id=3bdc744d17&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
						success: mce_success_cb
					};
					$('#mc-embedded-subscribe-form').ajaxForm(options);


				});
			}
			function mce_success_cb(resp) {
				$('#mce-success-response').hide();
				$('#mce-error-response').hide();
				if (resp.result == "success") {
					$(".mc-field-group-success").show();
					$(".mc-field-group").hide();
				} else {
					if (resp.msg.indexOf("already subscribed") !== -1) {
						
						alert("This email is already subscribed.");

					}else{
			
						alert("Please enter a valid email address.");

					}

				}
			}
