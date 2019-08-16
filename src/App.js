import React, { Component } from 'react';
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: {
        list: [],
        add: (item) => { //add item
          this.setState(preState => {
            let newTodo = preState.todo;
            let list = Object.assign([], newTodo.list);
            list.push({
              text: item,
              id: new Date().getTime(),
              status: 'working'
            });
            newTodo.list = list;
            return {
              todo: newTodo
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div className="root">
        <Header todo={this.state.todo}></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}
export default App