function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){     
   return  ( 
        <div class="flexParent" >
             <div class="sidebar debug"><SidebarPresenter model={props.model}  /></div>
             <div class="mainContent debug">
                  <Show hash="#search"><SearchPresenter model={props.model} /></Show>
                  <Show hash="#details"><DetailsPresenter model={props.model} /></Show>
                  <Show hash="#summary"><SummaryPresenter model={props.model} /></Show>
             </div>
             <RenderTest />
         </div>  
    );
}

function defaultRoute(){
     if(!["search", "#summary", "#details"].find((knownRoute)=> knownRoute == window.location.hash))
          window.location.hash="#search";
}
defaultRoute(); // when the application loads, set the default route!