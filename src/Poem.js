import React from "react";

class Poem extends React.Component {

  state = {
    read : false
  }

  handleClick = () =>{
    this.setState({read: !this.state.read})

  }


  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>
          <strong>- {this.props.author}</strong>
        </p>
        <button onClick = {this.handleClick}>{this.state.read? "Mark as unread": "Mark as read"} </button>
      </div>
    );
  }
}

export default Poem;
