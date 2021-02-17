import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";



const Navigation = () => {
    return (
        <div className="Navigation">
            <nav>
                <ul >
                    <li><Link to="/"><img src="\images\reallogo.jpg" /></Link></li>
                    <li><Link to="/menu">메뉴소개</Link></li>
                    <li><Link to="/location">매장정보</Link></li>
                    <li><Link to="/grade">분당점 공지</Link></li>
                    <li><Link to="/mind">대표인사</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;

