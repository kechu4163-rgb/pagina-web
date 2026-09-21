const tonotoButton = document.querySelector(".tonoto-trigger");
const imageContainer = document.querySelector("#image-container");

tonotoButton.addEventListener("click", () => {
  const image = document.createElement("img");

  image.src = "imagen.png";
  image.alt = "Imagen de Tonoto";
  image.classList.add("random-image");

  const imageWidth = 180;
  const imageHeight = 180;

  const maxX = window.innerWidth - imageWidth;
  const maxY = window.innerHeight - imageHeight;

  const randomX = Math.max(0, Math.random() * maxX);
  const randomY = Math.max(0, Math.random() * maxY);
  const randomRotation = Math.random() * 30 - 15;

  image.style.left = `${randomX}px`;
  image.style.top = `${randomY}px`;
  image.style.transform = `rotate(${randomRotation}deg)`;

  imageContainer.appendChild(image);
});