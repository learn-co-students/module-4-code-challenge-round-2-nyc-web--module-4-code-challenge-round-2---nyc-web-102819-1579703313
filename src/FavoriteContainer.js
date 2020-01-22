import React from "react";
import Poem from "./Poem";

class FavoriteContainer extends React.Component {
  render() {
    
    // will take array of favoirtes
    

    return (
      <div className="poems-container">
          <h3>My Favorite Poems</h3>
        {
          this.props.favorites.map(poem => {
              return(
                  <Poem
                    key={poem.id}
                    poem={poem}
                  />
              )
          })
        }
      </div>
    );
  }
}

export default FavoriteContainer;