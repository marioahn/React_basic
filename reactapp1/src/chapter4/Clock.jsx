// componet는 항상 Book처럼 대.문자로!
import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;