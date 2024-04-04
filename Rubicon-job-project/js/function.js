// banner-section-slider
document.addEventListener("DOMContentLoaded", function () {
  // slect the content of banner
  const bannerContent = document.querySelectorAll(".banner-content");
  // select the arrow of left and right of banner slider
  const leftArrow = document.querySelector(".fa-arrow-left");
  const rightArrow = document.querySelector(".fa-arrow-right");
  //set the index on zero 0
  let currentSlide = 0;
  //set the interval of slider
  let autoPlayInterval;

  //this function will check the index of curent slide is equal to the parameter index or not
  function showSlide(index) {
    //we will check via forEach loop
    bannerContent.forEach((content, idx) => {
      //if the index to curent slide is equal the parameter index
      if (idx === index) {
        //the content style disply will be block
        content.style.display = "block";
        //else the display will be none
      } else {
        content.style.display = "none";
      }
    });
  }

  //this function will update the left and right arrows visibility
  function updateArrowsVisibility() {
    //that check this if the current index is zero the left visibility is hidden
    leftArrow.style.visibility = currentSlide === 0 ? "hidden" : "visible";
    // if the curent index is one the right visibility is hidden

    rightArrow.style.visibility =
      currentSlide === bannerContent.length - 1 ? "hidden" : "visible";
  }
  //this function help to move next slide
  function moveToNextSlide() {
    //if curent slide value is less from bannerContent arry length
    if (currentSlide < bannerContent.length - 1) {
      //if that condition is ture so we will do increment means we will move next slide
      currentSlide++;
      //else we will move  1st slide mean index 0
    } else {
      currentSlide = 0;
    }

    // in this line we call function with respect to current slide value
    showSlide(currentSlide);
    //this will call the arrows left right function
    updateArrowsVisibility();
  }
  //this function will help to move pervious slide
  function moveToPreviousSlide() {
    //this will check if the current slide is greatter than zero 0
    if (currentSlide > 0) {
      //we decrement mean we will move to return
      currentSlide--;
    } else {
      //else we will move to next
      currentSlide = bannerContent.length - 1;
    }
    // in this line we call function with respect to current slide value
    showSlide(currentSlide);
    //this will call the arrows left right visibility function
    updateArrowsVisibility();
  }

  //this function will us to move next slide
  function startAutoPlay() {
    //this will call move to NextSlide function after 3 seconds
    autoPlayInterval = setInterval(moveToNextSlide, 3000);
  }

  //this function will stop slide
  function stopAutoPlay() {
    //this function will clear the autoplayinterval and will slide moving will automatically stop
    clearInterval(autoPlayInterval);
  }

  //that will be listen the event when cliced on left arrow
  leftArrow.addEventListener("click", function () {
    // and call movetoperviousslide function with help of that we can move to return manually
    moveToPreviousSlide();
  });

  //that will be listen the event when cliced on right arrow
  rightArrow.addEventListener("click", function () {
    // and call movetoperviousslide function with help of that we can move to next manually

    moveToNextSlide();
  });

  // Initialize
  // in this line we call function with respect to current slide value
  showSlide(currentSlide);
  //this will call the arrows left right visibility function
  updateArrowsVisibility();
  //this will call auto play function
  startAutoPlay();
});

//banner img=============================
//we will change the banner images with the help of that function
//let the current index to 0
let currentSlide = 0;
//this will sleect the all elements of banner-img
const slides = document.querySelectorAll(".banner-img");
//this will help to display slides and display the index which has slideindex
function showSlide(slideIndex) {
  //this will display none of all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  //and then display block the specific slide
  slides[slideIndex].style.display = "block";
}

//this function help to move the next slide
function nextSlide() {
  //this will increment
  currentSlide++;
  //if the  slide length is greater than or equal to current slide
  if (currentSlide >= slides.length) {
    //move to index 0
    currentSlide = 0;
  }
  // and show the curent index
  showSlide(currentSlide);
}
//this function help to move the previous slide

function previousSlide() {
  //this decrement the
  currentSlide--;
  //if curent slide length is less zero
  if (currentSlide < 0) {
    //then move to next
    currentSlide = slides.length - 1;
  }

  //show the curent slide
  showSlide(currentSlide);
}
//show the curent slide
showSlide(currentSlide);

// calculator========================================================/
//this function will add the 2 numbers from 2 input values
function calculate() {
  //with the of that we will get value of both input and then convernt into floating point numbers via parse
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  // this condition will check if the input is not a number
  if (isNaN(input1) || isNaN(input2)) {
    //show the msg in result
    document.getElementById("result").innerText = "Please enter valid numbers.";
    //else add the both values
  } else {
    let result = input1 + input2;
    document.getElementById("result").innerText = "Result: " + result;
  }
}

// testmonials-slider=========================================///
//let the index zero
let currentIndex = 0;
//this will slect the all elements of card in the next step u can see
let cards;
//i add the event listner
document.addEventListener("DOMContentLoaded", function () {
  // Show the first card initially
  showCard(currentIndex);
  autoPlay();
});
// this function will add and remove the active class
function showCard(cardIndex) {
  cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    //this will remove the active class from current slide
    card.classList.remove("active");
  });
  // and add the active class on curent index
  cards[cardIndex].classList.add("active");
}

//will help to move next
function NextSlide() {
  // start increment
  currentIndex++;
  //and console the curent index
  console.log(currentIndex);
  //if the curent index is greater than to card length
  if (currentIndex >= cards.length) {
    //go to  index 0
    currentIndex = 0;
  }
  //show the curent index result
  showCard(currentIndex);
}

//will help to move pervious

function prevSlide() {
  // start decrement

  currentIndex--;
  //and console the curent index

  console.log(currentIndex);
  //if the curent index is less than to 0
  if (currentIndex < 0) {
    //move to next
    currentIndex = cards.length - 1;
  }
  //show the curent index result
  showCard(currentIndex);
}

//this function will automatically work after 3 seconds via setinterval

function autoPlay() {
  setInterval(() => {
    NextSlide();
  }, 3000);
}
