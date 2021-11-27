import React, { Component } from 'react'

export default class Footer extends Component {
    footerClick = ()=>{
        console.log('footer');
    }
    
    render() {
        return (
            <div onClick={this.footerClick}>
                
            </div>
        )
    }
}
