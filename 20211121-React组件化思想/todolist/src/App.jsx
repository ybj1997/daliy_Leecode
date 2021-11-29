import React, { Component } from 'react'
import Login from './pages/Login/Login'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import List from './components/List'
import './index.less'

export default class APP extends Component {
    constructor(props) {
        super(props)
        this.acb = React.createRef();
    }
    click= (e)=>{
        console.log(this.acb);
        console.log(e);
    }


    render() {
        return (
            <div className="container" >
                <button onClick={this.click}>点击</button>
                <Login ref={this.acb}>click</Login>
            </div>
        )
    }
}
