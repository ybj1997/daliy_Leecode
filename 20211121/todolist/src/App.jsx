import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import './index.less'

export default class APP extends Component {
    render() {
        return (
            <div className="todo-Container">
                <div className="todo-wrap">
                    <Header/>
                    <List />
                    <Footer/>
                </div>
            </div>
        )
    }
}
