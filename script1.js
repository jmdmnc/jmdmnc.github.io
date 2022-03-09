// let navbar = document.querySelector('.navbar')

// document.querySelector('menu-bar').onclick = () =>{
//     navbar.classList.toggle('active');
// }

// document.querySelector('close').onclick = () =>{
//     navbar.classList.remove('active');
// }

// window.onscroll = () =>{

//     navbar.classList.remove('active');

//     if(window.scrollY > 100){
//         document.querySelector('header').classList.add('active');
//     }else{
//         document.querySelector('header').classList.remove('active');
//     }

// }

// let themeToggler = document.querySelector('theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.querySelector('body').classList.add('active');
//     }else{
//         document.querySelector('body').classList.remove('active');
//     }
// }

// document.querySelectorAll('.small-image-1').forEach(images =>{
//     images.onclick = () =>{
//         document.querySelector('.big-image-1').src = images.getAttribute('src');
//     }
// });

// document.querySelectorAll('.small-image-2').forEach(images =>{
//     images.onclick = () =>{
//         document.querySelector('.big-image-2').src = images.getAttribute('src');
//     }
// });

// document.querySelectorAll('.small-image-3').forEach(images =>{
//     images.onclick = () =>{
//         document.querySelector('.big-image-3').src = images.getAttribute('src');
//     }
// });

// let countDate = new Date('aug 1, 2021 00:00:00').getTime();

// function countDown(){

//     let now = new Date().getTime();
// 	gap = countDate - now;

//     let seconds = 1000;
//     let minutes = seconds * 60;
//     let hours = minutes * 60;
//     let days = hours * 24;

//     let d = Math.floor(gap / (days));
// 	let h = Math.floor((gap % (days)) / (hours));
// 	let m = Math.floor((gap % (hours)) / (minutes));
// 	let s = Math.floor((gap % (minutes)) / (seconds));

//     document.getElementById('days').innerText = d;
//     document.getElementById('hours').innerText = h;
//     document.getElementById('minutes').innerText = m;
//     document.getElementById('seconds').innerText = s;

// }

// setInterval(function(){
//     countDown()
// },1000);

// var swiper = new Swiper(".product-slider", {
//     slidesPerView: 3,
//     loop:true,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         550: {
//           slidesPerView: 2,
//         },
//         800: {
//           slidesPerView: 3,
//         },
//         1000: {
//             slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     slidesPerView: 3,
//     loop:true,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 4000,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         550: {
//           slidesPerView: 2,
//         },
//         800: {
//           slidesPerView: 3,
//         },
//         1000: {
//             slidesPerView: 3,
//         },
//     },
// });
let carts = document.querySelectorAll('.cart-btn');

let products = [
    {
        name: 'Tengen Usui',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Luffy Bounceman',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },

    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    },
    {
        name: 'Grey Shirt',
        tag: 'greyshirt',
        price: 15,
        inCart:0
    }
];

for (let i=0; i < carts.length; i++)    {
    carts[i].addEventListener('click', ()=> {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');

	if(productsNumbers){
		document.querySelector('.cart span').textContent =productNumbers;
	}
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.icons a span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.icons a span').textContent = 1;
    }
	setItems(product);

	
	}
	function setItems(product){
		console.log("inside");
		console.log("my prod is", product);
		product.inCart = 1;

		let cartItems = {
			[product.tag]: product
		}
		
		localStorage.setItem("productsInCart", cartItems)
}
// onLoadCartNumbers();




window.addEventListener("DOMContentLoaded", function () {
	// get the form elements defined in your form HTML above
  
	var form = document.getElementById("my-form");
	// var button = document.getElementById("my-form-button");
	var status = document.getElementById("status");
  
	// Success and Error functions for after the form is submitted
  
	function success() {
	  form.reset();
	  status.classList.add("success");
	  status.innerHTML = "Yieee Thank you!";
	}
  
	// function error() {
	//   status.classList.add("error");
	//   status.innerHTML = "Oops! There was a problem.";
	// }
  
	// handle the form submission event
  
	form.addEventListener("submit", function (ev) {
	  ev.preventDefault();
	  var data = new FormData(form);
	  ajax(form.method, form.action, data, success, error);
	});
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
	  if (xhr.readyState !== XMLHttpRequest.DONE) return;
	  if (xhr.status === 200) {
		success(xhr.response, xhr.responseType);
	  } else {
		error(xhr.status, xhr.response, xhr.responseType);
	  }
	};
	xhr.send(data);
  }

//-----------------------remove -------------------
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}