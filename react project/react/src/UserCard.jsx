import styled from "styled-components";

let Heading=styled.h1`
    color: #0d9378;
    margin: 20px;
    font-size: 2rem;
    `
    const UserImg=styled.img`
        height: 200px;`


const UserCard= ()=>{
    return (
        <>
        <div>
            
        <Heading> user card</Heading>
        <UserImg src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></UserImg>
          
        </div>
        <div>
            <h4>Harshda Gargi</h4>
            <p>student</p>
        </div>
        </>
    )
}
export default UserCard