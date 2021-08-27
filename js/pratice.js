const searchButton = () => {
    const inputField = document.getElementById('input');
    const inputText = inputField.value;
    // console.log(inputText);
    inputField.value = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => loadData(data.meals))
}

const loadData = (meals) => {
    // console.log(meals);
    const sectionFood = document.getElementById('items');
    sectionFood.textContent = '';
    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `<div>
            <img src="${meal.strMealThumb}" alt="">
                <h3>${meal.strMeal}</h3>
                <div>
                `
        sectionFood.appendChild(div);

    })

}