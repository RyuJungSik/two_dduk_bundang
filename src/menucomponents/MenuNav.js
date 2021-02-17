import React, { useState } from 'react';
import {  HashRouter as Router,  Switch,  Route, Link} from "react-router-dom";

const MenuNav=()=>{
    const[btnColors, setBtnColor]=useState(["white", "rgba(138, 43, 226, 0.2)", "rgba(138, 43, 226, 0.2)", "rgba(138, 43, 226, 0.2)", "rgba(138, 43, 226, 0.2)"]);

    const onClick=(event)=>{
        const{target : {id}}=event;
        const newBtnColors = Array.from({length: 5}, () => "rgba(138, 43, 226, 0.2)")

        if(id==='menu1'){
           
            newBtnColors[0]="white";
            setBtnColor(newBtnColors)
        }
        else if(id==='menu2'){
            newBtnColors[1]="white";
            setBtnColor(newBtnColors)
        }
         else if(id==='menu3'){
            newBtnColors[2]="white";
            setBtnColor(newBtnColors)
        }
        else if(id==='menu4'){
            newBtnColors[3]="white";
            setBtnColor(newBtnColors)
        }
        else if(id==='menu5'){
            newBtnColors[4]="white";
            setBtnColor(newBtnColors)
        }


    }

    return (     
                <div className="MenuNavigation">
                    <nav>
                        <ul>
                            <li><Link to="/menu/"><div id="menu1" onClick={onClick} style={{backgroundColor : btnColors[0]}}>떡볶이</div></Link></li>
                            <li><Link to="/menu/2"><div id="menu2" onClick={onClick} style={{backgroundColor : btnColors[1]}}>리조또 / 닭발</div></Link></li>
                            <li><Link to="/menu/3"><div id="menu3" onClick={onClick} style={{backgroundColor : btnColors[2]}}>사이드</div></Link></li>
                            <li><Link to="/menu/5"><div id="menu4" onClick={onClick} style={{backgroundColor : btnColors[3]}}>세트메뉴</div></Link></li>
                            <li><Link to="/menu/4"><div id="menu5" onClick={onClick} style={{backgroundColor : btnColors[4]}}>음료</div></Link></li>                      
                        </ul>
                    </nav>
                </div>
    )
}

export default MenuNav;