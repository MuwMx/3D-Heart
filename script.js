let container = document.querySelector('.container');
let isDragging = false; // Флаг для отслеживания зажата ли мышь

window.addEventListener('mousedown', (e) => {
  isDragging = true; // Начинаем отслеживать только при зажатии мыши
  container.style.animation = "none";
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let x = e.pageX;
    let y = e.pageY;

    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});

window.addEventListener('mouseup', () => {
  isDragging = false; // Прекращаем отслеживать при отпускании мыши
  container.style.animation = "animate 45s linear infinite";
});

window.addEventListener("touchstart", (e) => {
  isDragging = true; // Начинаем отслеживать для сенсорных устройств
  container.style.animation = "none";
});

window.addEventListener("touchmove", (e) => {
  if (isDragging) {
    let x = e.touches[0].pageX;
    let y = e.touches[0].pageY;

    container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});

window.addEventListener("touchend", () => {
  isDragging = false; // Прекращаем отслеживать при завершении касания
  container.style.animation = "animate 45s linear infinite";
});

container.addEventListener('mouseover', () => {
  document.querySelector('.love').style.opacity = "1";
});
