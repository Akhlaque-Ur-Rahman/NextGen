// Wait for the DOM (Document Object Model) to be fully loaded
document.addEventListener('DOMContentLoaded', function(event) {

    var navbarToggler = document.querySelectorAll('.navbar-toggler')[0];
    navbarToggler.addEventListener('click', function(e) {
      e.target.children[0].classList.toggle('active');
    });

    
    
    var html = document.querySelectorAll('html')[0];
    var themeToggle = document.querySelectorAll('*[data-bs-toggle-theme]')[0];
    html.setAttribute('data-bs-theme', 'dark');
    if (themeToggle) {
      themeToggle.addEventListener('click', function(event) {
        event.preventDefault();
    
        if (html.getAttribute('data-bs-theme') === 'dark') {
          html.setAttribute('data-bs-theme', 'light');
        } else {
          html.setAttribute('data-bs-theme', 'dark');
        }
      });
    }
    });

    // Loader: keep visible until full window load
    var loaderEl = document.getElementById('nbb-loader');
    if (loaderEl){
      document.documentElement.classList.add('nbb-loading');
      document.body.style.overflow = 'hidden';
      window.addEventListener('load', function(){
        loaderEl.classList.add('hidden');
        document.body.style.overflow = '';
        document.documentElement.classList.remove('nbb-loading');
        setTimeout(function(){
          if (loaderEl && loaderEl.parentNode){ loaderEl.parentNode.removeChild(loaderEl); }
        }, 600);
      });
    }




         // Header stays; Topbar hides on scroll
         function handleScroll(){
            const navbar = document.querySelector('nav.navbar.navbar-expand-lg.shadow');
            const topbar = document.querySelector('.topbar');
            const scrolled = window.scrollY > 10;
            if (navbar){
                navbar.style.background = scrolled ? 'linear-gradient(135deg, #1B0C28 0%, #ceb8f8 100%)' : 'linear-gradient(135deg, #1B0C28 0%, #ceb8f8 100%)';
                navbar.style.transition = 'all 0.3s ease-in-out';
            }
            if (topbar){
                if (scrolled){
                    topbar.classList.add('topbar--hidden');
                    document.body.classList.add('topbar-hidden');
                } else {
                    topbar.classList.remove('topbar--hidden');
                    document.body.classList.remove('topbar-hidden');
                    topbar.style.background = 'linear-gradient(135deg, #1B0C28 0%, #ceb8f8 100%)';
                }
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();














         // Custom cursor functionality
        //  document.addEventListener('DOMContentLoaded', function() {
        //     const cursor = document.querySelector('.custom-cursor');
            
        //     document.addEventListener('mousemove', function(e) {
        //         cursor.style.left = e.clientX + 'px';
        //         cursor.style.top = e.clientY + 'px';
        //         cursor.style.opacity = '1';
        //     });
            
        //     document.addEventListener('mouseleave', function() {
        //         cursor.style.opacity = '0';
        //     });
            
        //     const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .btn, .nav-link');
            
        //     interactiveElements.forEach(element => {
        //         element.addEventListener('mouseenter', function() {
        //             cursor.classList.add('hover');
        //         });
                
        //         element.addEventListener('mouseleave', function() {
        //             cursor.classList.remove('hover');
        //         });
        //     });
            
        //     document.addEventListener('mousedown', function() {
        //         cursor.classList.add('click');
        //     });
            
        //     document.addEventListener('mouseup', function() {
        //         cursor.classList.remove('click');
        //     });
        // });



















// Section Hero CANAVAS 
// const canvas = document.getElementById('gridCanvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const config = {
//     gridSize: 100,
//     gridColor: 'rgba(255, 255, 255, 0.15)',
//     particleCount: 50,
//     particleSpeedMin: 0.5,
//     particleSpeedMax: 5,
//     particleColors: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],
//     trailLength: 100,
//     backgroundColor: '#000',
//     rippleDuration: 2000,
//     rippleMaxRadius: 200
// };

// const occupiedLines = { horizontal: new Set(), vertical: new Set() };
// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

// function createGrid() {
//     ctx.fillStyle = config.backgroundColor;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
    
//     const gridPath = new Path2D();
//     for (let y = 0; y < canvas.height; y += config.gridSize) {
//         gridPath.moveTo(0, y);
//         gridPath.lineTo(canvas.width, y);
//     }
//     for (let x = 0; x < canvas.width; x += config.gridSize) {
//         gridPath.moveTo(x, 0);
//         gridPath.lineTo(x, canvas.height);
//     }
//     ctx.strokeStyle = config.gridColor;
//     ctx.stroke(gridPath);
// }

// class Particle {
//     constructor() {
//         this.color = config.particleColors[Math.floor(Math.random() * config.particleColors.length)];
//         this.speed = Math.random() * (config.particleSpeedMax - config.particleSpeedMin) + config.particleSpeedMin;
//         this.trail = [];
//         this.reset();
//     }

//     update() {
//         this.trail.push({ x: this.x, y: this.y });
//         if (this.trail.length > config.trailLength) this.trail.shift();

//         if (this.direction === 'horizontal') {
//             this.x += this.speed;
//             if (this.x > canvas.width) this.reset();
//         } else {
//             this.y += this.speed;
//             if (this.y > canvas.height) this.reset();
//         }
//     }

//     draw() {
//         ctx.beginPath();
//         for (let i = 0; i < this.trail.length; i++) {
//             const { x, y } = this.trail[i];
//             ctx.fillStyle = this.color;
//             ctx.fillRect(x, y, 1, 1);
//         }
//     }

//     findAvailableLine() {
//         const y = Math.floor(Math.random() * (canvas.height / config.gridSize)) * config.gridSize;
//         const x = Math.floor(Math.random() * (canvas.width / config.gridSize)) * config.gridSize;
        
//         if (Math.random() > 0.5 && !occupiedLines.horizontal.has(y)) {
//             this.direction = 'horizontal';
//             this.x = 0;
//             this.y = y;
//             occupiedLines.horizontal.add(y);
//             return true;
//         }
//         if (!occupiedLines.vertical.has(x)) {
//             this.direction = 'vertical';
//             this.x = x;
//             this.y = 0;
//             occupiedLines.vertical.add(x);
//             return true;
//         }
//         return false;
//     }

//     reset() {
//         occupiedLines.horizontal.clear();
//         occupiedLines.vertical.clear();
//         this.trail = [];
//         this.findAvailableLine();
//     }
// }

// const particles = Array.from({ length: config.particleCount }, () => new Particle());

// class Ripple {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.radius = 0;
//         this.startTime = Date.now();
//     }
//     update() {
//         this.radius = ((Date.now() - this.startTime) / config.rippleDuration) * config.rippleMaxRadius;
//     }
//     draw() {
//         const alpha = 0 - (this.radius / config.rippleMaxRadius);
//         ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.stroke();
//     }
//     isComplete() {
//         return this.radius >= config.rippleMaxRadius;
//     }
// }

// let ripples = [];

// function animate() {
//     createGrid();
//     particles.forEach(p => (p.update(), p.draw()));
//     ripples = ripples.filter(ripple => !ripple.isComplete());
//     ripples.forEach(r => (r.update(), r.draw()));
//     requestAnimationFrame(animate);
// }

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     particles.forEach(p => p.reset());
// });

// canvas.addEventListener('click', (e) => ripples.push(new Ripple(e.clientX, e.clientY)));

// animate();

// (function() {
// 	if (document.readyState === 'loading') {
// 		document.addEventListener('DOMContentLoaded', initMagnifier);
// 	} else {
// 		initMagnifier();
// 	}

// 	function initMagnifier() {
// 		var lens = document.querySelector('.cursor-lens');
// 		var cursor = document.querySelector('.custom-cursor');
// 		if (!lens) { return; }

// 		var textSelectors = 'h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,small,span,label,a,button,strong,em,figcaption,th,td';
// 		var textNodes = Array.prototype.slice.call(document.querySelectorAll(textSelectors));

// 		textNodes.forEach(function(node) {
// 			node.classList.add('magnify-target');
// 		});

// 		document.addEventListener('mousemove', function(e) {
// 			if (lens) {
// 				lens.style.left = e.clientX + 'px';
// 				lens.style.top = e.clientY + 'px';
// 			}
// 			if (cursor) {
// 				cursor.style.left = e.clientX + 'px';
// 				cursor.style.top = e.clientY + 'px';
// 				cursor.style.opacity = '1';
// 			}
// 		});

// 		document.addEventListener('mouseover', function(e) {
// 			var target = e.target;
// 			var isText = target.closest(textSelectors) !== null;
// 			if (isText) {
// 				lens.classList.add('visible');
// 				var t = target.closest(textSelectors);
// 				if (t) t.classList.add('magnify');
// 			} else {
// 				lens.classList.remove('visible');
// 			}
// 		});

// 		document.addEventListener('mouseout', function(e) {
// 			var target = e.target;
// 			if (!target) return;
// 			var t = target.closest(textSelectors);
// 			if (t) t.classList.remove('magnify');
// 		});

// 		// Hide lens when leaving window
// 		document.addEventListener('mouseleave', function() {
// 			lens.classList.remove('visible');
// 			if (cursor) cursor.style.opacity = '0';
// 		});
// 	}
// })();




















 var swiper = new Swiper(".banner-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000, // 3 seconds between slides
    disableOnInteraction: false, // keeps autoplay after user interactions
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".ekyc-banner-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




























$(document).ready(function() {
    var carouselslider = new Swiper('.carousel-slider', {
      spaceBetween: 0,
      slidesPerView: 3,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 1
        }
      }
    });
  });






  var swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });



  var swiper = new Swiper(".portfolio-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // Awards Carousel
  // var awardsSwiper = new Swiper(".awards-swiper", {
  //   loop: true,
  //   slidesPerView: 5,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     1024: {
  //       slidesPerView: 5,
  //       spaceBetween: 30,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //     640: {
  //       slidesPerView: 1,
  //       spaceBetween: 10,
  //     },
  //   },
  // });

// Awards Carousel
var awardsSwiper = new Swiper(".awards-swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".awards-swiper .swiper-pagination", 
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  // 👉 Yaha fix kiya hai
  on: {
    slideChange: function () {
      let swiperEl = this.el; // ✅ current swiper ka root element
      let slides = swiperEl.querySelectorAll('.swiper-slide');
      let prevSlides = swiperEl.querySelectorAll('.swiper-slide-prev');
      let nextSlides = swiperEl.querySelectorAll('.swiper-slide-next');

      // Reset sabka margin
      slides.forEach(el => {
        el.style.marginTop = '0px';
      });

      // Prev slides
      prevSlides.forEach((el, index) => {
        el.style.marginTop = index === 0 ? '-40px' : '-20px';
      });

      // Next slides
      nextSlides.forEach((el, index) => {
        el.style.marginTop = index === 0 ? '-20px' : '-60px';
      });
    }
  }
});















