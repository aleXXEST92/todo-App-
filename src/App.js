import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    todo:"",
    list: []
  }
  }

  updateInput(key, value) {
    //update state 
    this.setState({
      [key]: value
    });
  }
  addItem () {
    //create new item (todo) with unique id 
    const todo = {
      id: 1 + Math.random(),
      value: this.state.todo.slice()
    };

    const list = [...this.state.list];

    //add new item to list 
    list.push(todo);

    //update state with new list and reset todo input
    this.setState ({
      list,
      todo:""
    });
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    //filter out item that is being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render () {
    return (
      <div className="App">
        <div>
          <h1>Alex's Todo List</h1> 
          <br/>
            <input
              type="text"
              placeholder="Get er done..."
              value={this.state.todo}
              onChange={event => this.updateInput("todo", event.target.value)} 
            />
            <button
              onClick={() => this.addItem()}
            >
              Add
            </button>
            <br/>
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Done
                    </button>
                  </li>
                )
              })}
            </ul>
        </div>
    </div>
    );
  }
}

export default App;
