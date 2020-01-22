import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  
  state = {
    allPoems: [],
    showForm: true,
    title: '',
    content: '',
    author: '',
  }

  componentDidMount() {
    fetch("http://localhost:3000/poems")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("allPoems initial", data);
      this.setState({
        allPoems: data
      })
    });
  }
  
  togglePoemForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  
  getPoemTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  getPoemAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  getPoemContent = (e) => {
    this.setState({
      content: e.target.value
    })
  } 

  createPoem = (e) => {
    e.preventDefault()
    // debugger
    fetch("http://localhost:3000/poems",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        allPoems: [...this.state.allPoems, data]
      })
      console.log('Success:', data);
    })
  }

  componentDidUpdate() {
  fetch("http://localhost:3000/poems")
    .then((response) => {
      return response.json();
    })
    .then((newPoem) => {
      console.log(newPoem);
    });
  }
  
  render() {      
    // console.log(this.state.showForm)
    console.log("title", this.state.title)
    console.log("author", this.state.author)
    console.log("content", this.state.content)

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.togglePoemForm}>Show/hide new poem form</button>
          {this.state.showForm == true ? <NewPoemForm 
          createPoem={this.createPoem}
          getPoemTitle={this.getPoemTitle}
          getPoemAuthor={this.getPoemAuthor}
          getPoemContent={this.getPoemContent}
          title={this.state.title}
          content={this.state.content}
          author={this.state.author}
          /> : null}
        </div>
        <PoemsContainer 
        allPoems={this.state.allPoems}/>
      </div>
    );
  }
}

export default App;
