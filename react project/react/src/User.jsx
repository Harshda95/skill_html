function User({data}) {

    return (
        <div>
            <h1>props in jsx</h1>
            <h2>{data.name}</h2>
            <h2>{data.class}</h2>
            <h2>{data.city}</h2>
        </div>
    )
    
}
export default User