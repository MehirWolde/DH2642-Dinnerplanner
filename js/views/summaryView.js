function SummaryView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <h2 class="summaryViewTitle">Summary for <span title="nr. guests">{props.persons}</span> guests:</h2>
            <button class="backbtn" onClick={e=> window.location.hash="#search"}>Back to search!</button>
            <table class="ingredientTable">
                <tbody>
                    <tr class="ingredientRow">
                        <th class="ingredientHead">Ingredient</th>
                        <th class="ingredientHead">Aisle</th>
                        <th class="ingredientHead">Quantity</th>
                    </tr>

                    {props.ingredients.sort((a,b) => compareIngredients(a,b)).map(i =>
                    {
                        return(
                            <tr class="ingredientRow" key={i.id}>
                                <td class="ingredientRow"> {i.name} </td>
                                <td class="ingredientRow"> {i.aisle}</td>
                                <td class="ingredientRow"> {(props.persons*i.amount).toFixed(2)} {i.unit} </td>
                            </tr>
                        )
                    })
                    }
               </tbody>
            </table>
       </div>
    );
}

function compareIngredients(a,b){
    if(a.aisle < b.aisle)
	   return -1;
    // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!
    if(a.aisle > b.aisle)
        return 1;
        
    // At this point, we know that a.aisle===b.aisle
    else{
        if(a.name < b.name)
            return -1;
        
        if(a.name > b.name)
            return 1;
    
        else    
            throw new Error("ingredient name not unique, something went wrong")
    }

    // TODO compare a.name with b.name, return 1 or -1 based on that

    /* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
       there’s a bug */
}
