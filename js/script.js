$(function () {
   $(window).scroll(function () {
     if ($(this).scrollTop() != 0) {
       $("#top").fadeIn();
     } else {
       $("#top").fadeOut();
     }
   });
   $("#top").click(function () {
     $("body,html").animate({ scrollTop: 0 }, 0);
   });
 });

 new Swiper ('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	loop: true,
	watchOverflow: true,
	initialSlide: 0,
	autoplay: {
		delay: 4000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
	effect: 'fade'
});

// Отправка данных на сервер
function send(event, php){
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); 
			 console.log(json);
			 if (json.result == "success") {
				 alert("Сообщение отправлено");
			 } else {
				 alert("Ошибка. Сообщение не отправлено");
			 }
		 } else {alert("Ошибка сервера. Номер: "+req.status);}
	}; 
	
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
}

/* Form Validation */

const inputName = document.querySelector("#form-username")
const inputPhone = document.querySelector("#form-userphone")
const btn = document.querySelector('.form__btn')
const form = document.getElementById('form')

// const inputNameLabel = document.querySelector('.b24-form-control-label')

// inputName.addEventListener(change, inputLabel)
// function inputLabel() {
// if (!(inputName.value === '')) {
// 	inputNameLabel.style.display = 'none'
// } 
// else true
// } 

btn.addEventListener("click", formSend)

function formSend(event) {
	//Border или Color по умолчанию, если введено правильно 
	if (phoneTest(inputPhone)) {
		inputPhone.style.border = "1px solid #240202"
	}
	if (loginTest(inputName)) {
		inputName.style.border = "1px solid #240202"
	}
	//Валидация
	if (phoneTest(inputPhone) && loginTest(inputName) && !(inputName.value === '') && !(inputPhone.value === '')) {
	} else
	if (!phoneTest(inputPhone) || (inputPhone.value === '')) {
		event.preventDefault()
		inputPhone.style.border = "1px solid #DF2030"
	}
	if (!loginTest(inputName) || (inputName.value === '')) {
		event.preventDefault()
		inputName.style.border = "1px solid #DF2030"
	}
}
 
 function loginTest(input) {
	return /^[a-zA-zа-яА-я<<>>""]{1}[a-zA-Zа-яА-Я<<>>""]{3,20}$/.test(input.value)
 }
 function phoneTest(input) {
	return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value)
 }

// animation blocks
const animItems = document.querySelectorAll('.animated-items');
  
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
	for (let index = 0; index < animItems.length; index++) {
	  const animItem = animItems[index];
	  const animItemHeight = animItem.offsetHeight;
	  const animItemOffset = offset(animItem).top;
	  const animStart = 2;
	  let animItemPoint = window.innerHeight - animItemHeight / animStart;

	  if (animItemHeight > window.innerHeight) {
		animItemPoint = window.innerHeight - window.innerHeight / animStart;
	  }
	  if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
		animItem.classList.add('animate');
	  } else {
		//animItem.classList.remove('animate');
	  }

	}
	function offset(el) {
	  const rect = el.getBoundingClientRect(),
	  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	  return {top: rect.top + scrollTop, left:rect.left + scrollLeft}
	}
  }
}