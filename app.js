const arritem = [
  {
    name: "bear",
    img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "bird",
    img: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "cat",
    img: "https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "cow",
    img: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "monkey",
    img: "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "dolphin",
    img: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "dragon",
    img: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "fox",
    img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
let preCard;
let count = 0;
let firstItem = "";
let secondsItem = "";
const grid = document.querySelector(".grid");
function randomCard() {
  grid.innerHTML = "";
  const secondArray = arritem.concat(arritem).sort(() => 0.5 - Math.random());

  secondArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = item.name;
    const font = document.createElement("div");
    font.classList.add("the-font");
    const back = document.createElement("div");
    back.classList.add("the-back");
    back.style.backgroundImage = `url(${item.img})`;
    card.appendChild(font);
    card.appendChild(back);
    grid.appendChild(card);
  });
}
randomCard();
grid.addEventListener("click", function (e) {
  const firstcard = e.target;
  if (firstcard.matches(".grid") || preCard === firstcard) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstItem = firstcard.parentNode.dataset.name;
      firstcard.parentNode.classList.add("selected");
      log(firstItem);
    } else {
      secondsItem = firstcard.parentNode.dataset.name;
      firstcard.parentNode.classList.add("selected");
    }
    if (firstItem !== "" && secondsItem !== "") {
      if (firstItem === secondsItem) {
        setTimeout(matchCard, 500);
        setTimeout(resesMatch, 500);
      } else {
        setTimeout(resesMatch, 500);
      }
    }
  }
  preCard = firstcard;
});
function matchCard() {
  const selected = document.querySelectorAll(".selected");
  [...selected].forEach((item) => item.classList.add("matches"));
}
function resesMatch() {
  const matchesLength = document.querySelectorAll(".matches");
  const cardLength = document.querySelectorAll(".card").length;
  count = 0;
  firstItem = "";
  secondsItem = "";
  preCard = null;
  const selected = document.querySelectorAll(".selected");
  [...selected].forEach((item) => item.classList.remove("selected"));
  if (cardLength === matchesLength.length) {
    matchesLength.forEach((item) => item.classList.remove("matches"));
    setTimeout(randomCard, 1000);
  }
}
