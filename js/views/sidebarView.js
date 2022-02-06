function SidebarView(props){

    const types=["starter", "main course", "dessert"];
    function dishType(dish){
        if(dish.dishTypes){
            const tp= dish.dishTypes.filter(value => types.includes(value));
            if(tp.length)
            return tp[0];
        }
        return "";
    }

    function compareDishes(a,b){
        let ai= types.indexOf(dishType(a));
        let bi= types.indexOf(dishType(b)); 
        if (ai < bi){
              return -1
        }
        if (ai > bi){
            return 1;
        } 
        else{
          return 0;
        } 
    }

    return( 
        <div>
        <button disabled={props.guests<=1} onClick={event => props.setGuests(props.guests-1)} > 
        -
        </button>

            <span title="nr. guests"> {props.guests} </span>

        <button onClick={event => props.setGuests(props.guests+1)}> 
        +
        </button>

        <table>
            <tbody class="sidebarelem">
                {
                    [...props.dishes].sort((a,b) => compareDishes(a,b)).map(dish =>{ return(
                        <tr key={dish.id}>
                            <td>
                                <button class="sidebtn" onClick={event => props.removeDish(dish)}>x</button>
                            </td>

                            <td>
                            <a href="" onClick={e=>{e.preventDefault(); 
                                    props.dishChoice(dish.id);
                                    window.location.hash="#details";} }>
                                    {dish.title}</a>
                            </td>

                            <td>
                                {dishType(dish)}
                            </td>

                            <td>
                                {(props.guests*dish.pricePerServing).toFixed(2)}
                            </td>
                        </tr>
                        
                    )})
                }

                <tr>
                    <td></td>
                    <td>
                        Total: 
                    </td>
                    <td></td>
                    <td>
                        {(props.dishes.reduce((acc, b) =>{
                            return acc+props.guests*b.pricePerServing;
                        }, 0)).toFixed(2)
                        }
                    </td>
                </tr>
            </tbody>
        </table>

        </div>
    )
}