import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
    //   <div>
    //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //     <button
    //       onClick={() => this.props.onIncrement(this.props.counter)}
    //       className="btn btn-secondary btn-sm"
    //     >
    //       Increment
    //     </button>
    //   </div>
    );
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
