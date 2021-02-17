import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SimpleSlider from '../components/SimpleSlider';


const Home = () => {

  return (
    <div className="home">
      <div className="home_img">
        <SimpleSlider/>
          </div>
      <h1>분당점 이달의 인기메뉴</h1>
      <div className="home_rank" >

        <div className="home_rank_one">
          <div className="home_rank_number">
            <p> <FontAwesomeIcon icon={faMedal} size="1x" style={{ color: "white" }} /> 1위<FontAwesomeIcon icon={faMedal} size="2x" style={{ color: "white" }} /></p>
          </div>
          <img src="http://twodduk.com/layouts/dudduk_main/image/menu01.png" />
          <p>로제떡볶이</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-2위-</p></div>
          <img src="http://twodduk.com/layouts/dudduk_main/image/menu03.png" />
          <p>국물떡볶이</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-3위-</p></div>
          <img src="http://twodduk.com/layouts/dudduk_main/image/menu02.png" />
          <p>짜파구떡</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-4위-</p></div>
          <img src="http://twodduk.com/layouts/dudduk_main/image/menu05.png" />
          <p>로제떡볶이</p>
        </div>

      </div>
    </div>
  )
}

export default Home;