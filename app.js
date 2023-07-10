console.log("hello world");

const btn = document.querySelector(".btn__submit");
const list = document.querySelectorAll(".lists");
const selectedNum = document.querySelector(".selected__num");
const frontCard = document.querySelector(".card");
const backCard = document.querySelector(".card__2");

list.forEach((item) => {
  item.addEventListener("click", function () {
    selectedNum.textContent = item.textContent;
    item.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  backCard.classList.remove("hidden");
  frontCard.classList.add("hidden");
});
