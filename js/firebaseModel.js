/*const REF= "dinnerModel"+97 ; //  NN is your TW2_TW3 group number
function persistModel(model){
    model.addObserver(function(){
         	firebase.database().ref(REF).set({  // object literal
			guests: model.numberOfGuests,
			dishes: model.dishes,
            currentDish: model.currentDish// TODO dishes, currentDish
		});
    });
}*/

const REF= "dinnerModel"+97;
function persistModel(model){
    let loadingFromFirebase=false;
	model.addObserver(function(){
        if(loadingFromFirebase){
            return;
        }
        firebase.database().ref(REF).set({  // object literal
            guests: model.numberOfGuests,
            dishes: model.dishes,
            currentDish: model.currentDish
        });
    });
    firebase.database().ref(REF).on("value", function(data){
    loadingFromFirebase = true;
    try{
	    if(data.val()){
		    model.setNumberOfGuests(data.val().guests);
            model.setDishes(data.val().dishes || [])
            model.setCurrentDish(data.val().currentDish || null);
	    }
    }
    catch(e){console.log(e);}
    finally{ loadingFromFirebase = false; }
    });
}