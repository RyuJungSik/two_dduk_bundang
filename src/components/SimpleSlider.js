import React from 'react';
import Slider from 'infinite-react-carousel';


const SimpleSlider = () => (
    <Slider dots>
      <div>
      <img src="\images\1.jpg" style={{ width: "98%", height: "400px", border : "2px solid black" }} />
      </div>

      <div>
      <img src="\images\1.jpg" style={{ width: "99%", height: "400px" , border : "2px solid black" }} />
      </div>

      <div>
      <img src="\images\1.jpg" style={{ width: "99%", height: "400px" , border : "2px solid black" }} />
      </div>
      
    </Slider>
  );

  export default SimpleSlider;