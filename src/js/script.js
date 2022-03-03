$(document).ready(function(){

    $("body").css("display", "none");
    $("body").fadeIn(1000);

    let button = document.querySelector('.communicate-btn'),
        consultation = document.querySelector('.consultation'),
        close = document.querySelector('.close'),
        white_block = document.querySelector('.white_block'),
        sign_up = document.querySelector('.start_button_right'),
        youtube_modal = document.querySelector('.youtube'),
        overlay = document.querySelector('.overlay');

                        //YOUTUBE MODAL SCRIPTS//
    function showYoutube () {
        youtube_modal.style.display = 'block';
    };
    
    $('.youtube_close').click(function() {
        youtube_modal.style.display = 'none';
    });

    setTimeout (showYoutube, 12000);
                        //YOUTUBE MODAL SCRIPTS//

    
                        // CONSULTATION MODAL SCRIPTS
    button.addEventListener('click', function() {
        consultation.style.display = 'block';
        consultation.classList.add('b-show');
    });

    close.addEventListener('click', function(){
        consultation.style.display = 'none';
        overlay.style.display = 'none';
    });

    sign_up.addEventListener('click', function(){
        consultation.style.display = 'block';
        consultation.classList.add('b-show');
    });
                        // CONSULTATION MODAL SCRIPTS

    //PHONE MASK SCRIPTS
    function PhoneMask(phone_field) {
        jQuery(function($){
            $(phone_field).mask("+380 (99) 999-9999");
            });
    };
    PhoneMask("#phone");
    PhoneMask("#sign_phone");
    //PHONE MASK SCRIPTS

    //Switch fixed menubar 
    $(window).scroll(function() {

        if ($(this).scrollTop() > 100){  
            white_block.style.display = 'block';
            $('.header').addClass("fixed");
            $('.menu').addClass("mini");
            $('.communicate-btn').addClass("mini");
            $('.phone-logo').addClass("mini");
            $('.header_brand').addClass("mini");
            $('.logo').addClass("mini");
            $('.menu-item').addClass("mini");
            $('.menu-container').addClass("mini");

        }  else{
            white_block.style.display = 'none';
            $('.header').removeClass("fixed");
            $('.menu').removeClass("mini");
            $('.communicate-btn').removeClass("mini");
            $('.phone-logo').removeClass("mini");
            $('.header_brand').removeClass("mini");
            $('.logo').removeClass("mini");
            $('.menu-item').removeClass("mini");
            $('.menu-container').removeClass("mini");
        }

    });
    //Switch fixed menubar 


    // Animated scroll
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
        //rezygnujemy ze standardowego przetwarzania kliknięcia w link
        event.preventDefault();
        
        //bierzemy id strony z atrybutu href
        var id = $(this).attr('href'),
        
        //znajdź wysokość od początku strony do bloku, do którego odwołuje się kotwica
        top = $(id).offset().top;
        
        //animować przejście na odległość - top w 1500 ms
        $('body,html').animate({scrollTop: top}, 500);
        });
        });
    // Animated scroll

    // Animated offers cards
    function toogleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.offers_wrapper-item').eq(i).toggleClass('offers_wrapper-item_off');
                $('.offers_wrapper-item').eq(i).toggleClass('b-show');
                $('.offers_wrapper-list').eq(i).toggleClass('offers_wrapper-list_on');
            })
        });
    };

    toogleSlide('.offers_wrapper-item-btn');
    toogleSlide('.offers_wrapper-list-btn');
    // Animated offers cards

    //PHP SCRIPTS
    $('#consultation_form').submit(function() { 
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#consultation_form').trigger('reset');
		});
		return false;
	});

    $('#sign_form').submit(function() { 
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#sign_form').trigger('reset');
		});
		return false;
	});
    //PHP SCRIPTS

    //POPUP SCRIPTS
    $('.js-close-thank-you').click(function() { 
	$('.js-overlay-thank-you').fadeOut();
    });

    $(document).mouseup(function (e) { 
        var popup = $('.popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-thank-you').fadeOut();
        }
    });
    //POPUP SCRIPTS

});
