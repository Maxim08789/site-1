const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
function toggleMenuIcon() {
	menuIcon.classList.toggle("active");
	menuBody.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);


$(".menu__icon").click(function () {
	$('body').toggleClass('lock-scroll');
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


$(document).ready(function () {
	$('.footer__menu-title').click(function (event) {
		if ($('.footer__spoiler').hasClass('one')) {  //если добавить к .footer__spoiler класс 'one', то получится "аккардеон"
			$('.footer__menu-title').not($(this)).removeClass('active');
			$('.footer__menu-text').not($(this).next()).slideUp(200);
		}
		$(this).toggleClass('active').next().slideToggle(200);
	});
});


//         каааааааайф