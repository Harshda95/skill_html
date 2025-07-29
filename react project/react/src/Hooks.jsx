import { useEffect } from "react";

const Hooks=({count,setcount}  )=>{
    const printOne=()=>{
       console.log("print once called");
        
    }
    
    useEffect(()=>{
      printOne()
    },[])

    return(
        <div>
            <h1>learn about hooks</h1>
            <button onClick={()=>setcount(count+1)}>counter {count}</button>
        </div>
    )
}
export default Hooks;