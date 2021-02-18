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
          <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Frank1.png?alt=media&token=a457c8eb-04be-4004-b522-217cd0d82eb5" />
          <p>로제떡볶이</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-2위-</p></div>
          <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Frank2.png?alt=media&token=8c905b23-cff1-429e-81ff-f1ed83063607" />
          <p>얼큰국물떡볶이</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-3위-</p></div>
          <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Frank3.png?alt=media&token=b82d0b4e-3435-41d2-8455-a01041af5db2" />
          <p>로제리조떡</p>
        </div>
        <div className="home_rank_one">
          <div className="home_rank_number"><p>-4위-</p></div>
          <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Frank4.png?alt=media&token=2e841203-1090-4caa-957c-041c935e9fda" />
          <p>짜파구떡</p>
        </div>

      </div>
    </div>
  )
}

export default Home;