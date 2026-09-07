import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  }

  onIncriment = (evt) => {
    
    console.log("Increment button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює

    // this.setState({
    //   value: this.state.value + 1
    // })

    this.setState((prevState, props) => {
      return{
        value: prevState.value + props.step
      }
    })
  };

  onDicrement = (evt) => {

    console.log("Decrement button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює

    
    this.setState((prevState, props) => {
      return{
        value: prevState.value - props.step
      }
    })
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <p>{this.state.value}</p>
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
