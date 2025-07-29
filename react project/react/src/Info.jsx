import { useState } from "react";

const Info=()=>{
    const [skills,setskills]=useState([]);
    const info=(event)=>{
        if(event.target.checked){
            setskills([...skills ,event.target.value ])
        }
        else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h1>
                getting information from check box
            </h1>

            
      <input type="checkBox" id="java" value="java" onChange={info} />
      <label htmlFor="java">java</label>
      <br />
      <br />
      <input type="checkBox" id="css" value="css"onChange={info} />
      <label htmlFor="css">css</label>
      <br />
      <br />
      <input type="checkBox" id="c++" value="c++" onChange={info}/>
      <label htmlFor="c++">c++</label>
      <br />
      <br />
      <input type="checkBox" id="php" value="php"onChange={info} />
      <label htmlFor="php">php</label>
      
      <h4>choosed skills are</h4>
      <h4>{skills.join(", ")}</h4>

        </div>
    )
}

export default Info;