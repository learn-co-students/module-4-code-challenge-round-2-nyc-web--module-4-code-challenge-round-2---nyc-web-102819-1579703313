import React from "react";

class NewPoemForm extends React.Component {
  
  state={
    Title : '',
    Author : '',
    Content : ''
    // unused due to moving it up to app,
  }
  
  
 
  render() {

  // console.log(this.props)

    return (
      <form className="new-poem-form" onSubmit={(e) =>this.props.handleSubmit(e)}>
        <input onChange={(e) => this.props.handleChange(e)} name = 'Title'  placeholder="Title" />
        <input onChange={(e) => this.props.handleChange(e)} name = 'Author' placeholder="Author" />
        <textarea onChange={(e) => this.props.handleChange(e)} name = 'Content' placeholder="Write your masterpiece here..." rows={10} />
        <input  type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;

//I can't tell if I'm supposed to keep the state of the forms here or not? I'm going to try first to just have the submit on app, because it doesn't really need to know what I'm typing. wish me luck?
