import { useState } from "react";

const User = ({ name }) => {

    const [count] = useState(10)
    const [count2] = useState(20)

    return (
        <div className="userCard">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Ahmedabad</h3>
            <h4>Contact: 1234567890</h4>
        </div>
    )
}

export default User;