import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("#mealList");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const fetchDataOnPageLoad = async () => {
    try {
      const defaultKeyword = "";
      const result = await DataSource.searchMeal(defaultKeyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mealListElement.innerHTML = "";

    results.forEach((meal) => {
      const { strMeal, strMealThumb, strArea, strYoutube } = meal;
      const mealElement = createMealElement(
        strMeal,
        strMealThumb,
        strArea,
        strYoutube,
        meal
      );

      mealListElement.appendChild(mealElement);
    });
  };

  const createMealElement = (
    strMeal,
    strMealThumb,
    strArea,
    strYoutube,
    meal
  ) => {
    const mealElement = document.createElement("div");
    mealElement.classList.add("meal");

    mealElement.innerHTML = `
      <img src="${strMealThumb}" alt="Meals" />
      <div class="meal-info">
        <h3>${strMeal}</h3>
        <p>${strArea}</p>
      </div>

      <div class="overview">
        <p>Bahan:</p>
        <ul>
          ${createIngredientList(meal)}
        </ul>
        <p>Video instruksi:</p>
        <p>
          <a href="${strYoutube}" target="_blank">Tonton video YouTube</a>
        </p>
      </div>
    `;

    return mealElement;
  };

  const createIngredientList = (meal) => {
    const ingredientList = [];

    for (let i = 1; i <= 20; i++) {
      const measure = meal[`strMeasure${i}`];
      const ingredient = meal[`strIngredient${i}`];

      if (measure && ingredient) {
        ingredientList.push(`<li>${measure} ${ingredient}</li>`);
      }
    }

    return ingredientList.join("");
  };

  const fallbackResult = (message) => {
    mealListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;

  fetchDataOnPageLoad();
};

export default main;
