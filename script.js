
  const reviews = document.querySelectorAll(".review");
  let current = 0;

  function showNextReview() {
    reviews[current].classList.remove("active");
    current = (current + 1) % reviews.length;
    reviews[current].classList.add("active");
  }

  setInterval(showNextReview, 2000); 

