import React from "react";

class NewPoemForm extends React.Component {

  state={
    Title: "Title",
    Author: "Author",
    Poem: "Poem"

  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  // if the above method doesnt work, which was a last second change, the below methods will control the form properly.

  // titleChanger = (e) => {
  //   this.setState({Title: e.target.value})
  // }

  // authorChanger = (e) => {
  //   this.setState({Author: e.target.value})
  // }

  // poemChanger = (e) => {
  //   this.setState({Poem: e.target.value})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    let newPoem = {
      author: this.state.Author,
      content: this.state.Poem,
      title: this.state.Title
    }
    this.props.poemStateChange(newPoem)
    fetch(`http://localhost:3000/poems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(newPoem)
    })
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input onChange={this.changeHandler} placeholder="Title" name="Title" value={this.state.Title}/>
        <input onChange={this.changeHandler} placeholder="Author" name="Author" value={this.state.Author}/>
        <textarea onChange={this.changeHandler} placeholder="Write your masterpiece here..." rows={10} name="Poem" value={this.state.Poem} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
