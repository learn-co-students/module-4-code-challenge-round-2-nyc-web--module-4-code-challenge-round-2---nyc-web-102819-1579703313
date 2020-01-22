import React from "react";

class Poem extends React.Component {

  state = {
    read : false
  }

  handleRead = () => {
    console.log(`There was time now!`)
    this.setState({read : !this.state.read})
  }

  render() {

    // console.log(this.props)
    return (
      <div>
        <h3>Title: {this.props.title}</h3>
        <p>Content: {this.props.content}</p>
        <p>
          <strong>- By Author: {this.props.author}</strong>
        </p>
        <button onClick={this.handleRead}> {this.state.read? `Mark as unread` : `Mark as read`}</button>
        <button onClick={(fav) => this.props.favClick(fav)}>favorite?</button>
      </div>
    );
  }
}

export default Poem;
