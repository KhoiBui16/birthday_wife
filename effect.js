$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var balloonsAreFlying = false;
		var balloonsAreArranged = false;
		var balloonSelectors = ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8'];

		function controlSafeBottom() {
			return ($('.navbar-fixed-bottom').outerHeight() || 0) + 12;
		}

		function rowPosition(index, count, balloonWidth) {
			var edgeInset = Math.max(4, balloonWidth * 0.24);
			var availableSpace = Math.max(0, $(window).width() - (2 * edgeInset) - (count * balloonWidth));
			var gap = count > 1 ? availableSpace / (count - 1) : 0;
			return Math.min(
				$(window).width() - balloonWidth - edgeInset,
				edgeInset + (index * (balloonWidth + gap))
			);
		}

		function placeBalloonsAlongBottom() {
			var $balloons = $(balloonSelectors.join(','));
			var balloonWidth = $balloons.first().outerWidth() || 0;
			$balloons.each(function(index) {
				$(this).stop(true).css({
					top: 'auto',
					left: rowPosition(index, $balloons.length, balloonWidth),
					bottom: controlSafeBottom()
				});
			});
		}

		function randomBalloonTarget($balloon) {
			var tiltMargin = $(window).width() <= 640 ? 4 : Math.ceil($balloon.outerWidth() * 0.22);
			var minLeft = tiltMargin;
			var maxLeft = Math.max(minLeft, $(window).width() - $balloon.outerWidth() - tiltMargin);
			var minBottom = controlSafeBottom();
			var maxBottom = Math.max(minBottom, $(window).height() - $balloon.outerHeight() - tiltMargin - 12);

			return {
				left: minLeft + (Math.random() * (maxLeft - minLeft)),
				bottom: minBottom + (Math.random() * (maxBottom - minBottom))
			};
		}

		function loopBalloon(selector) {
			var $balloon = $(selector);
			if (!balloonsAreFlying || !$balloon.length) {
				return;
			}

			$balloon.animate(randomBalloonTarget($balloon), 9000, function() {
				loopBalloon(selector);
			});
		}

		function arrangeBirthdayBalloons(animate) {
			var $balloons = $('#b11,#b22,#b33,#b44,#b55,#b66,#b77,#b88');
			if (!$balloons.length) {
				return;
			}

			var balloonWidth = $balloons.first().outerWidth() || 0;
			var banner = $('.bannar')[0];
			var bannerBottom = banner ? banner.getBoundingClientRect().bottom : 0;
			var targetTop = Math.max(88, bannerBottom + 8);
			$balloons.each(function(index) {
				var position = {
					top: targetTop,
					left: rowPosition(index, $balloons.length, balloonWidth),
					bottom: 'auto'
				};
				if (animate) {
					$(this).stop(true).animate(position, 500);
				} else {
					$(this).stop(true).css(position);
				}
			});
		}
		if (window.location.hash === '#photos') {
			$('.container').show();
			$('body').addClass('peach peach-after');
			$('.photo-stage').addClass('photo-stage-show');
			$('.photo-note').addClass('photo-note-show');
			$('#turn_on').hide();
			$('#cake_fadein').show();
		}
		$(window).resize(function(){
			if (balloonsAreArranged) {
				arrangeBirthdayBalloons(false);
			} else if (balloonsAreFlying) {
				$(balloonSelectors.join(',')).stop(true);
				placeBalloonsAlongBottom();
				$.each(balloonSelectors, function(_, selector) {
					loopBalloon(selector);
				});
			}
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		balloonsAreFlying = true;
		placeBalloonsAlongBottom();
		$.each(balloonSelectors, function(_, selector) {
			loopBalloon(selector);
		});
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#photos_coming').fadeIn('slow');
		});
	});	

	$('#photos_coming').click(function(){
		$('.photo-stage').addClass('photo-stage-show');
		$('.photo-note').addClass('photo-note-show');
		$(this).fadeOut('slow').delay(9000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.photo-note').fadeOut('slow');
		$('.photo-stage').fadeOut('slow');
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		balloonsAreFlying = false;
		balloonsAreArranged = true;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop(true);
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('.balloons').addClass('balloons-arranged').css('opacity','0.9');
		arrangeBirthdayBalloons(true);
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');
