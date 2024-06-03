import React, { useState } from "react";

// useCounter와 비교해보자ㅇㅇ. 여기선 decrease없음
function useCounter1(initialValue) {
    const [count1, setCount1] = useState(initialValue);

    const increaseCount1 = () => setCount1((count) => count + 1);

    return [count1, increaseCount1];
}

export default useCounter1;