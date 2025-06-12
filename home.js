//tool bar function



var alexjplogo = ["images/icons/alexjp-1.png", 
  "images/icons/alexjp-2.png", 
  "images/icons/alexjp-3.png", 
  "images/icons/alexjp-4.png",
  "images/icons/alexjp-5.png",
  "images/icons/alexjp-6.png",
  "images/icons/alexjp-7.png",
  "images/icons/alexjp-8.png",
  "images/icons/alexjp-9.png",
  "images/icons/alexjp-10.png",
  "images/icons/alexjp-11.png",
  "images/icons/alexjp-12.png",
  "images/icons/alexjp-13.png",
  "images/icons/alexjp-14.png",
  "images/icons/alexjp-15.png",
  "images/icons/alexjp-16.png",
  "images/icons/alexjp-17.png",
  "images/icons/alexjp-18.png",
  "images/icons/alexjp-19.png",
  "images/icons/alexjp-20.png",
  "images/icons/alexjp-21.png",
  "images/icons/alexjp-22.png",
  "images/icons/alexjp-23.png",
  "images/icons/alexjp-24.png",
  "images/icons/alexjp-25.png",
  "images/icons/alexjp-26.png",
  "images/icons/alexjp-27.png",
  "images/icons/alexjp-28.png",
  "images/icons/alexjp-29.png",
  "images/icons/alexjp-30.png",
  "images/icons/alexjp-31.png",
  "images/icons/alexjp-32.png",
  "images/icons/alexjp-33.png",
  "images/icons/alexjp-34.png",
  "images/icons/alexjp-35.png",
  "images/icons/alexjp-36.png",
  "images/icons/alexjp-37.png",
  "images/icons/alexjp-38.png",
  "images/icons/alexjp-39.png",
  "images/icons/alexjp-40.png",
  "images/icons/alexjp-41.png",
  "images/icons/alexjp-42.png",
  "images/icons/alexjp-43.png",
  "images/icons/alexjp-44.png",
  "images/icons/alexjp-45.png",
  "images/icons/alexjp-46.png",
  "images/icons/alexjp-47.png",
  "images/icons/alexjp-48.png",
  "images/icons/alexjp-49.png",
  "images/icons/alexjp-50.png"
];

function getRandomalexjplogoImage() {
  var index = Math.floor(Math.random() * alexjplogo.length);
  return alexjplogo[index];
}

$("#alexjplogo-container").hover(
  function() {
    var image = getRandomalexjplogoImage();
    $("#alexjplogo").attr("src", image);
    console.log(image);
  });


  var alexlogo = ["images/icons/alex-1.png", 
    "images/icons/alex-2.png", 
    "images/icons/alex-3.png", 
    "images/icons/alex-4.png",
    "images/icons/alex-5.png",
    "images/icons/alex-6.png",
    "images/icons/alex-7.png",
    "images/icons/alex-8.png",
    "images/icons/alex-9.png",
    "images/icons/alex-10.png",
    "images/icons/alex-11.png",
    "images/icons/alex-12.png",
    "images/icons/alex-13.png",
    "images/icons/alex-14.png",
    "images/icons/alex-15.png",
    "images/icons/alex-16.png",
    "images/icons/alex-17.png",
    "images/icons/alex-18.png",
    "images/icons/alex-19.png",
    "images/icons/alex-20.png",
    "images/icons/alex-21.png",
    "images/icons/alex-22.png",
    "images/icons/alex-23.png",
    "images/icons/alex-24.png",
    "images/icons/alex-25.png",
    "images/icons/alex-26.png",
    "images/icons/alex-27.png",
    "images/icons/alex-28.png",
    "images/icons/alex-29.png",
    "images/icons/alex-30.png",
    "images/icons/alex-31.png",
    "images/icons/alex-32.png",
    "images/icons/alex-33.png",
    "images/icons/alex-34.png",
    "images/icons/alex-35.png",
    "images/icons/alex-36.png",
    "images/icons/alex-37.png",
    "images/icons/alex-38.png",
    "images/icons/alex-39.png",
    "images/icons/alex-40.png",
    "images/icons/alex-41.png",
    "images/icons/alex-42.png",
    "images/icons/alex-43.png",
    "images/icons/alex-44.png",
    "images/icons/alex-45.png",
    "images/icons/alex-46.png",
    "images/icons/alex-47.png",
    "images/icons/alex-48.png",
    "images/icons/alex-49.png",
    "images/icons/alex-50.png"
  ];
  
  function getRandomalexlogoImage() {
    var index = Math.floor(Math.random() * alexlogo.length);
    return alexlogo[index];
  }
  
  $("#alexlogo-container").hover(
    function() {
      var image = getRandomalexlogoImage();
      $("#alexlogo").attr("src", image);
      console.log(image);
    });



// Reset images on mouseout

$("#alexjplogo-container").mouseout(function(){
  $("#alexjplogo").attr("src", "images/logo/alexjp-0.png");
  console.log(image);
});


// Reset images on mouseout

$("#alexlogo-container").mouseout(function(){
  $("#alexlogo").attr("src", "images/logo/alex-0.png");
  console.log(image);
});

// slide show home page

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}