const counters = document.querySelectorAll('.circle');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-count'); // Получаем целевое значение
  const duration = 2000; // Время анимации для всех чисел
  const start = 0; // Начальное значение

  // Эффект для плавного увеличения
  counter.classList.add('animate');

  const startTime = performance.now(); // Засекаем время начала анимации

  const updateCounter = (time) => {
    const elapsedTime = time - startTime; // Время, прошедшее с начала анимации
    const progress = Math.min(elapsedTime / duration, 1); // Процесс прогресса (от 0 до 1)

    const current = Math.floor(start + progress * (target - start)); // Плавное увеличение

    counter.textContent = current + "+"; // Обновляем текст

    if (elapsedTime < duration) {
      requestAnimationFrame(updateCounter); // Запускаем анимацию снова, если ещё не завершено
    } else {
      counter.textContent = target + "+"; // Завершаем анимацию
      counter.classList.remove('animate'); // Убираем эффект после завершения
    }
  };

  requestAnimationFrame(updateCounter); // Запускаем анимацию
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        // Получаем элемент, на который нужно прокрутить
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Плавно прокручиваем страницу до целевого элемента
        window.scrollTo({
            top: targetElement.offsetTop, // Позиция элемента по вертикали
            behavior: 'smooth' // Плавный скролл
        });
    });
});

// Плавная прокрутка на клик по логотипу
document.getElementById("logo").addEventListener("click", function() {
    window.scrollTo({
        top: 0, // Прокручиваем до самого верха
        left: 0, // Прокручиваем по горизонтали до самого левого края
        behavior: "smooth"  // Плавная прокрутка
    });
});

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'custom-bullet',
      bulletActiveClass: 'custom-bullet-active',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    }
  });
});

// Обработчик для вопросов FAQ
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', function() {
    // Получаем родительский элемент (faq-item)
    const parentItem = item.closest('.faq-item');
    
    // Закрыть все другие открытые ответы
    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      if (openItem !== parentItem) {
        openItem.classList.remove('active');
      }
    });
    
    // Переключить активность для текущего элемента
    parentItem.classList.toggle('active');
  });
});

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav ul li a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // учёт высоты шапки
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.parentElement.classList.add("active");
    }
  });
});

const openModalBtn = document.getElementById("openModal");

openModalBtn?.addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
});
