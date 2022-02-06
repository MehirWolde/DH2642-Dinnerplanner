function SidebarPresenter(props){   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests} 
                        setGuests= { guests => props.model.setNumberOfGuests(guests)}
                        dishes = {props.model.dishes}
                        removeDish ={dish => props.model.removeFromMenu(dish)}
                        dishChoice = {dish => props.model.setCurrentDish(dish)}
     />
} 