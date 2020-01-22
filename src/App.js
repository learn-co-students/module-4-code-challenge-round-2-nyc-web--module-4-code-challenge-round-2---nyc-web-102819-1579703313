import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    form : false 
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

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.handleClick}>Show/hide new poem form</button>
          {this.state.form && <NewPoemForm poems = {this.state.poems} addPoem = {this.addPoem} />}
        </div>
        <PoemsContainer poems = {this.state.poems} />
      </div>
    );
  }
}

export default App;
