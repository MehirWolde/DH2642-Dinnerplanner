const  DishSource={   // JS object creation literal
    apiCall(params) {
     return fetch(BASE_URL+params, {
             "method": "GET",              // HTTP method
             "headers": {                  // HTTP headers
             'X-Mashape-Key' : API_KEY,
             "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          }
     })
       // from HTTP response headers to HTTP response data
       .then(response => response.json())
       .catch(response => {if(response.headers.status != 200) {throw new Error(response.statusText)}})
    }
    ,   // comma between object entries
    searchDishes({type="", query=""}){ 
        return DishSource.apiCall("/recipes/search?"+ new URLSearchParams({query, type}))
        .then(result => result.results)
        .catch(err => {console.error(err)})
    }
    ,   
    getDishDetails(id){ 
        return DishSource.apiCall("/recipes/"+ id + "/information")
        .then(result => result)
        .catch(err => {console.error(err)})
    }
 };