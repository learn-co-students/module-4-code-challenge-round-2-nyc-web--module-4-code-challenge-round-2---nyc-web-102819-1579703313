import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          // render poems here
          this.props.poemsArray.map((poem) => <Poem poem={poem} handleClick={this.props.handleClick} readButtom={this.props.readButtom}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
