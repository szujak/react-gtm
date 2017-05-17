import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

class ReactGTMProvider extends Component {
  getChildContext() {
    return { id: this.props.id }
  }

  render() {
    return Children.only(this.props.children)
  }
}

ReactGTMProvider.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}

ReactGTMProvider.defaultProps = {
  id: undefined,
  children: undefined
}

ReactGTMProvider.childContextTypes = {
  id: PropTypes.string.isRequired
}

export default ReactGTMProvider;
