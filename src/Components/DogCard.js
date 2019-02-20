import React from "react";

class DogCard extends React.Component {

  state = {
    clicked: false
  }

  ruff() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <div>{this.state.clicked ? <h2 className="ruff">RUFF!</h2> : ""}</div>
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.ruff.bind(this)}>Bark</button>
      </div>
    );
  }
}

export default DogCard;
