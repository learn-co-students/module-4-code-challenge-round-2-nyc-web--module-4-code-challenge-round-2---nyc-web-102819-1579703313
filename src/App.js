import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    allPoems: [],
    formShow: false,
    formTitle: '',
    formAuthor: '',
    formContent: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/poems`)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({allPoems: resp})
    })
  }

  formShowClick = () => {
    this.setState({formShow: !this.state.formShow})
  }

  formChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  formSubmit = (e) => {
      //prevent default behavior
    e.preventDefault()
      //fetch
    fetch(`http://localhost:3000/poems`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.formTitle,
        content: this.state.formContent,
        author: this.state.formAuthor
      })
    })
      //update state
    .then(resp => resp.json())
    .then(newPoemObj => {
      this.setState({allPoems: [...this.state.allPoems, newPoemObj]})
    })
      //clear form
    this.setState({
      formTitle: '',
      formAuthor: '',
      formContent: ''
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button
            onClick={this.formShowClick}
          >
            {this.state.formShow ? 'Hide ' : 'Show '} New Poem Form
            {/* Show/hide new poem form */}
          </button>
          {/* {false && <NewPoemForm />} */}
          {this.state.formShow ? 
            <NewPoemForm
              formTitle={this.state.formTitle}
              formAuthor={this.state.formAuthor}
              formContent={this.state.formContent}
              formChange={this.formChange}
              formSubmit={this.formSubmit}
            /> : 
          null}
        </div>
        <PoemsContainer 
          allPoems={this.state.allPoems}
        />
      </div>
    );
  }
}

export default App;
