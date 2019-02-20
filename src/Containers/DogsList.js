import React, { Component } from "react";
import Dogs from "../dogs";
import DogCard from "../Components/DogCard";

class DogList extends Component {

  state = {
      dogs: Dogs
  };


  render() {
    const dogCards = this.state.dogs.map(dog => <DogCard dog={dog} clicked={this.state.clicked}/>);
    return <div className="dogContainer">{dogCards}</div>;
  }
}

export default DogList;
