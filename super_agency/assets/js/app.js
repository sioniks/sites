$(document).ready(function() {

	AOS.init({
		duration: 1200
	});

	$('.slider').slick({
		dots: false,
		arrows: false,
		//autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.left').click(function(){
		$('.slider').slick('slickPrev');
	});
	$('.right').click(function(){
		$('.slider').slick('slickNext');
	});

	$(window).scroll(function(){
		if ( $('.number1').isOnScreen()) {
			// The element is visible, do something
			$('#number1').animate({ num: 150 - 3/* - начало */ }, {
				duration: 1500,
				step: function (num){
					this.innerHTML = (num + 3) .toFixed(0)/* + '%'*/
				}
			});

			$('#number2').animate({ num: 5000 - 3/* - начало */ }, {
				duration: 2500,
				step: function (num){
					this.innerHTML = (num + 3) .toFixed(0)/* + '%'*/
				}
			});

			$('#number3').animate({ num: 1000 - 3/* - начало */ }, {
				duration: 2000,
				step: function (num){
					this.innerHTML = (num + 3) .toFixed(0)/* + '%'*/
				}
			});

			$('#number4').animate({ num: 3000000 - 3/* - начало */ }, {
				duration: 2500,
				step: function (num){
					this.innerHTML = (num + 3) .toFixed(0)/* + '%'*/
				}
			});
		}
	});



//------------Анимаия белой планеты
	var s = $(".dev-planet");
	s.addClass("hidden").viewportChecker({
		classToAdd: 'visible orbit',
		offset: 50
	});
	s.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function() {
			$( ".sub1" ).show();
			$( ".sub2" ).show();
		});

//------------Анимация красной планеты
	var s2 = $(".adv-planet");
	s2.addClass("hidden").viewportChecker({
		classToAdd: 'visible orbit2',
		offset: 70
	});
	s2.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function() {
			$( ".sub3" ).show();
		});

    var location = '/' + window.location.href.split('/').pop();
    var cur_url = './' + location.split('/').pop();
    $("#menu li").each(function () {
        var link = $(this).find('a').attr('href');
        if (cur_url == link)
        {
            $(this).find('a').addClass('current');
        }
    });


	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
		});
		 
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	if(document.getElementById('c')){
		var ctx = c.getContext("2d"),
			w = c.width = window.innerWidth,
			h = c.height = window.innerHeight;
		/*window.addEventListener("resize", function(){
			w = ctx.width = window.innerWidth;
			h = ctx.height = window.innerHeight;
		});*/

		/*window.addEventListener("orientationchange", function() {
		    if (screen.orientation.angle == (90 || -90)) {
		    	w = ctx.width = window.innerWidth,
				h = ctx.height = window.innerHeight;
				debugger;
		    	console.log(w);
		    }
		    
		});*/

		function rand2(n){
			return Math.random()*n;
		}

		stars = new Array(1000).fill().map(
			function(num) {
				return {r: rand2(w*2), s: rand2(0.003), a: rand2(Math.PI*2)};
			}
		);

		function loop(){
			ctx.fillStyle = "rgba(0,7,29,.1)";
			ctx.fillRect(0,0,w,h);
			stars.forEach(function(e,i,stars){
				e.a+=e.s;
				ctx.beginPath();
				ctx.arc(Math.cos(e.a)*e.r + w/10, Math.sin(e.a)*e.r + h/7, 1,0, Math.PI*2);
				ctx.closePath();
				ctx.fillStyle = "white";
				ctx.fill();
			});
			requestAnimationFrame(loop);
		};

		requestAnimationFrame(loop);

		
		
	};


	
	

});
(function($) {
	$.fn.isOnScreen = function(x_offset, y_offset) {
		if(x_offset == null || typeof x_offset == 'undefined') x_offset = 1;
		if(y_offset == null || typeof y_offset == 'undefined') y_offset = 1;

		var win = $(window),
			viewport = {
				top : win.scrollTop(),
				left : win.scrollLeft()
			},
			height = this.outerHeight(),
			width = this.outerWidth(),
			bounds = this.offset(),
			visible,
			deltas;

		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		if(!width || !height) return false;

		bounds.right = bounds.left + width;
		bounds.bottom = bounds.top + height;

		visible = (
			!(viewport.right < bounds.left ||
			viewport.left > bounds.right ||
			viewport.bottom < bounds.top ||
			viewport.top > bounds.bottom)
		);

		if(!visible) return false;

		deltas = {
			top:    Math.min(1, (bounds.bottom - viewport.top) / height),
			bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
			left:   Math.min(1, (bounds.right - viewport.left) / width),
			right:  Math.min(1, (viewport.right - bounds.left) / width)
		};

		return (deltas.left * deltas.right) >= x_offset && (deltas.top * deltas.bottom) >= y_offset;
	};

	$(".toggle__menu").click(function() {
      $(".sandwich").toggleClass("active");
    });

    $(".header-nav ul a").click(function() {
        $(".header-nav").fadeOut(600);
        $(".sandwich").toggleClass("active");
    });
    
    $(".toggle__menu").click(function () {
        if ($(".header-nav").is(":visible")) {
            $(".header-nav").fadeOut(600);
            
        } else {
            $(".header-nav").fadeIn(600);
            
        };
        
    }); 
})(jQuery);





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRBT1MuaW5pdCh7XHJcblx0XHRkdXJhdGlvbjogMTIwMFxyXG5cdH0pO1xyXG5cclxuXHQkKCcuc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0ZG90czogZmFsc2UsXHJcblx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0Ly9hdXRvcGxheTogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDMwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnJlYWtwb2ludDogMTAyNCxcclxuXHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDMsXHJcblx0XHRcdFx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdGRvdHM6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRicmVha3BvaW50OiA2MDAsXHJcblx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMixcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnJlYWtwb2ludDogNDgwLFxyXG5cdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcblx0XHRcdC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcblx0XHRdXHJcblx0fSk7XHJcblx0JCgnLmxlZnQnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnNsaWRlcicpLnNsaWNrKCdzbGlja1ByZXYnKTtcclxuXHR9KTtcclxuXHQkKCcucmlnaHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLnNsaWRlcicpLnNsaWNrKCdzbGlja05leHQnKTtcclxuXHR9KTtcclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdFx0aWYgKCAkKCcubnVtYmVyMScpLmlzT25TY3JlZW4oKSkge1xyXG5cdFx0XHQvLyBUaGUgZWxlbWVudCBpcyB2aXNpYmxlLCBkbyBzb21ldGhpbmdcclxuXHRcdFx0JCgnI251bWJlcjEnKS5hbmltYXRlKHsgbnVtOiAxNTAgLSAzLyogLSDQvdCw0YfQsNC70L4gKi8gfSwge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAxNTAwLFxyXG5cdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uIChudW0pe1xyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSAobnVtICsgMykgLnRvRml4ZWQoMCkvKiArICclJyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCQoJyNudW1iZXIyJykuYW5pbWF0ZSh7IG51bTogNTAwMCAtIDMvKiAtINC90LDRh9Cw0LvQviAqLyB9LCB7XHJcblx0XHRcdFx0ZHVyYXRpb246IDI1MDAsXHJcblx0XHRcdFx0c3RlcDogZnVuY3Rpb24gKG51bSl7XHJcblx0XHRcdFx0XHR0aGlzLmlubmVySFRNTCA9IChudW0gKyAzKSAudG9GaXhlZCgwKS8qICsgJyUnKi9cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnI251bWJlcjMnKS5hbmltYXRlKHsgbnVtOiAxMDAwIC0gMy8qIC0g0L3QsNGH0LDQu9C+ICovIH0sIHtcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRzdGVwOiBmdW5jdGlvbiAobnVtKXtcclxuXHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKG51bSArIDMpIC50b0ZpeGVkKDApLyogKyAnJScqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcjbnVtYmVyNCcpLmFuaW1hdGUoeyBudW06IDMwMDAwMDAgLSAzLyogLSDQvdCw0YfQsNC70L4gKi8gfSwge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAyNTAwLFxyXG5cdFx0XHRcdHN0ZXA6IGZ1bmN0aW9uIChudW0pe1xyXG5cdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSAobnVtICsgMykgLnRvRml4ZWQoMCkvKiArICclJyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS3QkNC90LjQvNCw0LjRjyDQsdC10LvQvtC5INC/0LvQsNC90LXRgtGLXHJcblx0dmFyIHMgPSAkKFwiLmRldi1wbGFuZXRcIik7XHJcblx0cy5hZGRDbGFzcyhcImhpZGRlblwiKS52aWV3cG9ydENoZWNrZXIoe1xyXG5cdFx0Y2xhc3NUb0FkZDogJ3Zpc2libGUgb3JiaXQnLFxyXG5cdFx0b2Zmc2V0OiA1MFxyXG5cdH0pO1xyXG5cdHMub25lKCd3ZWJraXRBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBtc0FuaW1hdGlvbkVuZCBhbmltYXRpb25lbmQnLFxyXG5cdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoIFwiLnN1YjFcIiApLnNob3coKTtcclxuXHRcdFx0JCggXCIuc3ViMlwiICkuc2hvdygpO1xyXG5cdFx0fSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLdCQ0L3QuNC80LDRhtC40Y8g0LrRgNCw0YHQvdC+0Lkg0L/Qu9Cw0L3QtdGC0YtcclxuXHR2YXIgczIgPSAkKFwiLmFkdi1wbGFuZXRcIik7XHJcblx0czIuYWRkQ2xhc3MoXCJoaWRkZW5cIikudmlld3BvcnRDaGVja2VyKHtcclxuXHRcdGNsYXNzVG9BZGQ6ICd2aXNpYmxlIG9yYml0MicsXHJcblx0XHRvZmZzZXQ6IDcwXHJcblx0fSk7XHJcblx0czIub25lKCd3ZWJraXRBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBtc0FuaW1hdGlvbkVuZCBhbmltYXRpb25lbmQnLFxyXG5cdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoIFwiLnN1YjNcIiApLnNob3coKTtcclxuXHRcdH0pO1xyXG5cclxuICAgIHZhciBsb2NhdGlvbiA9ICcvJyArIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICB2YXIgY3VyX3VybCA9ICcuLycgKyBsb2NhdGlvbi5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgJChcIiNtZW51IGxpXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsaW5rID0gJCh0aGlzKS5maW5kKCdhJykuYXR0cignaHJlZicpO1xyXG4gICAgICAgIGlmIChjdXJfdXJsID09IGxpbmspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2EnKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuXHRcdFx0JCgnLnNjcm9sbHVwJykuZmFkZUluKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcuc2Nyb2xsdXAnKS5mYWRlT3V0KCk7XHJcblx0XHR9XHJcblx0XHR9KTtcclxuXHRcdCBcclxuXHQkKCcuc2Nyb2xsdXAnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCA2MDApO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cclxuXHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYycpKXtcclxuXHRcdHZhciBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKSxcclxuXHRcdFx0dyA9IGMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0aCA9IGMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0Lyp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG5cdFx0XHR3ID0gY3R4LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGggPSBjdHguaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0fSk7Ki9cclxuXHJcblx0XHQvKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgaWYgKHNjcmVlbi5vcmllbnRhdGlvbi5hbmdsZSA9PSAoOTAgfHwgLTkwKSkge1xyXG5cdFx0ICAgIFx0dyA9IGN0eC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdFx0XHRcdGggPSBjdHguaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0ICAgIFx0Y29uc29sZS5sb2codyk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIFxyXG5cdFx0fSk7Ki9cclxuXHJcblx0XHRmdW5jdGlvbiByYW5kMihuKXtcclxuXHRcdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkqbjtcclxuXHRcdH1cclxuXHJcblx0XHRzdGFycyA9IG5ldyBBcnJheSgxMDAwKS5maWxsKCkubWFwKFxyXG5cdFx0XHRmdW5jdGlvbihudW0pIHtcclxuXHRcdFx0XHRyZXR1cm4ge3I6IHJhbmQyKHcqMiksIHM6IHJhbmQyKDAuMDAzKSwgYTogcmFuZDIoTWF0aC5QSSoyKX07XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gbG9vcCgpe1xyXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsNywyOSwuMSlcIjtcclxuXHRcdFx0Y3R4LmZpbGxSZWN0KDAsMCx3LGgpO1xyXG5cdFx0XHRzdGFycy5mb3JFYWNoKGZ1bmN0aW9uKGUsaSxzdGFycyl7XHJcblx0XHRcdFx0ZS5hKz1lLnM7XHJcblx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdGN0eC5hcmMoTWF0aC5jb3MoZS5hKSplLnIgKyB3LzEwLCBNYXRoLnNpbihlLmEpKmUuciArIGgvNywgMSwwLCBNYXRoLlBJKjIpO1xyXG5cdFx0XHRcdGN0eC5jbG9zZVBhdGgoKTtcclxuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG5cdFx0XHRcdGN0eC5maWxsKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuXHJcblx0XHRcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cclxuXHRcclxuXHRcclxuXHJcbn0pO1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cdCQuZm4uaXNPblNjcmVlbiA9IGZ1bmN0aW9uKHhfb2Zmc2V0LCB5X29mZnNldCkge1xyXG5cdFx0aWYoeF9vZmZzZXQgPT0gbnVsbCB8fCB0eXBlb2YgeF9vZmZzZXQgPT0gJ3VuZGVmaW5lZCcpIHhfb2Zmc2V0ID0gMTtcclxuXHRcdGlmKHlfb2Zmc2V0ID09IG51bGwgfHwgdHlwZW9mIHlfb2Zmc2V0ID09ICd1bmRlZmluZWQnKSB5X29mZnNldCA9IDE7XHJcblxyXG5cdFx0dmFyIHdpbiA9ICQod2luZG93KSxcclxuXHRcdFx0dmlld3BvcnQgPSB7XHJcblx0XHRcdFx0dG9wIDogd2luLnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdGxlZnQgOiB3aW4uc2Nyb2xsTGVmdCgpXHJcblx0XHRcdH0sXHJcblx0XHRcdGhlaWdodCA9IHRoaXMub3V0ZXJIZWlnaHQoKSxcclxuXHRcdFx0d2lkdGggPSB0aGlzLm91dGVyV2lkdGgoKSxcclxuXHRcdFx0Ym91bmRzID0gdGhpcy5vZmZzZXQoKSxcclxuXHRcdFx0dmlzaWJsZSxcclxuXHRcdFx0ZGVsdGFzO1xyXG5cclxuXHRcdHZpZXdwb3J0LnJpZ2h0ID0gdmlld3BvcnQubGVmdCArIHdpbi53aWR0aCgpO1xyXG5cdFx0dmlld3BvcnQuYm90dG9tID0gdmlld3BvcnQudG9wICsgd2luLmhlaWdodCgpO1xyXG5cclxuXHRcdGlmKCF3aWR0aCB8fCAhaGVpZ2h0KSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0Ym91bmRzLnJpZ2h0ID0gYm91bmRzLmxlZnQgKyB3aWR0aDtcclxuXHRcdGJvdW5kcy5ib3R0b20gPSBib3VuZHMudG9wICsgaGVpZ2h0O1xyXG5cclxuXHRcdHZpc2libGUgPSAoXHJcblx0XHRcdCEodmlld3BvcnQucmlnaHQgPCBib3VuZHMubGVmdCB8fFxyXG5cdFx0XHR2aWV3cG9ydC5sZWZ0ID4gYm91bmRzLnJpZ2h0IHx8XHJcblx0XHRcdHZpZXdwb3J0LmJvdHRvbSA8IGJvdW5kcy50b3AgfHxcclxuXHRcdFx0dmlld3BvcnQudG9wID4gYm91bmRzLmJvdHRvbSlcclxuXHRcdCk7XHJcblxyXG5cdFx0aWYoIXZpc2libGUpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRkZWx0YXMgPSB7XHJcblx0XHRcdHRvcDogICAgTWF0aC5taW4oMSwgKGJvdW5kcy5ib3R0b20gLSB2aWV3cG9ydC50b3ApIC8gaGVpZ2h0KSxcclxuXHRcdFx0Ym90dG9tOiBNYXRoLm1pbigxLCAodmlld3BvcnQuYm90dG9tIC0gYm91bmRzLnRvcCkgLyBoZWlnaHQpLFxyXG5cdFx0XHRsZWZ0OiAgIE1hdGgubWluKDEsIChib3VuZHMucmlnaHQgLSB2aWV3cG9ydC5sZWZ0KSAvIHdpZHRoKSxcclxuXHRcdFx0cmlnaHQ6ICBNYXRoLm1pbigxLCAodmlld3BvcnQucmlnaHQgLSBib3VuZHMubGVmdCkgLyB3aWR0aClcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIChkZWx0YXMubGVmdCAqIGRlbHRhcy5yaWdodCkgPj0geF9vZmZzZXQgJiYgKGRlbHRhcy50b3AgKiBkZWx0YXMuYm90dG9tKSA+PSB5X29mZnNldDtcclxuXHR9O1xyXG5cclxuXHQkKFwiLnRvZ2dsZV9fbWVudVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJChcIi5zYW5kd2ljaFwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuaGVhZGVyLW5hdiB1bCBhXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuaGVhZGVyLW5hdlwiKS5mYWRlT3V0KDYwMCk7XHJcbiAgICAgICAgJChcIi5zYW5kd2ljaFwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKFwiLnRvZ2dsZV9fbWVudVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIuaGVhZGVyLW5hdlwiKS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyLW5hdlwiKS5mYWRlT3V0KDYwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuaGVhZGVyLW5hdlwiKS5mYWRlSW4oNjAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH0pOyBcclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
