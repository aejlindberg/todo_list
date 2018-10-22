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
        todoItems: [], // store every value which we passing to our todo list
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
      <div>
        <form>
          <input type="text" onChange={this.handleInputChange} />
          <button type="button" onClick={this.addTodoItem}>Add</button>
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
    )
  }

}

export default App
