import React from "react";
import {  HashRouter as Router,  Switch,  Route, Link} from "react-router-dom";
import MenuNav from "./MenuNav";
import Navigation from "../components/Navigation";
import Food1 from "./Food1";
import Food2 from "./Food2";
import Food3 from "./Food3";
import Food4 from "./Food4";
import Food5 from "./Food5";

const MenuRouter=()=>{
    
    return(
        <Router>
            <MenuNav />
            <Switch>
            <Route exact path="/menu/"><Food1/></Route>
            <Route path="/menu/2"><Food2/></Route>  
            <Route path="/menu/3"><Food3/></Route>
            <Route path="/menu/4"><Food4/></Route>   
            <Route path="/menu/5"><Food5/></Route>            
            </Switch>
        </Router>

    );
}

export default MenuRouter;