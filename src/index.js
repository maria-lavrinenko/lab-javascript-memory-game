const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function

  let canPlay = true;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("locked") || !canPlay) return;

      card.classList.toggle("turned");

      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
      }

      if (memoryGame.pickedCards.length === 2) {
        canPlay = false;
        const cardA = memoryGame.pickedCards[0];
        const cardB = memoryGame.pickedCards[1];

        const sameCard = memoryGame.checkIfPair(
          cardA.dataset.cardName,
          cardB.dataset.cardName
        );
        console.log(cardA, cardB);
        if (sameCard) {
          cardA.classList.add("locked");
          cardB.classList.add("locked");
          canPlay = true;
        } else {
          setTimeout(() => {
            cardA.classList.remove("turned");
            cardB.classList.toggle("turned");
            canPlay = true;
          }, 1000);
        }
        memoryGame.pickedCards = [];
      }
    });
  });

  // let checking = false;

  // function gameInProgress() {
  //   if (checking) {
  //     return;
  //   } else {
  //     this.classList.add("turned");
  //     this.pickedCards.push(this);

  //     if (this.pickedCards.length === 2) {
  //       checking = true;
  //       const [card1, card2] = this.pickedCards;

  //       checkIfPair(card1, card2);
  //       if (!checkIfPair(card1, card2)) {
  //         card1.classList.remove("turned");
  //         card2.classList.remove("turned");
  //         checking = false;
  //       } else {
  //         this.pickedCards.length = 0;
  //         checkIfFinished();
  //       }
  //     }
  //   }
  // }
});
