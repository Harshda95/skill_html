import States from "./states";
import ToDo from "./ToDo";
import Toggle from "./toggle";
import { useState } from "react";
import User from "./user";
import Info from "./Info";
import Hooks from "./Hooks";
import UserCard from "./UserCard";
function Color() {
  
  return <h1>red color</h1>;
}
const App = () => {
  let info = {
    name: "harshda",
    class: 12,
    city: "hajipur",
  };
  const [user, setUser] = useState(true);
   const [counter ,setcounter]=useState(0)
  return (
    <div>
      <h1>hello I am harshda </h1>
      <p>a b.tech student</p>
      <button style={btnStyle}> click me!</button>
      <Color />
      <ToDo />
      <States />
      <br />
      <User data={info} />

      {user ? <Toggle /> : null}
      <button onClick={() => setUser(!user)}>toggle</button>

      <Info />
      <Hooks count={counter} setcount={setcounter}/>
      <UserCard/>
     
    </div>
  );
};

const btnStyle = {
  color: "red",
};

export default App;
