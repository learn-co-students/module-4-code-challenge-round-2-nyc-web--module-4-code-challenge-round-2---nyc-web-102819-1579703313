import React from "react";

class NewPoemForm extends React.Component {


  state = {
    title: '',
    content: '',
    author: '',
  }

  handleChangeTitle = (e) => {
    console.log(this.state.title)
    this.setState({title : e.target.value})
  }

  handleChangeAuthor = (e) => {
    console.log(this.state.author)
    this.setState({author : e.target.value})
  }

  handleChangeContent = (e) => {
    console.log(this.state.content)
    this.setState({content : e.target.value})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({title: `${this.state.title}`, content: `${this.state.content}`, author: `${this.state.author}`})
    })
    let x = {title: `${this.state.title}`, content: `${this.state.content}`, author: `${this.state.author}`}
    this.props.addPoem(x)
  }

  

  render() {
    return (
      <form onSubmit = {this.handleSubmit} className="new-poem-form">
        <input placeholder="Title" value = {this.state.title} onChange = {(e) => this.handleChangeTitle(e)} />
        <input placeholder="Author" value = {this.state.author} onChange = {(e) => this.handleChangeAuthor(e)} />
        <textarea placeholder="Write your masterpiece here..." rows={10} value = {this.state.content} onChange = {(e) => this.handleChangeContent(e)} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
