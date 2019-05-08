import React from "react"
import PropTypes from "prop-types"
import I18n from 'i18n-js/index.js.erb'
class HelloWorld extends React.Component {
  render () {

    console.log(gon.locale)
    console.log(I18n.locale);
    console.log(I18n.t('activerecord.errors.messages.record_invalid'));
    console.log(I18n.t('date.abbr_day_names'))
    console.log(I18n.t('hello'));
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
