import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  onIncriment = (evt) => {
    console.log("Increment button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює
  };

  onDicrement = (evt) => {
    console.log("Decrement button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button onClick={this.onIncriment} type="button">
          Increment by {step}
        </button>
        <button onClick={this.onDicrement} type="button">
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
