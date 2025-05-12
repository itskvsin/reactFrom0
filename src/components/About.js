import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is react about page</h2>
            {/* <User name={"Kevin B. Solanki   (Function)"}/> */}

            <div>
                <UserClass name={"Kevin B. Solanki (class)"} location={"Ahmedabad Class"}/>
            </div>
        </div>
    )
}

export default About;