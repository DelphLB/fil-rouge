import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type='firstname'
            name='firstname'
            onChange={(e) => this.handleInput(e)}
          />
          <input
            type='lastname'
            name='lastname'
            onChange={(e) => this.handleInput(e)}
          />
          <input
            type='email'
            name='email'
            onChange={(e) => this.handleInput(e)}
          />
          <input
            type='password'
            name='password'
            onChange={(e) => this.handleInput(e)}
          />
          <input
            type='passwordConfirmation'
            name='passwordConfirmation'
            onChange={(e) => this.handleInput(e)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
