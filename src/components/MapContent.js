/*global kakao*/
import React, { useEffect } from 'react'



const MapContent = () => {

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    var iwContent = 
    '<div style="padding:5px">영영키친 2층<br><a href="https://map.kakao.com/link/map/경기 성남시 분당구 성남대로331번길 9-6,37.365264512305174, 127.10676860117488" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/경기 성남시 분당구 성남대로331번길 9-6,37.365264512305174, 127.10676860117488" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent
    });

    infowindow.open(map, marker); 
  }, [])


  return (
    <div>
      <div id="map" style={{
        width: "100%",
        height: "400px",
        border: "1px solid black"
      }}></div>

    </div>
  )
}

export default MapContent;