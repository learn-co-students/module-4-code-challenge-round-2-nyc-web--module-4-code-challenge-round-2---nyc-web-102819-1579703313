import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" name = "title" value={this.props.title} onChange={this.props.handleChangeForm} />
        <input placeholder="Author" name = "author" value = {this.props.author} onChange={this.props.handleChangeForm}/>
        <textarea placeholder="Write your masterpiece here..." name = "content" value= {this.props.content} onChange={this.props.handleChangeForm} rows={10} />
        <input type="submit" value="Share your masterpiece" onClick={this.props.handleSubmit} />
      </form>
    );
  }
}

export default NewPoemForm;
