import React from "react";
import Poem from "./Poem";

class FavoritesContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        <h1>Favorites Container over here! </h1>
        {this.props.likedPoems.map(poem => <Poem 
          poem={poem}
          key={poem.id}
          title={poem.title}
          content={poem.content}
          author={poem.author}
          likedPoems={this.props.likedPoems}
          likePoem={this.props.likePoem}
        />)
        }
      </div>
    );
  }
}

export default FavoritesContainer;
