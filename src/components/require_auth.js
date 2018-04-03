import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends React.Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
