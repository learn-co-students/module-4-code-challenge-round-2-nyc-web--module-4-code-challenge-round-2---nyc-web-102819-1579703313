import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:3000/poems'

class App extends React.Component {
  
  
  state = {
    poemsArray: [],
    // readButtom: true
    poemForm: false
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

  poemFormButton = () => {
    this.setState({poemForm: !this.state.poemForm})
  }

  render() {

    // console.log(this.state.poemsArray)

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.poemFormButton}>Show/hide new poem form</button>
          {/*false && <NewPoemForm />*/}{this.state.poemForm ? <NewPoemForm /> : null}
        </div>
        <PoemsContainer poemsArray={this.state.poemsArray} handleClick={this.handleClick} readButtom={this.state.readButtom}/>
      </div>
    );

  }
}

export default App;
