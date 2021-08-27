const searchButton = () => {
    const inputField = document.getElementById('input');
    const inputText = inputField.value;
    // console.log(inputText);
    inputField.value = "";
    if (inputText == '') {
        alert('Write Something please');
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
            .then(res => res.json())
            .then(data => loadData(data.meals))
    }
}

const loadData = meals => {
    // console.log(meals);
    const sectionFood = document.getElementById('items');
    sectionFood.textContent = '';
    if (meals == null) {
        alert('Sorry, Not Available');
    }
    else {
        meals.forEach(meal => {
            // console.log(meal);

            const div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `<div onclick="selectImage(${meal.idMeal})">
            <img src="${meal.strMealThumb}" alt="">
                <h3>${meal.strMeal}</h3>
                <div>
                `
            sectionFood.appendChild(div);

        })
    }

}

const selectImage = Ids => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Ids}`)
        .then(res => res.json())
        .then(data => singleItemShow(data.meals[0]))
}

const singleItemShow = item => {
    const singleItem = document.getElementById('single-item');
    singleItem.textContent = '';
    console.log(item);

    const div = document.createElement('div');
    div.classList.add('single-item-style');
    div.innerHTML = `
           <div>
           <img width='300px' src="${item.strMealThumb}" alt="">
                    <h3>${item.strMeal}</h3>
                    <a target="_blank" href="${item.strYoutube}"><button>Watch the Recipe</button></a>
            </div>
           `
    singleItem.appendChild(div);

}