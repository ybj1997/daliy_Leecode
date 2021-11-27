import React, { Component } from 'react'

export default class Header extends Component {

    headerClick = ()=>{
        console.log('header');
    }
    headerClick2 = ()=>{}
    render() {
        return (
            <div onClick={this.headerClick}>
                <div onClick={this.headerClick2}></div>
            </div>
        )
    }
}
