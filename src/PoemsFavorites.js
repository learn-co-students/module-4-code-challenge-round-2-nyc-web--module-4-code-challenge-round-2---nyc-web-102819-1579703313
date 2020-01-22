import React from "react";
import Poem from "./Poem";

class PoemsFavorites extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.favoritePoems.map(poem => {
            return(
              <Poem
                key={poem.id}
                poem={poem}
                deletePoem={this.props.deletePoem}
              />
            )
          })
        }
      </div>
    );
  }
}

export default PoemsFavorites;
