import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

state ={
  poems : [],
  showClick : false,
  Title : '',
  Author : '',
  Content : ''
}

handleSubmit= (e) => {
  e.preventDefault()
  fetch('http://localhost:3000/poems', {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
            },
    body: JSON.stringify({title: `${this.state.Title}`, author : `${this.state.Author}`, content: `${this.state.Content}`}),
})
.then((response) => response.json())
.then((poem) => {this.setState({poems : [...this.state.poems, poem]});
})

}

handleChange = (e) => {
  console.log(e.target.name, e.target.value)
  this.setState({[e.target.name]: e.target.value})
}

componentDidMount(){
  fetch(`http://localhost:3000/poems`)
  .then(resp => resp.json())
  .then(pom => this.setState({poems : pom}))
}

showClick = () => {
  console.log(`showclick!`)
  this.setState({showClick: !this.state.showClick})
}

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showClick}>Show/hide new poem form</button>
          {this.state.showClick && <NewPoemForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>}
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

/*
Show / hide the NewPoemForm
Hook up the button in the sidebar to toggle the visibility of the NewPoemForm.
*/

/*
SKIPPING! Create poems
When a user submit's a poem from the NewPoemForm, it should be posted to the API and it should be added to the list of poems on the right.

Skipping due to not being able to figure out the handlesubmit.

Questions: Can I do this like I have it here, only have the submit in the app? or do I have to pass down both the submit and the handlechange?
*/