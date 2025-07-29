import { useState } from "react"
function States() {

    const [fruit ,setfruit]=useState("apple")
    const [count,setcount]=useState(0);
    const [rcount,setrcount]=useState(100);

   

    function handleFruit() {
        setfruit("banana")
    }
    return(
        <div>
            <h1>states in react</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>click to change fruit</button>
            <h1>count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>increase count</button>
             <h1>rcount:{rcount}</h1>
             <button onClick={()=>setrcount(rcount-1)}>reverse count</button>
        </div>
    )
}

export default States