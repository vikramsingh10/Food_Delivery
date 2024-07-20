import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vikramsingh10");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="p-5 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
        <img
          className="w-48 h-auto rounded-full mx-auto mb-4"
          src={avatar_url}
          alt={name}
        />
        <h3 className="text-lg mb-2">Contact: 1234567890</h3>
        <h4 className="text-md text-gray-600">Address: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
