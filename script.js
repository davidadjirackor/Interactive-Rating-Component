// Select all relevant elements
var submitButton = document.querySelector('.submit button');
var mainCard = document.querySelector('.main-card');
var resultCard = document.querySelector('.thank-you-card');
var ratingsNumbers = document.querySelectorAll('.ratings-number p'); 
var messageDisplay = document.querySelector('.message-counter');
var backButton = document.querySelector('.back button');

var selectedRating = 0;

// Loop through all rating elements and add event listeners
ratingsNumbers.forEach(function (rating) {
  rating.addEventListener('click', function () {
    selectedRating = Number(rating.textContent); 
  });
});

submitButton.addEventListener('click', function () {
  if (selectedRating > 0) {
    messageDisplay.textContent = `You selected ${selectedRating} out of 5`;
    mainCard.style.display = 'none';
    resultCard.style.display = 'block';
  } else {
    mainCard.style.display = 'block';
    resultCard.style.display = 'none';
  }
});

backButton.addEventListener('click', function () {
  mainCard.style.display = 'block';
  resultCard.style.display = 'none';
});
 