window.addEventListener("load", function() {
	document.querySelector("body").classList.add("loaded");
});

$(document).ready(function() {
	var btn = $("#button");
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			btn.addClass("show");
		} else {
			btn.removeClass("show");
		}
	});

	btn.on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});

	var galleryThumbs = new Swiper(".gallery-thumbs", {
		spaceBetween: 5,
		slidesPerView: 4,
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true
	});
	var galleryTop = new Swiper(".gallery-top", {
		spaceBetween: 5,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
	$("#menu,#mobile-nav").on("click", "a", function(event) {
		mobileNavActive.classList.remove("nav-mobile-wrapper--active");
		menuToggle.classList.remove("menu-icon-active");
		event.preventDefault();
		var offset = -65;
		var id = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({ scrollTop: top + offset }, 700);
	});

	// $("#menu-toggle").click(function() {
	// 	if ($("#menu-toggle").hasClass("menu-icon-active")) {
	// 		$("#menu-toggle").removeClass("menu-icon-active");
	// 		$("nav-mobile-wrapper").removeClass("nav-mobile-wrapper--active");
	// 	} else {
	// 		$("#menu-toggle").addClass("menu-icon-active");
	// 	}
	// });
	$("body").click(function(evt) {
		if (evt.target.id == "nav-mobile-wrapper") {
			menuToggle.classList.remove("menu-icon-active");
			mobileNavActive.classList.remove("nav-mobile-wrapper--active");
		}

		//For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
		if ($(evt.target).closest("#mobile-toggle").length) {
			menuToggle.classList.toggle("menu-icon-active");
			mobileNavActive.classList.toggle("nav-mobile-wrapper--active");
		}

		//Do processing of click event here for every element except with id menu_content
	});
	// $( "menuToggle" ).click(function() {
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileNavActive = document.querySelector("#mobile-nav");
menuToggle.onclick = function() {
	menuToggle.classList.toggle("menu-icon-active");
	mobileNavActive.classList.toggle("nav-mobile-wrapper--active");
};
// var container = $("mobile-nav");
// var menubtn = $(".nav-mobile-wrapper");
// $(document).mouseup(function(e) {
// 	if (!container.is(e.target) && container.has(e.target).length == 0) {
// 		menubtn.removeClass("menu-icon-active");
// 		container.removeClass("nav-mobile-wrapper--active");
// 		console.log("outside");
// 	} else {
// 		console.log("menu");
// 	}
// });
// function hideOnClickOutside(element) {
// 	const outsideClickListener = (event) => {
// 		if (!element.contains(event.target) && isVisible(element)) {
// 			// or use: event.target.closest(selector) === null
// 			element.style.display = "none";
// 			removeClickListener();
// 		}
// 	};

// 	const removeClickListener = () => {
// 		document.removeEventListener("click", outsideClickListener);
// 	};

// 	document.addEventListener("click", outsideClickListener);
// }

// $(document).click(function(event) {
// 	var target = $(event.target);
// 	if (target != container) {
// 		console.log("outside");
// 	} else {
// 		console.log("menu");
// 	}
// });

// const isVisible = (elem) =>
// 	!!elem &&
// 	!!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
// var menubtn = $(".nav-mobile-wrapper");

// $(document).ready(function() {
// 	if (menubtn.hasClass("menu-icon-active")) {
// 		menubtn.classList.remove("nav-mobile-wrapper--active");
// 		btntoggle.classList.remove("menu-icon-active");
// 	} else {
// 		$("menu-icon").removeClass("menu-icon-active");
// 	}
// });
