function ToDo() {
    function callfun() {
        alert("function called")
    }
    return (
        <>
        <h1>harshda to do list </h1>
        <img style={imagestyle} src="https://images.unsplash.com/photo-1748795303121-02b90e036dec?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="harshda" className="pic"  />
        <ul>
            <li>invent new traffic light </li>
            <li> resaarch a new movie scam</li>
            <li>impro transportantaion</li>
        </ul>
        <button onClick={callfun}>click me</button>
        </>
    )
}

const imagestyle={
   height: "500px",
width: "500px",
};

export default ToDo;