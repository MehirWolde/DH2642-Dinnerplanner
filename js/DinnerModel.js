class DinnerModel{
    constructor(guests =2, dishes=[], currentDish=null, observers=[]){
        this.observers = observers;
        this.setNumberOfGuests(guests);
        this.dishes = dishes;
        this.currentDish = currentDish;
    }
    setNumberOfGuests(x){ 
        if(Number.isInteger(x) && x > 0){
            if(x !== this.numberOfGuests){
                this.numberOfGuests=x;
                this.notifyObservers();
            }
            else{
            }
        }   
        else{
            throw new Error("invalid input")
        }
    } 
    
    addToMenu(dish){
        if(!(this.dishes.includes(dish))) {
            this.dishes = [...this.dishes, dish];
            this.notifyObservers();
        }
    }
    removeFromMenu(dishData){
        let containing = false;
        this.dishes.forEach( dish => {
            if(dish.id === dishData.id)
                containing = true;
           }  
        )
        if(containing){
            this.dishes = [...this.dishes].filter(dish => dish.id !== dishData.id);
            this.notifyObservers();
        }
    }
    setCurrentDish(id){
        if(this.currentDish === id){
            return;
        }
        else{
            this.currentDish = id;
        } 

	    /* TODO set the model current dish property to the new value */;
	    this.currentDishDetails= null;  
        this.currentDishError= null; 
        this.notifyObservers();
        /* TODO notify observers, because current dish, details, error changed! */

        if(this.currentDish !== null){      
            DishSource.getDishDetails(id)   
            .then(dish => { 
                            if(this.currentDish === id){
                                this.currentDishDetails = dish;
                                this.notifyObservers();
                            }
                        })
            .catch( err => {
                            if(this.currentDish === id){
                                this.currentDishError = err;
                                this.notifyObservers();
                            }
                        })
        }
    }
    
    addObserver(callback){
        this.observers = [...this.observers, callback]
    }

    removeObserver(callback){
        this.observers = this.observers.filter(obs => obs !== callback)
    }

    notifyObservers() {
        this.observers.forEach(cb => {
            try {
                cb();
            } catch (error) {
                console.log(error);
            }
        });
    }

    setDishes(dishes) { 
        this.dishes= [...dishes];
        this.notifyObservers();
    }
}

function getIngredients(dishArr){
    const result={}; // object used as mapping
    dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
    if(!result[i.id])
        result[i.id]={...i};
    else
        {
            result[i.id].amount += i.amount;
        }
    }))
    return Object.values(result);
}