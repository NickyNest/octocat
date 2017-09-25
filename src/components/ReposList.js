import React, { Component } from 'react';

class ReposList extends Component {
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
            <nav>
                {this.state.repos.map(repo => (
                    <a href="">{repo.name}</a>
                ))}
            </nav>
        );
    }
}

export default ReposList;