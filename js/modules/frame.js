export const frame = () => {
  const play = document.querySelectorAll("#player");
  const modal = document.querySelector(".modal");
  var iframes = document.querySelectorAll("iframe");

  play.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.remove("modal__close");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.add("modal__close");
    iframes.forEach((item) => {
      item.src = item.src;
    });
  });
};