document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.portfolio-section-slider');
  if (!slider) return; // agar section nahi hai toh script skip

  function activate(e) {
    const items = slider.querySelectorAll('.item');

    if (e.target.matches('.next, .next i')) {
      slider.append(items[0]);
      handleUserInteraction();
    } else if (e.target.matches('.prev, .prev i')) {
      slider.prepend(items[items.length - 1]);
      handleUserInteraction();
    }

    if (e.target.closest('.item:nth-child(2), .item:nth-child(3), .item:nth-child(4), .item:nth-child(5)')) {
      const clickedItem = e.target.closest('.item');
      const items = slider.querySelectorAll('.item');
      const clickedIndex = Array.from(items).indexOf(clickedItem);

      if (clickedIndex >= 1) {
        for (let i = 0; i < clickedIndex; i++) {
          slider.append(items[0]);
        }
        handleUserInteraction();
      }
    }
  }

  document.addEventListener('click', activate, false);

  let autoSlideInterval;
  let isAutoSliding = true;
  let isHovering = false;

  function startAutoSlide() {
    if (isAutoSliding && !isHovering) {
      autoSlideInterval = setInterval(() => {
        const items = slider.querySelectorAll('.item');
        if (items.length > 0) {
          slider.append(items[0]);
        }
      }, 8000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function handleUserInteraction() {
    stopAutoSlide();
    setTimeout(() => {
      if (isAutoSliding && !isHovering) {
        startAutoSlide();
      }
    }, 8000);
  }

  slider.addEventListener('mouseenter', () => {
    isHovering = true;
    stopAutoSlide();
  });

  slider.addEventListener('mouseleave', () => {
    isHovering = false;
    if (isAutoSliding) {
      startAutoSlide();
    }
  });

  startAutoSlide();
});

















const teamMembers = [
  { name: "ASSOCHAM AWARD", role: "2023" },
  { name: "CII AWARD", role: "2023" },
  { name: "ICSI AWARD", role: "2023" },
  { name: "ISO CERTIFICATION", role: "2023" },
  { name: "MSME REGISTRATION", role: "2023" },
  { name: "PHD CHAMBER AWARD", role: "2023" },
  { name: "STARTUP INDIA RECOGNITION", role: "2023" }
];


// Scope awards carousel elements to the awards section only
const awardsSection = document.querySelector('.our-team-awards');
const cards = awardsSection ? awardsSection.querySelectorAll(".card") : document.querySelectorAll(".card");
const dots = awardsSection ? awardsSection.querySelectorAll(".dot") : document.querySelectorAll(".dot");
const memberName = awardsSection ? awardsSection.querySelector(".member-name") : document.querySelector(".member-name");
const memberRole = awardsSection ? awardsSection.querySelector(".member-role") : document.querySelector(".member-role");
const leftArrow = awardsSection ? awardsSection.querySelector(".nav-arrow.left") : document.querySelector(".nav-arrow.left");
const rightArrow = awardsSection ? awardsSection.querySelector(".nav-arrow.right") : document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"left-1",
			"left-2",
			"right-1",
			"right-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("right-1");
		} else if (offset === 2) {
			card.classList.add("right-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("left-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("left-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	if (memberName) memberName.style.opacity = "0";
	if (memberRole) memberRole.style.opacity = "0";

	setTimeout(() => {
		if (memberName) memberName.textContent = teamMembers[currentIndex].name;
		if (memberRole) memberRole.textContent = teamMembers[currentIndex].role;
		if (memberName) memberName.style.opacity = "1";
		if (memberRole) memberRole.style.opacity = "1";
	}, 300);

	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

if (leftArrow) {
    leftArrow.addEventListener("click", () => {
        updateCarousel(currentIndex - 1);
    });
}

if (rightArrow) {
    rightArrow.addEventListener("click", () => {
        updateCarousel(currentIndex + 1);
    });
}

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowRight") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);

// Floating Buttons Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Chat Support Button
    const chatSupportBtn = document.getElementById('chatSupport');
    
    if (chatSupportBtn) {
        chatSupportBtn.addEventListener('click', function() {
            // Open contact modal when chat support is clicked
            const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
            contactModal.show();
        });
    }
    // Form validation and redirect for contact forms
document.addEventListener('DOMContentLoaded', function(){
  function validateEmail(value){
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailPattern.test(String(value).trim());
  }

  function validatePhone(value){
    // Accept digits, spaces and dashes, optional leading +, 7-15 chars
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    return phonePattern.test(String(value).trim());
  }

  function showFieldError(input, message){
    // Use HTML5 validity UI if available; else create a small helper text
    if (typeof input.setCustomValidity === 'function'){
      input.setCustomValidity(message || '');
      input.reportValidity();
    }
  }

  function clearFieldError(input){
    if (typeof input.setCustomValidity === 'function'){
      input.setCustomValidity('');
    }
  }

  function handleFormSubmit(form){
    console.log('Form submit called', form); // Debug log
    const nameInput = form.querySelector('input[placeholder="Full Name"]');
    const emailInput = form.querySelector('input[type="email"]');
    const companyInput = form.querySelector('input[placeholder="Company"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const helpSelect = form.querySelector('select');
    const submitAnchor = form.querySelector('.nbb-link.classic'); // covers both button and anchor

    function setLoading(state){
      if (!submitAnchor) return;
      if (state){
        submitAnchor.classList.add('disabled');
        submitAnchor.style.pointerEvents = 'none';
        submitAnchor.style.opacity = '0.7';
        if (!submitAnchor.querySelector('.nbb-btn-spinner')){
          const spinner = document.createElement('span');
          spinner.className = 'nbb-btn-spinner spinner-border spinner-border-sm ms-2';
          spinner.setAttribute('role','status');
          spinner.setAttribute('aria-hidden','true');
          submitAnchor.querySelector('.section-tag .special-arrow')?.insertAdjacentElement('beforebegin', spinner);
        }
      } else {
        submitAnchor.classList.remove('disabled');
        submitAnchor.style.pointerEvents = '';
        submitAnchor.style.opacity = '';
        const sp = submitAnchor.querySelector('.nbb-btn-spinner');
        if (sp) sp.remove();
      }
    }

    let isValid = true;

    function setInvalid(input, message){
      if (!input) return;
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      let fb = input.nextElementSibling;
      if (!fb || !fb.classList.contains('invalid-feedback')){
        fb = document.createElement('div');
        fb.className = 'invalid-feedback';
        input.insertAdjacentElement('afterend', fb);
      }
      fb.textContent = message;
      showFieldError(input, message);
    }

    function setValid(input){
      if (!input) return;
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      clearFieldError(input);
    }

    // Name
    if (!nameInput || nameInput.value.trim().length < 2){
      isValid = false; setInvalid(nameInput, 'Please enter your full name.');
    } else { setValid(nameInput); }

    // Email
    if (!emailInput || !validateEmail(emailInput.value)){
      isValid = false; setInvalid(emailInput, 'Enter a valid email address.');
    } else { setValid(emailInput); }

    // Company
    if (!companyInput || companyInput.value.trim().length < 2){
      isValid = false; setInvalid(companyInput, 'Please enter your company name.');
    } else { setValid(companyInput); }

    // Phone
    if (!phoneInput || !validatePhone(phoneInput.value)){
      isValid = false; setInvalid(phoneInput, 'Enter a valid phone number.');
    } else { setValid(phoneInput); }

    // Select (ensure a non-default option)
    if (helpSelect && helpSelect.selectedIndex === 0){
      isValid = false; setInvalid(helpSelect, 'Please choose an option.');
    } else if (helpSelect){ setValid(helpSelect); }

    if (!form.classList.contains('was-validated')){
      form.classList.add('was-validated');
    }

    if (!isValid){
      console.log('Form valid?', isValid); // Debug log
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      setLoading(false);
      return;
    }
    console.log('Form valid?', isValid); // Debug log

    // Show loader and simulate submit
    setLoading(true);
    setTimeout(function(){
      window.location.href = 'thankyou.php';
    }, 800);
  }

  // Bind to all forms with class light-form
  var forms = document.querySelectorAll('form.light-form');
  forms.forEach(function(form){
    // Live validation
    form.querySelectorAll('input, select').forEach(function(el){
      el.addEventListener('input', function(){
        if (el.classList.contains('is-invalid')){
          el.classList.remove('is-invalid');
          el.classList.add('is-valid');
          clearFieldError(el);
        }
      });
      el.addEventListener('blur', function(){
        // Re-run minimal validation on blur
        if (el.type === 'email' && !validateEmail(el.value)){
          el.classList.add('is-invalid');
        } else if (el.type === 'tel' && !validatePhone(el.value)){
          el.classList.add('is-invalid');
        } else if (el.tagName === 'SELECT' && el.selectedIndex === 0){
          el.classList.add('is-invalid');
        } else if (el.value && el.value.trim().length >= 2){
          el.classList.remove('is-invalid');
          el.classList.add('is-valid');
        }
      });
    });

    // Intercept native submit if triggered
    form.addEventListener('submit', function(e){
      e.preventDefault();
      handleFormSubmit(form);
    });

    // Bind to custom anchor button inside the form
    var submitAnchor = form.querySelector('a.nbb-link.classic');
    if (submitAnchor){
      submitAnchor.addEventListener('click', function(e){
        e.preventDefault();
        handleFormSubmit(form);
      });
    }
  });
});
   
});



  

















  var swiper = new Swiper(".ekyc-swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  document.addEventListener('DOMContentLoaded', () => {
    const portfolioSection = document.querySelector('.section-npcarousal'); 
    if (!portfolioSection) return; // agar section hi nahi mila toh JS stop
  
    const tabButtons = portfolioSection.querySelectorAll('.portfolio-tabs .tab-btn');
    const portfolioItems = portfolioSection.querySelectorAll('.section-npcarousal__portfolio-item');
    const tabIndicator = portfolioSection.querySelector('.tab-indicator');
  
    if (!tabButtons.length || !portfolioItems.length) return; // agar tabs ya items hi nahi toh stop
  
    function updateTabIndicator(activeTab) {
      if (!tabIndicator || !activeTab) return;
  
      const tabRect = activeTab.getBoundingClientRect();
      const container = activeTab.closest('.portfolio-tabs');
      if (!container) return;
  
      const containerRect = container.getBoundingClientRect();
      tabIndicator.style.width = `${tabRect.width}px`;
      tabIndicator.style.transform = `translateX(${tabRect.left - containerRect.left}px)`;
    }
  
    function filterPortfolio(category) {
      portfolioItems.forEach(item => {
        if (!item.dataset.category) return;
  
        if (category === 'all' || item.dataset.category === category) {
          item.classList.remove('hidden');
          item.classList.add('fade-in');
        } else {
          item.classList.add('hidden');
          item.classList.remove('fade-in');
        }
      });
    }
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const category = btn.dataset.category || 'all';
        filterPortfolio(category);
        updateTabIndicator(btn);
      });
    });
  
    // Initialize first active tab
    const activeTab = portfolioSection.querySelector('.tab-btn.active') || tabButtons[0];
    if (activeTab) {
      const category = activeTab.dataset.category || 'all';
      filterPortfolio(category);
      updateTabIndicator(activeTab);
      activeTab.classList.add('active');
    }
  });
  



