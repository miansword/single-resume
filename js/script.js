$(function(){
	$(window).load(function(){
	   // $('.page1 .wrap').addClass('active');
	})
	$('.main').onepage_scroll({
		sectionContainer: '.page',
		loop:false,
		beforeMove: function(){
			if($('#myStat1').html()!=''||$('#myStat2').html()||$('#myStat3').html()||$('#myStat4').html()||$('#myStat5').html()||$('#myStat6').html()){
				$('#myStat1').animate({opacity:0},400);
				$('#myStat2').animate({opacity:0},400);
				$('#myStat3').animate({opacity:0},400);
				$('#myStat4').animate({opacity:0},400);
				$('#myStat5').animate({opacity:0},400);
				$('#myStat6').animate({opacity:0},400);
			}
		},
		afterMove: function(index){
			if(index==1){
			}
			else if(index==3){
					$('#myStat1').html('');
					$('#myStat2').html('');
					$('#myStat3').html('');
					$('#myStat4').html('');
					$('#myStat5').html('');
					$('#myStat6').html('');
					if($('#myStat1').html()=='' && $('#myStat2').html()=='' && $('#myStat3').html()=='' && $('#myStat4').html()=='' && $('#myStat5').html()=='' && $('#myStat6').html()==''){
						$('#myStat1').circliful().animate({opacity:1},400);
						$('#myStat2').circliful().animate({opacity:1},400);
						$('#myStat3').circliful().animate({opacity:1},400);
						$('#myStat4').circliful().animate({opacity:1},400);
						$('#myStat5').circliful().animate({opacity:1},400);
						$('#myStat6').circliful().animate({opacity:1},400);
					}
				}
			},
	});
});
//popup
function popup(){
  var _cont = '';
  _cont += "<div class='pop-cover' onclick='popout()'></div>";
  _cont += "<div class='pop-inner' onclick='popout()'>";
  _cont += "<img src='images/qr.jpg'>";
  _cont += "<p>扫描二维码关注我</p>";
  _cont += "</div>";
  $(_cont).appendTo('.page2');
}
function popout(){
  $(".pop-inner").remove();
  $(".pop-cover").remove();
}

if($('#qr-popup').length>=1){
	$('#qr-popup').click(function(){
		$(this).parent().append('<img id="aqr" src="images/webqr.png">');
	})
}
	$(document).on('click','#aqr',function(){
		$(this).remove();
	})