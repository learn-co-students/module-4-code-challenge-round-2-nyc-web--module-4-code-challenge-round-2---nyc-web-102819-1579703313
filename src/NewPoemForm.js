import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form 
        className="new-poem-form"
        onSubmit={this.props.formSubmit}
      >
        <input 
          placeholder="Title" 
          value={this.props.formTitle}
          onChange={this.props.formChange}
          name="formTitle"
        />
        <input 
          placeholder="Author" 
          value={this.props.formAuthor}
          onChange={this.props.formChange}
          name="formAuthor"
        />
        <textarea 
          placeholder="Write your masterpiece here..." 
          rows={10} 
          value={this.props.formContent}
          onChange={this.props.formChange}  
          name="formContent"
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
