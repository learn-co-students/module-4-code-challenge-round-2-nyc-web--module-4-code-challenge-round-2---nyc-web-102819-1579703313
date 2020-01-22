import React from "react";

class Poem extends React.Component {
  render() {

    console.log(this.props)
    return (
      <div>
        <h3>Title: {this.props.title}</h3>
        <p>Content: {this.props.content}</p>
        <p>
          <strong>- By Author: {this.props.author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
