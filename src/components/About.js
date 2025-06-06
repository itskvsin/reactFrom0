import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is react about page</h2>

                <div>
                    Logged In User : <UserContext.Consumer>
                        {({ loggedInUser }) =>  (
                            <h1 className="font-bold text-xl">{ loggedInUser }</h1>
                        )}
                    </UserContext.Consumer>
                </div>

                <div>
                    <UserClass name={"First(class)"} location={"Ahmedabad Class"}/>
                    {/* <UserClass name={"Second(class)"} location={"Ahmedabad Class"}/> */}
                </div>
            </div>
        )
    }
}

export default About;
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is react about page</h2>

//             <div>
//                 <UserClass name={"Kevin B. Solanki (class)"} location={"Ahmedabad Class"}/>
//             </div>
//         </div>
//     )
// }