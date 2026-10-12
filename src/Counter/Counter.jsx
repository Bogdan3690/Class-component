import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

   
  // Метод, який викликається після того, як компонент був відображений на сторінці

  componentDidMount() {
    
    console.log("Компонент був доданий до DOM");
  }

  // Метод, який викликається після оновлення компонента (наприклад, зміни стану або властивостей)

  componentDidUpdate(prevProps, prevState) {

    console.log("Компонент був оновлений");

    console.log("Попередній стан:", prevState);

    console.log("Поточний стан:", this.state);

    const prevValue = prevState.value

    const nextValue = this.state.value

    if (prevValue !== nextValue){
      console.log(localStorage);
      localStorage.setItem("counterValue", nextValue)
      
    }
  }

  // Метод, який викликається перед видаленням компонента з DOM

  componentWillUnmount() {
    console.log("Компонент буде видалений з DOM");
  }

  onIncriment = (evt) => {
    console.log("Increment button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює

    // this.setState({
    //   value: this.state.value + 1
    // })

    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  onDicrement = (evt) => {
    console.log("Decrement button was clicked!", evt); // працює

    console.log("this.props: ", this.props); // працює

    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
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
