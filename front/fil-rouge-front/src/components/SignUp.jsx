import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "changer le titre" };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div className='SignupComponent'>
        <h1>{this.state.title}</h1>
        <input type='email' name='email' onChange={this.handleInput} />
      </div>
    );
  }
}
