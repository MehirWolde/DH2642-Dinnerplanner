const Show={
    props:["hash"], 
    data(){ return {hashState:window.location.hash}; },
    created(){  
        this.listener=()=> { this.hashState = window.location.hash; 
        defaultRoute();};
        window.addEventListener("hashchange", this.listener);
    },
    unmounted(){ window.removeEventListener("hashchange", this.listener); },
    render(){
        return  <div class={this.hashState === this.hash? "" : "hidden"}>
                    {this.$slots.default()}
                </div>;  // for now
    },
}