import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }

    render(){
        const {name , location} = this.props
        const {count} = this.state

        return(
            <div className="userCard">
                <h1>Count = {count}</h1>
                <button onClick={() => {
                    //NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                    });
                }}>Click For Count Increment</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
}

export default UserClass;