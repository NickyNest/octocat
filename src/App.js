import React, { Component } from 'react';
import './App.css';
import ReposList from './components/ReposList';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          repos: [],
          currentRepo: {}
      };
  }

  onClick = (repoId) => {
    this.setState({
      currentRepo: this.state.repos.find(repo => repo.id === repoId)
    },
    () => {console.log(this.state.currentRepo.name);});
    console.log(repoId);
    console.log(this.state.repos.find(repo => repo.id === repoId));
  };

  componentWillMount() {
    fetch('https://api.github.com/orgs/octokit/repos')
        .then(response => response.json())
        .then(data => this.setState({ repos: data, currentRepo: data[0] }));
  }

  render() {
    return (
        <ReposList repos={this.state.repos} onClick={this.onClick}/>
    );
  }
}

export default App;
