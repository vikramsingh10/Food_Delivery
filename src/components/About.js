import User from "./User";
import "./About.css";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div className="about-card">
//       <h1>About Us</h1>
//       <h1>This is a food Website</h1>
//       <User name = {"Vikram Singh (function)"}/>
//       <UserClass name = {"Vikram Singh (class)"} location = {"Gurgaon, Haryana class"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mount");
    //To make an API calls it should be done inside componentDidMount only because it helps to render data very quickly same way as useEffect render data in functional based component.
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about-card">
        <h1>About Us</h1>
        <h1>This is a food Website</h1>
        <User name={"Vikram Singh (function)"} />
        <UserClass
          name={"Vikram Singh (class)"}
          location={"Gurgaon, Haryana class"}
        />
        
      </div>
    );
  }
}

export default About;
