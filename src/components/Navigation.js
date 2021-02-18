import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { storageService } from '../fbase';



const Navigation = () => {

    return (
        <div className="Navigation">
            <nav>
                <ul >
                    <li><Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Freallogo.png?alt=media&token=67c363cc-abe8-4545-9de7-ca69b11581b2" /></Link></li>
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

