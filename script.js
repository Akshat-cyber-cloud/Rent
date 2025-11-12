
const reviews = document.querySelectorAll(".review");
let current = 0;

function showNextReview() {
  reviews[current].classList.remove("active");
  current = (current + 1) % reviews.length;
  reviews[current].classList.add("active");
}

setInterval(showNextReview, 2000);


const signInLink = document.getElementById('signInLink');
const modal = document.getElementById('loginBox');
const closeBtn = document.querySelector('.close');

signInLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



