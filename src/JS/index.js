const modalContainer = document.getElementById("modalContainer");
const openButton = document.getElementById("openModal");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", function () {
  modalContainer.style.display = "flex";
  modalContainer.style.backgroundColor = "gray";
});

closeButton.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    modalContainer.style.display = "none";
  }
});
