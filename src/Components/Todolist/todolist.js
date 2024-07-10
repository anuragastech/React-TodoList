import React, { Component } from "react";
import "./todolist.css";

class Todolist extends Component {
  state = {
    data: "",
    items: [],
  };

  clickChange = (event) => {
    this.setState({
      data: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { data } = this.state;
    const x = this.state.items;
    x.push(data);
    this.setState({
      items: x,
      data:"",
    });
  };


  deleteItem=((key)=>{

    const allItems=this.state.items
    allItems.splice(key, 1)

        this.setState({
            items: allItems
        });

  })
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
        <h1>Todo App </h1>

          <input
            value={this.state.data}
            text="text"
            onChange={this.clickChange}
            placeholder="enter items"
          ></input>
        </form>
        <ul>
          {items.map((datas, index) => (
            <li key={index}>{datas} <i class="fa-regular fa-trash-can" onClick={() => this.deleteItem(index)}></i></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
