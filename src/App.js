import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    form : false,
    favPoems: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(k => this.setState({poems : k}))
  }


  handleClick = () => {
    this.setState({form : !this.state.form})
    console.log(this.state.form)
  }

  addPoem = (thing) => {
    this.setState({poems : [...this.state.poems, thing]})
  }

  handleDelete = (props) => {
    let y = this.state.poems.filter(poem => poem.id !== props.id)
    let x = this.state.favPoems.filter(poem => poem.id !== props.id)
    fetch(`http://localhost:3000/poems/${props.id}`, {
      method: 'DELETE'
    })
    this.setState({favPoems : x})
    this.setState({poems : y})
    console.log("DELETEED")
  }

  handleLike = (props) => {
    if (!props.liked) {
      let x = this.state.poems.find(poem => poem.id === props.id)
      x.liked = true
      this.setState({favPoems : [...this.state.favPoems, x]})
    }
    
  }

  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.handleClick}>Show/hide new poem form</button>
          {this.state.form && <NewPoemForm poems = {this.state.poems} addPoem = {this.addPoem} />}
        </div>
        <div>All Poems</div>
        <PoemsContainer 
        poems = {this.state.poems}
        handleLike = {this.handleLike}
        handleDelete = {this.handleDelete} /> 
        <div>Favorite Poems</div>
        <PoemsContainer 
        poems = {this.state.favPoems} 
        handleLike = {this.handleLike}
        handleDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
