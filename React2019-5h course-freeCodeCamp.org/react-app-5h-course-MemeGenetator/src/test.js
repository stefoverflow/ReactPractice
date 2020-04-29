import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      favColor: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          margin: "5px",
          padding: "5px",
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />

        <textarea
          value={this.state.firstName + " " + this.state.lastName}
          style={{ marginTop: "20px" }}
        ></textarea>

        <input type="checkbox" checked={true} />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChangle={this.handleChange}
          />
          Female
        </label>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <h1>{this.state.firstName}</h1>
        <h1>{this.state.lastName}</h1>
        <h1>{"Your favorite color is: " + this.state.favColor}</h1>
      </form>
    );
  }
}

export default App;
