import React from "react";

class Poem extends React.Component {
  state = {
    read: false,
    favorite: false
  }

  readClick = () => {
    this.setState({read: !this.state.read})
  }

  addFavorite = (poem) => {
    this.setState({favorite: !this.state.favorite})
    this.props.addFavoriteBtn(poem)
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
          // background-color="red"
        >
          {this.state.read ? "Mark as Unread" : "Mark as Read"}
        </button>
        {this.state.favorite ? null :
        <button
          onClick={() => this.addFavorite(this.props.poem)}
        >
          Like
        </button>
      }
        <button
          onClick={() => this.props.deletePoem(this.props.poem.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Poem;