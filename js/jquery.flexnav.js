// Generated by CoffeeScript 1.6.1

/*
	FlexNav.js 0.7

	Copyright 2013, Jason Weaver http://jasonweaver.name
	Released under the WTFPL license
	http://sam.zoy.org/wtfpl/

//
*/

(function ($) {
// Add drupal 7 code.
Drupal.behaviors.flexnav = {
  attach:function (context, settings) {
// End drupal calls.

// Generated by CoffeeScript 1.6.1
/*
  FlexNav.js 0.7

  Copyright 2013, Jason Weaver http://jasonweaver.name
  Released under the WTFPL license
  http://sam.zoy.org/wtfpl/

//
*/$.fn.flexNav=function(e){var t,n,r,i,s;s=$.extend({animationSpeed:100},e);t=$(this);r=!1;t.find("li").each(function(){if($(this).has("ul").length)return $(this).addClass("item-with-ul").find("ul").hide()});t.data("breakpoint")&&(n=t.data("breakpoint"));i=function(){if($(window).width()<=n){t.removeClass("lg-screen").addClass("sm-screen");$(".one-page li a").on("click",function(){return t.removeClass("show")});return $(".item-with-ul").off()}t.removeClass("sm-screen").addClass("lg-screen");t.removeClass("show");return $(".item-with-ul").on("mouseenter",function(){return $(this).find(">ul").addClass("show").stop(!0,!0).slideDown(s.animationSpeed)}).on("mouseleave",function(){return $(this).find(">ul").removeClass("show").stop(!0,!0).slideUp(s.animationSpeed)})};$(".item-with-ul, .menu-button").append('<span class="touch-button"><i class="navicon">&#9660;</i></span>');$(".menu-button, .menu-button .touch-button").on("touchstart click",function(e){e.preventDefault();e.stopPropagation();if(r===!1){t.addClass("show");return r=!0}if(r===!0){t.removeClass("show");return r=!1}});$(".touch-button").on("touchstart click",function(e){var n;e.preventDefault();e.stopPropagation();n=$(this).parent(".item-with-ul").find(">ul");t.hasClass("lg-screen")===!0&&$(this).parent(".item-with-ul").siblings().find("ul.show").removeClass("show").hide();if(n.hasClass("show")===!0)return n.removeClass("show").slideUp(s.animationSpeed);if(n.hasClass("show")===!1)return n.addClass("show").slideDown(s.animationSpeed)});$(".item-with-ul *").focus(function(){$(this).parent(".item-with-ul").parent().find(".open").not(this).removeClass("open").hide();return $(this).parent(".item-with-ul").find(">ul").addClass("open").show()});i();return $(window).on("resize",i)}



}}})
(jQuery);
