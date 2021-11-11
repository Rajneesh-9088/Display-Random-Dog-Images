import React, { Component } from "react";
import DogList from "./DogList"
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
       fetch("https://dog.ceo/api/breeds/image/random/1")
       .then((res) => res.json())
       .then((data) => {
            this.setState({dogs: data.message})
       })
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to Dog World</h1>
         <DogList dogs={this.state.dogs} />
     
      </div>
    );
  }
}

export default HomeScreen;
