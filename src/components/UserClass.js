import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : 'Dummy',
                location : 'default'
            },
        }
    }

    async componentDidMount(){
        //API Call
        const data = await fetch("https://api.github.com/users/itskvsin");
        const json = await data.json();

        this.setState({
            userInfo : json
        })

        // console.log(json)
    }

    render(){

        const {name , avatar_url} = this.state.userInfo;

        return(
            <div className="userCard">
                <h2>Name: {name}</h2>
                <h3>Image: <img src={avatar_url} /></h3>
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
}

export default UserClass;