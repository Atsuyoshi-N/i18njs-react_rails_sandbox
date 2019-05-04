import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greating: {this.props.greating}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greating: PropTypes.string
};
export default HelloWorld
