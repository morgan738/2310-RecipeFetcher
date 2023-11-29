let recipes = []
const list = document.querySelector(".list")

function render(){
    const html = recipes.map((recipe) => {
        return `
            <h4>${recipe.name}</h4>
            <img src=${recipe.imageUrl}/>
        `
    })
    list.innerHTML = html.join('')
}

async function fetchRecipes(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/recipes")
    //console.log(response)
    const data = await response.json()
    //console.log(data.data)
    recipes = data.data
    console.log(recipes)
    render()
    
}

fetchRecipes()
