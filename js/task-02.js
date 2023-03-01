const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector (`#ingredients`);
console.log(ingredientsEl); 

const createIngredientsList = date => 
date.map(element => {
  const ingredientsList = document.createElement(`li`);
  ingredientsList.textContent = element;
  ingredientsList.classList.add(`item`);
  return ingredientsList
});

const ingredientsAdd = createIngredientsList(ingredients);
ingredientsEl.append(...ingredientsAdd);
console.log(ingredientsEl)


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.