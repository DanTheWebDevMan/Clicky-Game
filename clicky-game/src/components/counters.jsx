import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement } = this.props;

    return (
      <div className="card">
        <div className="img-container">
          {/* <img alt={props.name} src={props.image} /> */}
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
