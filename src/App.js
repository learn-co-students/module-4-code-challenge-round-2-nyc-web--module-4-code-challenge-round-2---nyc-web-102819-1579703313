import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount () {
    fetch(`http://localhost:3000/poems`)
    .then(j => j.json())
    .then(o => {this.setState({poems: o})})
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  poemStateChange = (poem) => {
    this.setState({poems: [...this.state.poems, poem]})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm poemStateChange={this.poemStateChange} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
