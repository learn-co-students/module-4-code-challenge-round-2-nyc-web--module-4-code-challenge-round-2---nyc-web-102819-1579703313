import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {this.props.addToFavorite ? <h1>All Poems:</h1>: <h1>Favorites:</h1>}
        {
          this.props.poems.map((poem) => {
            return this.props.addToFavorite ? <Poem poem={poem} addToFavorite={this.props.addToFavorite} poemDelete={this.props.poemDelete}/> : <Poem poem={poem} poemDelete={this.props.poemDelete}/>
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
