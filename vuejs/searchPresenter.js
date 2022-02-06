const SearchPresenter = {
    data() {
        return{promise: null, data: null, error:null,
                searchQuery: "", searchType: ""};
    },

    props: ["model"],

    created() {
        this.promise = DishSource.searchDishes({});
    },

    watch:{
        'promise': {   // note: not this.promise! 
            immediate:true,  
            handler(){ 
		        this.data= this.error= null;
                if(this.promise){
				    const p= this.promise;
                    this.promise.then(dt=>{if(this.promise===p)this.data=dt;})
                        .catch(er=>{if(this.promise===p)this.error=er});
                }
            }
        }
    },

    render() {
        return <div>
            <SearchFormView options={["starter", "main course", "dessert"]} 
                            onText={t => this.searchQuery = t}
                            onDishType={t => this.searchType = t}
                            onSearch={() => this.promise = 
                                DishSource.searchDishes({query: this.searchQuery, type: this.searchType})}
            />
            {promiseNoData(this.promise, this.data, this.error) ||
            <SearchResultsView searchResults={this.data} dishChosen={dish => this.model.setCurrentDish(dish)}/>}
        </div>
    }
}