import React, { Component } from 'react';
import './App.css';
import ReposList from './components/ReposList';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          repos: []
      };
  }

  componentWillMount() {
    fetch('https://api.github.com/orgs/octokit/repos')
        .then(response => response.json())
        .then(data => this.setState({ repos: data }));
  }

  render() {
    return (
      <div className="">
        <ReposList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
