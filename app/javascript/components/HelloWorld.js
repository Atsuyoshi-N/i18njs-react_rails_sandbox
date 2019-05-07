import React from "react"
import PropTypes from "prop-types"
import I18n from 'i18n-js/index.js.erb'
class HelloWorld extends React.Component {
  render () {
    console.log(I18n.t('hello'));
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
