import React, { Component, useState } from "react";

export class CounterWithComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div style={{ background: "#ffc" }}>
        <p>Counter sa komponentu: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export function CounterWithoutComponent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ background: "#ccc" }}>
      <p>Counter bez komponentu: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//export CounterWithoutComponent, CounterWithComponent;
