const nextButton = document.getElementById('next-button')
const prevButton = document.getElementById('prev-button')
const slider = document.querySelectorAll('.slider')

let currentSlider = 0

nextButton.addEventListener('click', nextSlider)
prevButton.addEventListener('click', prevSlider)

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlider].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if (currentSlider === slider.length - 1) {
    currentSlider = 0
  } else {
    currentSlider++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if (currentSlider === 0) {
    currentSlider = slider.length - 1
  } else {
    currentSlider--
  }
  showSlider()
}