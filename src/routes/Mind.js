import React from 'react'

const Mind = () => {
    return (
        <div>
            <h1>대표인사</h1>

            <div style={{display : "flex"}}>
                
                <div className="Mind_Text">

                        <h1>무엇이 성공인가</h1>
                    <div className="Mind_Text_One">
                        <p>성공한 사람들은 다른 사람들에게 힘을 주는 사람들입니다.</p>
                        <p>다른 사람을 돕다 보면 당신도 성공할 수 있습니다.</p>
                        <p>-백종원</p>
                    </div>

                    <div className="Mind_Text_Two">
                        <p>많은 사람들은 타인 앞에서 당당하고 싶어 합니다.</p>
                        <p>그러나 진정한 당당함은 내 자신에게 당당할 수 있는것.</p>
                        <p>그 진정한 당당함을 꿈꿉니다.</p>
                        <p>두떡 분당점 대표</p>
                        <img src="\images\sign.jpg" style={{ width: "200px", height: "100px" }} />
                    </div>
                </div>

                <div className="Mind_Img">
                    <img src="\images\repre.jpg" style={{ width : "120%", height: "700px" }} />
                </div>
           
           </div>


        </div>
    )
}

export default Mind;