$(function() {

	$('.modal').modal();
	$('.sidenav').sidenav();

	// $('.modal-order__data-phone').inputmask("+7 (999) 999 99 99");

	// $('.header__slider').slick({
	// 	arrows: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// });

});

// var phoneMask = ['+', '7' ,'(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

// var myInput = document.querySelector('.modal-order__data-phone')

// var maskedInputController = vanillaTextMask.maskInput({
// 	inputElement: myInput,
// 	mask: phoneMask
// })


$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top-scroll').addClass('top-scroll_active');
	} else {
		$('.top-scroll').removeClass('top-scroll_active');
	}
	$('.top-scroll').click(function () {
		$("html, body").stop().animate({ scrollTop: 0 }, 'slow', 'swing');
	});

});


function sendMail() {
	$("#order-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "../ajax/mail-form_order.php",
			data: $(this).serialize(),
			success: function (response) {
				if (response) {
					console.log("send");
					$(".popup-thank").show("500");
				} else {
					console.log("Ошибка отправки");
				}
			},
			error: function (response) {
				console.log("Файл не найден");
			}
		});
	});
}
