import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  let html = '<ul class="recipe__tags">';
  for (let tag of tags) {
    html += `<li>${tag}</li>`;
  }
  html += '</ul>';
  return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }
  html += '</span>';
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.name}" />
    <figcaption>
      ${tagsTemplate(recipe.tags)}
      <h2><a href="#">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

function renderRecipes(recipeList) {
  const outputElement = document.querySelector('main');
  let recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  outputElement.innerHTML = recipeHTML;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
  const searchButton = document.querySelector('.searchingContainer button');
  searchButton.addEventListener('click', searchHandler);
}

function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      (recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (recipe.recipeIngredient && recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query)))
    );
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.querySelector('#searchingBar');
  const query = searchInput.value.trim();
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}

init();