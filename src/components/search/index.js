import React, { Component } from 'react'
import './index.scss'
class Search extends Component {
    render(){
        return(
            <input type="text"onKeyPress={this.enterPress}  className="search" placeholder="添加ToDo" required="required" autoComplete="off"></input>
        )
    }
}
export default Search