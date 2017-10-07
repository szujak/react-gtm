import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import { head, body } from '../utils/gtm'

class ReactGTMProvider extends Component {
  constructor(props, context) {
    super(props, context)

    if (typeof window === 'undefined') {
      return
    }

    this.dataLayer = window.dataLayer || props.dataLayer || []

    window.dataLayer = this.dataLayer
  }

  // componentDidMount() {
  //   const headElement = document.head || document.querySelector('head')
  //   const bodyElement = document.body || document.querySelector('body')

  //   headElement.innerHTML += head(this.props.id)
  //   bodyElement.innerHTML += body(this.props.id)
  // }

  getChildContext() {
    const { props: { id }, dataLayer } = this

    return { id, dataLayer }
  }

  render() {
    return Children.only(this.props.children)
  }
}

ReactGTMProvider.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  dataLayer: PropTypes.array
}

ReactGTMProvider.defaultProps = {
  id: undefined,
  children: undefined,
  dataLayer: undefined
}

ReactGTMProvider.childContextTypes = {
  id: PropTypes.string.isRequired,
  dataLayer: PropTypes.array.isRequired
}

export default ReactGTMProvider
