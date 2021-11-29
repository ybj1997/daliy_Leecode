import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <button className="container">
                {
                    this.props.children
                }                
            </button>
        )
    }
}
