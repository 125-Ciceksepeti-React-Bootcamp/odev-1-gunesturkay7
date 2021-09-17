const cards = document.querySelector(".cards");
const form = document.querySelector(".form-control");
const cardsBtn = document.querySelector(".cards-btn");
const formBtn = document.querySelector(".form-btn");
const modalCloseBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal-wrapper");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const cardSize = 10;
    for (let i = 0; i < cardSize; i++) {
      /*  let html = `
         <div class="card">
                <img src="https://via.placeholder.com/600/771796" alt="" /
                class="card-img">
                <h3 class="card-header">${data[i].title}</h3>
                <p class="card-text">
                 ${data[i].body}
                </p>
                <a href="#" class="card-btn">Here's Why</a>
              </div>
        `;
      cards.innerHTML += html; */

      const card = document.createElement("div");
      card.classList.add("card");
      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", "https://via.placeholder.com/600/771796");
      cardImage.classList.add("card-img");
      const cardTitle = document.createElement("h3");
      cardTitle.innerText = `${data[i].title}`;
      cardTitle.classList.add("card-header");
      const cardText = document.createElement("p");
      cardText.innerText = `${data[i].body}`;
      cardText.classList.add("card-text");
      const cardBtn = document.createElement("a");
      cardBtn.innerText = `Here's Why`;
      cardBtn.classList.add("card-btn");
      card.appendChild(cardImage);
      card.appendChild(cardTitle);
      card.appendChild(cardText);
      card.appendChild(cardBtn);
      cards.appendChild(card);
    }
  });
cardsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("display-none");
  cards.classList.toggle("display-none");
});
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cards.classList.add("display-none");
  form.classList.toggle("display-none");
});

const formSubmit = document.getElementById("myForm");
const company = document.querySelectorAll("#myForm input");
const inputValues = [];
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  company.forEach((item) => {
    inputValues.push(item.value);
  });
  console.log(inputValues);
  inputValues.forEach((value) => {
    console.log(value);
    let html = `
    <p>
    ${value}
    </p>
    `;
    modal.style.display = "block";
    modalContent.innerHTML = html;
  });
});
