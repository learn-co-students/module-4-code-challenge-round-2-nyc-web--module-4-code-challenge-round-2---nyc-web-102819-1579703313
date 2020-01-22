import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

state ={
  poems : []


}

componentDidMount(){
  fetch(`http://localhost:3000/poems`)
  .then(resp => resp.json())
  .then(pom => this.setState({poems : pom}))


}

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poem={this.state.poems} />
      </div>
    );
  }
}

export default App;


/*
Display poems from the database
Make a GET request to http://localhost:3000/poems to fetch poem data. Use this data to render Poem components in the PoemsContainer! (fetch poems and pass down)
*/