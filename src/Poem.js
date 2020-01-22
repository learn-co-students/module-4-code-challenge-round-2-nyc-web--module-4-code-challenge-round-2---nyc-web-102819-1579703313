import React from "react";

class Poem extends React.Component {

  state = {
    readButtom: true
  }

  handleClick = () => {
    this.setState({readButtom: !this.state.readButtom})
    // console.log('clicked')
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>{/*Title*/}{this.props.poem.title}</h3>
        <p>{/*Content*/}{this.props.poem.content}</p>
        <p>
          <strong>- {/*By Author*/}{this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleClick}>{/*Mark as read*/}{this.state.readButtom ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
