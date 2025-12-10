// Computational Thinking

// First I will write the functions that control of Background Music of my homepage

// Then I will go to write functions child page "buy tickets" to let user select different payment method

// Finally I will write a function that we leant in the class to let the searching function work:
            // I should import the list of my card firstly
            // Then I need to generate a random number, and let a random card's Html append into the index.html file
            // After that I need to use filter function to sort the contents of my list
            // Finally link the button with functions

const playButton = document.getElementById('bgm_button');
const music = document.getElementById('bgm');

if (playButton && music) {
    playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
}

document.addEventListener("DOMContentLoaded", () => {

    function paymentDetails() {
        const paymentMethod = document.getElementById("payment");
        const cardContainer = document.querySelector(".debitcard");
        const paypalContainer = document.querySelector(".paypal");

        cardContainer.classList.add("hide");
        paypalContainer.classList.add("hide");

        if (paymentMethod.value === "creditcard") {
            cardContainer.classList.remove("hide");
        } else if (paymentMethod.value === "paypal") {
            paypalContainer.classList.remove("hide");
        }
    }

    const paymentMethod = document.getElementById("payment");
    if (paymentMethod) {
        paymentMethod.addEventListener("change", paymentDetails);
    }

});



import campingSites from "./nature.mjs";

function campingCard(card) {
    return `
    <section class="content_card1">

            <div class="card_img1"><img src="${card.imgSrc}" alt="${card.imgAlt}"></div>

            <div class="card_text1">
                <h2>${card.name}</h2>
                <p>
                  ${card.description}
                </p>
            </div>

        </section>`
}

function renderCamping(campingList) {
    const outputElement = document.querySelector(".searchingimg");
    let campingHTML = campingList.map(card => campingCard(card)).join('')
    // To avoid overwriting the entire main (which includes searchbar, logo, etc.), 
    // we append to the existing content. If you want to replace specific sections, 
    // add a <div id="dynamic-content"></div> in your HTML and target that instead.
    outputElement.innerHTML += campingHTML;
}

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function init() {
    const card = getRandomListEntry(campingSites)
    renderCamping([card]);
    const searchButton = document.querySelector('.searchbar button');
    if (searchButton) {
        searchButton.addEventListener('click', searchHandler);
    }
}

function filterCampingSites(query) {
  query = query.toLowerCase();
  return campingSites.filter(site => {
    return (
      site.name.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query) ||
      (site.tags && site.tags.some(tag => tag.toLowerCase().includes(query)))
    );
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  // Changed to querySelector since no ID on input; add id="searchingBar" to the input in index.html for better targeting
  const searchInput = document.querySelector('.searchbar input');
  if (searchInput) {
    const query = searchInput.value.trim();
    const filtered = filterCampingSites(query);
    // To prevent duplicating content on multiple searches, you might want to clear dynamic content first.
    // For now, it appends. Add a container in HTML for better control.
    renderCamping(filtered);
  }
}

if (document.body.id == "homepage"){
    init();
}




