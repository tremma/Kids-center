"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
// burger
var burger = document.querySelector('.burger');

if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('burger--active');
  });
} // ==========================================================================================
// popup


var popup = document.querySelector('.popup');
var popupOpenBtn = document.querySelectorAll('.popup-open-btn');
var popupCloseBtn = document.querySelectorAll('.popup-close'); // open

popupOpenBtn.forEach(function (popupBtn) {
  popupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.toggle('popup-open');
  });
}); // close

popupCloseBtn.forEach(function (closeBtn) {
  closeBtn.addEventListener('click', function (e) {
    popup.classList.remove('popup-open');
  });
}); // ===========================================================================
// accordion

var accordionItems = document.querySelectorAll('.accordion__item');

if (accordionItems.length > 0) {
  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
} // anim
// animations
//1.Добавить класс _anim-items для необходимого элемента
//2.Прописать стили для класса _active который подставит скрипт
//3.Класс _anim-no-hide отменяет удаление класса _active и анимация не повторяется при обратном скроле


var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener('scroll', animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
} // slider


var sliderSelector = '.hero__slider',
    isMove = false,
    options = {
  init: false,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000
  },
  effect: 'cube',
  // 'cube', 'fade', 'coverflow',
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 40,
    shadowScale: 0.94
  },
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Events
  on: {
    init: function init() {
      this.autoplay.stop();
    },
    imagesReady: function imagesReady() {
      this.el.classList.remove('loading');
      this.autoplay.start();
    },
    touchMove: function touchMove(event) {
      if (!isMove) {
        this.el.classList.remove('scale-in');
        this.el.classList.add('scale-out');
        isMove = true;
      }
    },
    touchEnd: function touchEnd(event) {
      this.el.classList.remove('scale-out');
      this.el.classList.add('scale-in');
      setTimeout(function () {
        isMove = false;
      }, 300);
    },
    slideChangeTransitionStart: function slideChangeTransitionStart() {
      console.log('slideChangeTransitionStart ' + this.activeIndex);

      if (!isMove) {
        this.el.classList.remove('scale-in');
        this.el.classList.add('scale-out');
      }
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      console.log('slideChangeTransitionEnd ' + this.activeIndex);

      if (!isMove) {
        this.el.classList.remove('scale-out');
        this.el.classList.add('scale-in');
      }
    },
    transitionStart: function transitionStart() {
      console.log('transitionStart ' + this.activeIndex);
    },
    transitionEnd: function transitionEnd() {
      console.log('transitionEnd ' + this.activeIndex);
    },
    slideChange: function slideChange() {
      console.log('slideChange ' + this.activeIndex);
      console.log(this);
    }
  }
},
    mySwiper = new Swiper(sliderSelector, options); // Initialize slider

mySwiper.init(); // team

var teamBtns = document.querySelectorAll('.team__nav-item');
var teamItems = document.querySelectorAll('.team__item');
teamBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    teamBtns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
    var btnName = this.dataset.name;

    for (var _i = 0; _i < teamItems.length; _i++) {
      var itemName = teamItems[_i].dataset.name;

      if (btnName === itemName) {
        teamItems[_i].classList.add('show');
      } else {
        teamItems[_i].classList.remove('show');
      }
    }
  });
}); // team-slider

var teamSwiper = new Swiper('.team__slider', {
  slidesPerView: '4',
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.team-next',
    prevEl: '.team-prev'
  }
}); // pacient-slider

var teamSwiper = new Swiper('.pacient__slider', {
  slidesPerView: '4',
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.pacient-next',
    prevEl: '.pacient-prev'
  }
});
//# sourceMappingURL=main.js.map
