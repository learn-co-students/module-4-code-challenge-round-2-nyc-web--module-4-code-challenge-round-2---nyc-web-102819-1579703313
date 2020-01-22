import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:3000/poems'

class App extends React.Component {
  
  
  state = {
    poemsArray: [],
    // readButtom: true
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(poemsArray => this.setState({poemsArray}))
  }

  // handleClick = () => {
  //   this.setState({readButtom: !this.state.readButtom})
  //   // console.log('clicked')
  // }

  render() {

    // console.log(this.state.poemsArray)

    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poemsArray={this.state.poemsArray} handleClick={this.handleClick} readButtom={this.state.readButtom}/>
      </div>
    );

  }
}

export default App;
