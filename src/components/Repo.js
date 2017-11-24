import React, { Component } from 'react';

class Repo extends Component {
    onClick = () => {
        this.props.onClick(this.props.repo.id);
    };

    render() {
        return (
            <div className="repo">
                <span>{this.props.repo.id}</span>
                <a className="repo" onClick={this.onClick}>{this.props.repo.name}</a>
            </div>
        );
    }
}

export default Repo;