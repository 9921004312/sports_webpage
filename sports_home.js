var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Increment slide index
  slideIndex++;

  // Reset slide index if it exceeds the total number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';

  // Call the function again after 3 seconds
  setTimeout(showSlides, 3000);
}
