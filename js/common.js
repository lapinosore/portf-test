$(function(){
      $(".player").mb_YTPlayer();
    });

$(document).ready(function() {
var promopage = document.getElementById('promo-page');
var aboutpage = document.getElementById('about-page');

$('#promo-page-btn').click(function(){
	promopage.style.opacity = "0";
	setTimeout(hide_promo, 600)
});
function hide_promo(){
	promopage.style.display = "none";
	aboutpage.style.display = "block";
	setTimeout(show_about, 600)
}
function show_about(){
	aboutpage.style.opacity = "1";
}
});
