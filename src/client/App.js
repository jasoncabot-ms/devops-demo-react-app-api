import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/message')
      .then(res => res.json())
      .then(({ message }) => this.setState({ message }));
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {message ? <h1>{`Received message: "${message}"`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
