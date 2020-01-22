import React from "react";

class NewPoemForm extends React.Component {
  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.props.createPoem} className="new-poem-form">
        <input placeholder="Title" onChange={this.props.getPoemTitle} value={this.props.title}/>
        <input placeholder="Author" onChange={this.props.getPoemAuthor} value={this.props.author}/>
        <textarea placeholder="Write your masterpiece here..." onChange={this.props.getPoemContent} value={this.props.content} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
