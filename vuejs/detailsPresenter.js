function DetailsPresenter(props) {
    return promiseNoData(props.model.currentDish, props.model.currentDishDetails, props.model.currentDishError) 
    || <DetailsView isDishInMenu={ props.model.dishes.find(d => d.id == props.model.currentDish)}
                    people={props.model.numberOfGuests}
                    dish={props.model.currentDishDetails }
                    dishAdded={() => props.model.addToMenu(props.model.currentDishDetails)}
        />
}