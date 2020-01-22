import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.allPoems.map(poem => {
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

export default PoemsContainer;
