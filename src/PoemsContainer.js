import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    // console.log(this.props.poem)

    return (
      <div className="poems-container">
        {
          // render poems here
          this.props.poem.map(pom => <Poem key={pom.id} title={pom.title} content={pom.content} author={pom.author} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
