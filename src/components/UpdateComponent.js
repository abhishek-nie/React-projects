import React from "react";
// we pass other parameter with originalComponent also
const UpdateComponent = (OriginalComponent,incrementNo) => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNo };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementHandler={this.incrementHandler}
        />
      );
    }
  }
  return newComponent;
};

export default UpdateComponent;
