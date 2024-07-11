import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render() {
    const { name, location } = this.state.userInfo;
    const { count } = this.state;

    // console.log("Child Render");

    return ( 
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            //Never update state variables directly
            this.setState({
              count: count + 1,
            });
          }}>
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Contact: 8727886262</h3>
        <h4>Address: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
