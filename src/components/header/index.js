import React, {Component} from 'react'
import './index.scss'
import Search from '../search'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-title">ToDoList</div>
                    <Search enterPress={this.props.todo.add}></Search>
                </div>
            </div>
        )
    }
}
export default Header