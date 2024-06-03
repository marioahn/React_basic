import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import useCounter1 from "./useCounter1";

const MAX_CAPACITY = 10; // 최대 수용인원

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); // 커스텀 Hook사용!
    const [count1, increaseCount1] = useCounter1(0); // 비교용, useCounter1 hook사용

    // useEffect? -> 어.떤.값이 변경될 때.만, 그리고 그럴때마다 호출되게 하고 싶은 것
        // 가 아닌가 봄.. 첫 useEffect는 그냥 항상 실행됨
        // 아님. 두 번째도 항-상 실행됨 -> 아니야;;; -> count변화가 없는 경우는 실행안됨(정원 찬 경우)
    // useEffect vs useState!?
    useEffect(() => {  // 항상 실행됨
        console.log("===================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => { // count가 변경될 때만 실행됨
        setIsFull(count >= MAX_CAPACITY)
        console.log(`Current count value: ${count}`);
    }, [count]); // 위말고, 이 useEffect는 의존성배열이 있다

    useEffect(() => { // count가 변경될 때만 실행됨
        setIsFull(count1 >= MAX_CAPACITY)
        console.log(`Current count1 value: ${count1}`);
    }, [count1]); // 위말고, 이 useEffect는 의존성배열이 있다

    return (
        <div>
            <p>{`총 ${count}명 수용했습니다`}</p>
            
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            <br></br>

            <p>총 {count1}번 클릭</p>
            <button onClick={increaseCount1} disabled={isFull}>클릭</button>

            {isFull && <p style={{ color:"red" }}>정원(10)이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;