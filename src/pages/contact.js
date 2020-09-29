import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setModal } from "../redux/action-creators";

import Container from "../components/container";

const Contact = class Contact extends Component {
  static propTypes = {
    modal: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (this.props.modal === true) {
      setModal(false);
    }
  }

  render() {
    return <Container title="Contact"></Container>;
  }
};

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

export default connect(mapStateToProps)(Contact);