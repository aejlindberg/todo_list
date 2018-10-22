import React from "react"

class TodoItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }

handleChecked = () => {
  const index = this.props.index
  const done = !this.state.done
  this.props.updatedTodoItem(index, done)

  this.setState({
    done: !this.state.done
  })
}
render() {
  return (
    <div>
      <input
        type="checkbox"
        checked={this.props.done}
        onChange={this.handleChecked} />
      {this.props.text}
    </div>
  )
}

}

export default TodoItem
