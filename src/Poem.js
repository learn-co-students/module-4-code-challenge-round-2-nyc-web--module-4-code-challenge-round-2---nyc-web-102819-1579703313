import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  readClick = () => {
    this.setState({read: !this.state.read})
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button
          onClick={this.readClick}
        >
          {this.state.read ? "Mark as Unread" : "Mark as Read"}
        </button>
      </div>
    );
  }
}

export default Poem;