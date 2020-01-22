import React from "react";

class Poem extends React.Component {
  
  state = {
    read: false
  }

  toggleRead = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- By {this.props.author}</strong>
        </p>
        <button onClick={this.toggleRead} >{this.state.read == false ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
