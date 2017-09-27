import React, { Component } from 'react';

class Repo extends Component {
    render() {
        return (
            <a className="repo" href="">{this.props.repo.name}</a>
        );
    }
}

export default Repo;