$(document).ready(function() {
	$('.header__burger').click(function(event) {
		// Transform menu burger into cross sign
		$('.header__burger, .header__menu').toggleClass('active');
		// Cancel scroll under open menu burger
		$('body').toggleClass('lock');
	});
}); // ready()