import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem=>{
            return(
              <Poem
                key={poem.id}
                poem={poem}
                addToFavorites= {this.props.addToFavorites}
                deletePoem={this.props.deletePoem}
              />
            )
          })

        }
      </div>
    );
  }
}

export default PoemsContainer;
