import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkedAlt, faMapMarkerAlt, faPhone, faRoad, fas } from '@fortawesome/free-solid-svg-icons';


const ShopInfo = () => {
    return (
        <div>
            <div>
                <h1>매장정보</h1>
            </div>

            <table>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" style={{ color: "black" }} /> 주  소</td>
                        <td>경기도  성남시  분당구  정자동  158-2  2층</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faPhone} size="1x" style={{ color: "black" }} /> 번  호</td>
                        <td>050-88197-2746</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faClock} size="1x" style={{ color: "black" }} /> 영업  시간</td>
                        <td>매일  -  11:00AM  ~  11:00PM</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faRoad} size="1x" style={{ color: "black" }} /> 배달  지역</td>
                        <td>수내동  ~  삼평동</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default ShopInfo;