/*global kakao*/
import React, { useEffect } from 'react'
import MapContent from '../components/MapContent'
import ShopInfo from '../components/ShopInfo'

const Location = () => {

  return (
    <div>
      <h1>매장 위치</h1>
      <div>
        <MapContent />
      </div>
      <ShopInfo />
    </div>
  )
}

export default Location;