import React from 'react'

const Event=()=>{
    return (
        <div>
            <h1>분당점 공지</h1>
            <div className="Event_Title">
                <p>오픈기념 리뷰 이벤트!</p>
                <p>01/10 ~ 종료일까지</p>
            </div>
            <div className="Event_Desc">
                <img src="https://firebasestorage.googleapis.com/v0/b/twodduk-37b88.appspot.com/o/images%2Fevent.jpg?alt=media&token=f536af09-68c6-429e-b181-0c3b70945522" style={{width: "100%", height: "400px" }} />
                <p>1 . 행사 명칭 : 분당점 오픈기념 리뷰이벤트</p>
                <p>2 . 행사 기간 : 21년 1월 3일 ~ 종료일까지</p>
                <p>3 . 행사 제품 : </p>
                <p>(1) - 스마일감자 3개</p>
                <p>(2) - 고메미트볼 2개</p>
                <p>(3) - 비엔나소세지 6개</p>
                <p>(4) - 치즈떡 6개</p>
                <p>(5) - 메추리알 6개</p>
                <p>4 . 참여 방법 : 배달의 민족 요청사항에 리뷰약속+닉네임+원하시는번호 적어주세요.</p>
            </div>
        </div>
    )
}

export default Event;