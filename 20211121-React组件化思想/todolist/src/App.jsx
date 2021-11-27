import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './index.less'

export default class APP extends Component {
    constructor(props) {
        super(props)
        this.myref = React.createRef();
    }

    componentDidMount() {
        console.log(this.myref);
        console.log(<Header/>,<Footer/>);
    }

    render() {
        return (
            <div className="todo-Container">
                <div className="todo-wrap">
                    <Header ref = {this.myref}/>
                    <List />
                    <Footer />
                </div>
            </div>
        )
    }
}
