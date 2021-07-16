"use strict";

const create_ele = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return create_ele(
      "button", //  the element we want to render
      { onClick: () => this.setState({ liked: true }) }, // the function or event
      "Prashil" // the inner text
    );
  }
}

const domContainer = document.querySelector("#button_container");
ReactDOM.render(create_ele(LikeButton), domContainer);