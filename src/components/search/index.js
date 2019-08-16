import React, { Component } from 'react'
import './index.scss'
class Search extends Component {
    enterPress = (event) => {
        if (event.key == 'Enter') {
            // alert("按下回车键!");
            this.props.enterPress(event.target.value);
            event.target.value = "";
        }

    }
    render() {
        return (
            <input type="text" onKeyPress={this.enterPress} className="search" placeholder="添加ToDo" required="required" autoComplete="off"></input>
        )
    }
}
export default Search