import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" value={/*this.props.newPoem.title*/ this.props.newPoem.title} onChange={this.props.changeTitle} />
        <input placeholder="Author" value={/*this.props.newPoem.author*/ this.props.newPoem.author} onChange={this.props.changleAuthor}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} value={/*this.props.newPoem.poem*/ this.props.newPoem.content} onChange={this.props.changeContent}/>
        <input type="submit" value="Share your masterpiece" onClick={this.props.handleSubmit}/>
      </form>
    );
  }
}

export default NewPoemForm;
