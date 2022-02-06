function DetailsView(props) {
    return(
        <div class="detailsPage">
            <h1 class="detailh1">{props.dish.title}</h1>
            <img src= {props.dish.image} class="detailsimg"></img>
            <div>
                <button class="detailsbtn" disabled={props.isDishInMenu} onClick={() => {props.dishAdded(); window.location.hash="#search";}}>Add to menu!</button>
                <button class="detailsbtn" onClick={() => window.location.hash="#search"}>Cancel</button>
            </div>
            
            
            <div class="detailsingr">
                <h3>Price: {props.dish.pricePerServing}</h3>
                <h3>Price for {props.people} guests: {(props.dish.pricePerServing*props.people).toFixed(2)}</h3>
            </div>
            
            <div>
                <ul>
                    <h3>Ingredients:</h3>
                    {props.dish.extendedIngredients.map(x =>
                        {return(
                                <li key={x.name}>{x.name} {(x.amount).toFixed(2)} {x.unit}</li>
                            )})}
                </ul>
                    
            </div>
            <div class="detailsingr">
                <ol>
                    <h3>Recipe:</h3>
                    {
                        props.dish.analyzedInstructions[0].steps.map(x =>
                            {return(
                                <li key={x.step}>{x.step}</li>
                        )})}
                        
                </ol>
            </div>

            <div>
                <a href={props.dish.sourceUrl} target="_blank">
                    More information!
                </a>
            </div>                
           
        </div>
    );
}