const cars = [
  { img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" },
  { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70" },
  { img: "https://images.unsplash.com/photo-1493238792000-8113da705763" },
  { img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c" }
];

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  if (cars[index]) {
    card.querySelector('img').src = cars[index].img;
  }
});
