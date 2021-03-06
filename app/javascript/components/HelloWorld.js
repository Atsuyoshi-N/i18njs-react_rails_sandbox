import React from "react"
import PropTypes from "prop-types"
import I18n from 'i18n-js/index.js.erb'
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    I18n.locale = this.props.locale;
  }
  render () {

    console.log(I18n.t('hello'));
    console.log(I18n.t('devise.confirmations.confirmed'));
    console.log(I18n.t('activerecord.attributes.user.confirmation_sent_at'));
    return (
      <React.Fragment>
        <p>{I18n.t('hello')}</p>
        Greating: {this.props.greating}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greating: PropTypes.string
};
export default HelloWorld
