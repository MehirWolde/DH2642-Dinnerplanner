function SearchFormView(props){
    return(
        <div>
            <input placeholder="Search for dish..." onInput={ e=> props.onText(e.target.value) }/>

            <select onChange={e=>props.onDishType(e.target.value)}>
                <option>Choose!</option>
                {props.options.map(
                    opt => {return (<option key={opt}>{opt}</option>)} 
                )}
            </select>

            <button onClick={event=> props.onSearch()}>Search!</button>
            <button onClick={event=> window.location.hash="#summary"}>Summary</button>
            
        </div>
    )
}

function SearchResultsView(props) {
    return (
        <div class="searchBlocks">
            {props.searchResults.map(dish =>{ return(
                <span class="searchResult" key={dish.id} onClick={e =>{props.dishChosen(dish.id); window.location.hash="#details";}}>
                    <img src= {"https://spoonacular.com/recipeImages/" + dish.image}></img>
                    <div>
                        {dish.title}
                    </div>
                </span>)}
            )}
        </div>
    );
}