import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {



  
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem => <Poem 
            title = {poem.title}
            content = {poem.content} 
            author = {poem.author}
            key = {poem.id} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
//hehwher
