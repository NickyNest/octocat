import React, { Component } from 'react';
import Repo from './Repo';

class ReposList extends Component {
    render() {
        return (
            <nav>
                {
                    this.props.repos.map(repo => (
                        <Repo key={repo.id} repo={repo} onClick={this.props.onClick} />
                    ))
                }
            </nav>
        );
    }
}

export default ReposList;