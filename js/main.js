const slides = document.querySelectorAll(".slider-card")
const planCards = document.querySelectorAll(".plans-card")
const planCardElements = document.querySelectorAll(".white-color")
let slideCounter = 0

if (window.innerWidth < 960) {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 70}%`
  })
  document.getElementById("next-button").addEventListener("click", () => {
    if (slideCounter < 3) {
      slideCounter = (slideCounter + 1)
      slideSliderImage()
    }
  })
  document.getElementById("previous-button").addEventListener("click", () => {
    if (slideCounter > 0) {
      slideCounter = (slideCounter - 1)
      slideSliderImage()
    }
  })
}
else {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 50}%`
  })
  document.getElementById("next-button").addEventListener("click", () => {
    if (slideCounter < 2) {
      slideCounter = (slideCounter + 1)
      slideSliderImage()
    }
  })
  document.getElementById("previous-button").addEventListener("click", () => {
    if (slideCounter > 0) {
      slideCounter = (slideCounter - 1)
      slideSliderImage()
    }
  })
}

const slideSliderImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideCounter * 100}%)`;
  });
};

// planCards.forEach(planCard => {
//   planCard.addEventListener("mouseover", () => {
//     planCard.style.backgroundColor = "#6f77f1";
//     planCardElements.forEach(element => {
//       element.style.color = "#ffffff"
//     })
//   })
// })

// planCards.forEach(planCard => {
//   planCard.addEventListener("mouseout", () => {
//     planCard.style.backgroundColor = "#ffffff";
//     planCardElements.forEach(element => {
//       element.style.color = "#727272"
//     })
//   })
// })

// function applyEffect(x) {
//   x.style.color = "#ffffff"
// }