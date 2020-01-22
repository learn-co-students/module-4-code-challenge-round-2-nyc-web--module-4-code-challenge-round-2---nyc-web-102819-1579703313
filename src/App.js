import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {


  state={
    poems: [],
    formShowing: false,
    title: '',
    content: '',
    author: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(resp=> resp.json())
    .then(data=> {
      this.setState({
        poems: data
      })
    })
  }

  clickForForm=()=>{
    this.setState({
      formShowing: !this.state.formShowing
    })
  }

  handleChangeForm=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/poems',{
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    })
  })
  .then(resp=>resp.json())
  .then(data=> {
    this.setState({
      poems: [...this.state.poems, data]
    },()=> console.log(data))
  })
    this.setState({
      title: '',
      content: '',
      author: ''
    })
  }

  

  render() {
    // console.log(this.state.poems)

    let view;
    if (this.state.formShowing){
      view = <NewPoemForm
        title={this.state.title}
        author={this.state.author}
        content={this.state.content}
        handleChangeForm={this.handleChangeForm}
        handleSubmit={this.handleSubmit}
      />
    } else {
      view = null
    }

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickForForm}>Show/hide new poem form</button>
          {view}
        </div>
        <PoemsContainer 
          poems={this.state.poems}
        />
      </div>
    );
  }
}

export default App;
