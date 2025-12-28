class Slider {
  constructor(containerSelector) {
    // Знаходимо елементи всередині контейнера
    this.container = document.querySelector(containerSelector);
    this.slides = this.container.querySelectorAll('.slider-item');
    this.prevBtn = this.container.querySelector('.prev-btn');
    this.nextBtn = this.container.querySelector('.next-btn');

    this.currentIndex = 0;

    // Прив'язуємо події
    this.init();
  }

  // Метод для оновлення класів
  updateSlides() {
    this.slides.forEach((slide, index) => {
      if (index === this.currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlides();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  init() {
    // Слухаємо кліки (використовуємо стрілочну функцію, щоб не втратити this)
    this.nextBtn.addEventListener('click', () => this.next());
    this.prevBtn.addEventListener('click', () => this.prev());
  }
}

// Запускаємо наш слайдер
const mainSlider = new Slider('.slider-container');
