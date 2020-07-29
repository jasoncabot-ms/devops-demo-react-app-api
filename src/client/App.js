import React, { Component } from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";
import './app.css';
import ReactImage from './react.png';

const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: 'f0c70f53-d039-44ee-8771-55fe7207e80d',
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
});
appInsights.loadAppInsights();

class App extends Component {
  state = { message: null };

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

export default withAITracking(reactPlugin, App);
