import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
    buttonInfo: "Mark as read",
    buttonStyle: "white"
  }

  buttonChanger = () => {
    if (this.state.read) {
      this.setState({read: false, buttonInfo: "Mark as read", buttonStyle: "white"})
    } else {
      this.setState({read: true, buttonInfo: "Mark as unread", buttonStyle: "skyblue"})
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
        <strong>{this.props.poem.author}</strong>
        </p>
        <button style={{backgroundColor: `${this.state.buttonStyle}`}} onClick={this.buttonChanger}>{this.state.buttonInfo}</button>
      </div>
    );
  }
}

export default Poem;
