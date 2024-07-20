import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    // Logic for component mount
    // console.log("component did mount");
  }

  render() {
    return (
      <div className="p-5 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 underline">
          About Us
        </h1>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          This is a food Website
        </h1>
        <UserClass
          name={"Vikram Singh (class)"}
          location={"Gurgaon, Haryana class"}
        />
      </div>
    );
  }
}

export default About;
