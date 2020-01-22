import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const API = 'http://localhost:3000/poems'

const iniNewPoem = {
  title: "Title",
  author: "Author",
  content: "Write your masterpiece here..."
}

class App extends React.Component {
  
  
  state = {
    poemsArray: [],
    // readButtom: true
    poemForm: false,
    newPoem: iniNewPoem
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

  changeTitle = (e) => {
    this.setState({newPoem: {
      title: e.target.value,
      author: this.state.newPoem.author,
      content: this.state.newPo
    }})
  }

  changleAuthor = (e) => {
    this.setState({newPoem: {
      title: this.state.newPoem.title,
      author: e.target.value,
      content: this.state.newPoem.content
    }})
  }

  changeContent = (e) => {
    this.setState({newPoem: {
      title: this.state.newPoem.title,
      author: this.state.newPoem.author,
      content: e.target.value
    }})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.newPoem)
    // this.setState({newPoem: iniNewPoem})
    // console.log(this.state.newPoem)

    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newPoem),
    })
    .then((resp) => resp.json())
    .then((data) => {
      let array = this.state.poemsArray
      array = [...array, data]
      this.setState({poemsArray: array})
    })

    this.setState({newPoem: iniNewPoem})
    
  }

  render() {

    // console.log(this.state.newPoem)

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.poemFormButton}>Show/hide new poem form</button>
          {/*false && <NewPoemForm />*/}{this.state.poemForm ? 
            <NewPoemForm newPoem={this.state.newPoem} 
            handleSubmit={this.handleSubmit} 
            changeTitle={this.changeTitle}
            changleAuthor={this.changleAuthor}
            changeContent={this.changeContent}
            /> 
            : null}
        </div>
        <PoemsContainer poemsArray={this.state.poemsArray} handleClick={this.handleClick} readButtom={this.state.readButtom}/>
      </div>
    );

  }
}

export default App;
