import React from "react"
import TodoItem from "./TodoItem.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    const storeData = localStorage.getItem("userToDos")
    if (storeData) {
      this.state = {
        todoItems: JSON.parse(storeData)
      }
    } else {
      this.state = {
        todoItems: [],
        inputText: ""
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }

  addTodoItem = () => {
    const currentItems = this.state.todoItems
    const item = { text: this.state.inputText, done: false }
    currentItems.push(item)
    localStorage.setItem("userToDos", JSON.stringify(currentItems))
    this.setState({
      todoItems: currentItems
    })
  }

  updatedTodoItem = (index, done) => {
    const currentItems = this.state.todoItems
    currentItems[index].done = done
    localStorage.setItem("userToDos", JSON.stringify(currentItems))
    this.setState({
      todoItems: currentItems
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h1><span role="img" aria-label="Writing Hand">&#x270D;</span> TO DO<br />
          <span role="img" aria-label="White heavy check mark">&#x2705;</span> TA DAAM!
        </h1>
        <div className="formSection">
          <form className="form">
            <input id="formInput" type="text" onChange={this.handleInputChange} />
            <button type="button" onClick={this.addTodoItem}>ADD</button>
          </form>
          {this.state.todoItems.map((item, index) => (
            <TodoItem
              text={item.text}
              key={index}
              index={index}
              done={item.done}
              updatedTodoItem={this.updatedTodoItem} />
          ))}
        </div>
      </div>
    )
  }

}

export default App
