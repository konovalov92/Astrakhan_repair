$(document).ready(function(){
  new WOW().init();

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.arrows-left'),
  nextArrow: $('.arrows-right'),
  responsive: [
    {
      breakpoint: 1200,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1
      } 
    }
  ]
});

// Валидация форм
$("#brif-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true,
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Пожалуйста введите не больше 15 символов")
    },
    phone: {
      required: "Укажите ваш номер телефона"
    },
    email: {
      required: "Введите ваш email",
      email: "Ваш email адресс должен быть в формате: name@domain.com"
    }
  }
});
$("#offer-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true,
    }
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Пожалуйста введите не больше 15 символов")
    },
    phone: {
      required: "Укажите ваш номер телефона"
    }
  }
});
// маска для телефона
$('.phone').mask('+7 (999) 999-99-99');
  
  // Модальное окно main.js
var button = $('#button'); 
var modal = $('#modal');
var close = $('#close');

button.on('click', function() { 
  modal.addClass('modal_active');
});

close.on('click', function() {
  modal.classList.remove('modal_active');
  });
});