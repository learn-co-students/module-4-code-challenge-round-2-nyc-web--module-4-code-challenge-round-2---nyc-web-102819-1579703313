import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    favoritepoems: [],
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
    this.setState({poems: [...this.state.poems, poem], showForm: false})
  }

  addToFavorite = (poem) => {
    this.setState({favoritepoems: [...this.state.favoritepoems, poem]})
  }

  poemDelete = (poem) => {
    let filteredPoems = this.state.poems.filter((poeminState) => {return poeminState.id !== poem.id})
    let filteredFavorites = this.state.favoritepoems.filter((poeminState) => {return poeminState.id !== poem.id})
    this.setState({poems: filteredPoems, favoritepoems: filteredFavorites})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm poemStateChange={this.poemStateChange} />}
        </div>
        <PoemsContainer poems={this.state.poems} addToFavorite={this.addToFavorite} poemDelete={this.poemDelete}/>
        <PoemsContainer poems={this.state.favoritepoems} poemDelete={this.poemDelete}/>
      </div>
    );
  }
}

export default App;
