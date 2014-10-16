// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-ui-bootstrap
//= require turbolinks
//= require_tree .


var count = 0;

function add() {
	count = count+0.4;
	return count
}


setInterval(window.onload = function() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
	   //document.getElementById("myLink").innerHTML=add();
	   document.getElementById("logo").style.transform = "rotate("+add()+"deg)";
	   document.getElementById("logo").style.webkitTransform = "rotate("+add()+"deg)";
},10);