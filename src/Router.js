import React from "react";
import {  HashRouter as Router,  Switch,  Route, Link} from "react-router-dom";
import Navigation from "./components/Navigation";
import Mind from "./routes/Mind";
import Location from "./routes/Location";
import Menu from "./routes/Menu";
import Home from "./routes/Home";
import Event from "./routes/Event";


const AppRouter=()=>{
    
    return(
        <Router>
            <Navigation/>
            <Switch>
            <Route path="/mind"><Mind/></Route>
            <Route path="/grade"><Event/></Route>  
            <Route path="/location"><Location/></Route>
            <Route path="/menu"><Menu/></Route>
            <Route exact path="/"><Home/></Route>
                
            </Switch>
        </Router>

    );
}

export default AppRouter;