

async function getData(url) {
    try {
         let res = await fetch(url)
        let data = await res.json();
        return data;
        
        // let res = await fetch(url);
        // let data = await res.json();
        // console.log('data:', data)
        
        // return data;
    }
    catch (err) {
        console.log('err:', err)
    }
}

function appendData(recipes, parent) {
    console.log('heee',recipes.meals);
    recipes.meals.forEach(({ strMeal, strCategory, strArea, strInstructions }) => {
           console.log('strMeal, strCategory, strArea, strInstructions:', strMeal, strCategory, strArea, strInstructions)
        //    let div = document.createElement('div')
           let Tag = document.createElement('p');
            let Tag1 = document.createElement('p');
            Tag.innerHTML = `<h4>Dish Name:</h4> <h3>${strMeal}</h3> <br><h4>Category:</h4>  <h3>${strCategory}</h3> <br><h4>Dish:</h4>  <h3>${strArea}</h3><br>`
            Tag1.innerHTML = `<h4>recipe:</h4> <h3>${strInstructions}</h3>`
        // div.append(Tag, Tag1)
        parent.append(Tag, Tag1);
    })
}


// function appendData(meals, strMeal1, parent) {console.log('Meal:', meals)
//     meals.forEach(({ strMeal, strCategory, strArea, strInstructions}) => {
//         if (strMeal1 == strMeal) {
//             let Tag = document.createElement('p');
//             let Tag1 = document.createElement('p');
//             Tag.innerHTML = `<h4>Dish Name:</h4> <h3>${strMeal}</h3> <br><h4>Category:</h4>  <h3>${strCategory}</h3> <br><h4>Dish:</h4>  <h3>${strArea}</h3><br>`
//             Tag1.innerHTML = `<h4>recipe:</h4> <h3>${strInstructions}</h3>`
//             parent.append(Tag, Tag1);
//         }
//     })
// }


export { getData, appendData };


// { meals: [{ strInstructions }] }