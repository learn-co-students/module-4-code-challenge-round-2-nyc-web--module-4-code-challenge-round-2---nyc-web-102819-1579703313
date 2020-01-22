import React from "react";

class Poem extends React.Component {

  state={
    read: false,
  }

  markAsRead=()=>{
    this.setState({
      read: !this.state.read
    })
  }



  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.markAsRead}>{this.state.read ? "Mark as Unread": "Mark as Read"}</button>
        <button onClick={()=>this.props.addToFavorites(this.props.poem)}>Like</button>
        <button onClick={()=>this.props.deletePoem(this.props.poem)}>Delete</button>
      </div>
    );
  }
}

export default Poem;
