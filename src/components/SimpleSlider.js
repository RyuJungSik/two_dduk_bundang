import React from 'react';
import Slider from 'infinite-react-carousel';


const SimpleSlider = () => (
    <Slider dots>
      <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2F1.jpg?alt=media&token=c8ee361f-9b31-4d56-89f0-7f60a7322bde" style={{ width: "98%", height: "400px", border : "2px solid black" }} />
      </div>

      <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2F1.jpg?alt=media&token=c8ee361f-9b31-4d56-89f0-7f60a7322bde" style={{ width: "99%", height: "400px" , border : "2px solid black" }} />
      </div>

      <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2F1.jpg?alt=media&token=c8ee361f-9b31-4d56-89f0-7f60a7322bde" style={{ width: "99%", height: "400px" , border : "2px solid black" }} />
      </div>
      
    </Slider>
  );

  export default SimpleSlider;