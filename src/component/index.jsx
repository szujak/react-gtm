import PropTypes from 'prop-types'
import React, { Component } from 'react'

const injectGTM = WrappedComponent => {
  class ReactGTMInjected extends Component {
    constructor(props, context) {
      super(props, context)

      this.pushEvent = this.pushEvent.bind(this)
    }

    pushEvent(data) {
      this.context.dataLayer.push(data)
    }
    
    render() {
      return <WrappedComponent {...this.props} pushEvent={this.pushEvent} />
    }
  }

  ReactGTMInjected.contextTypes = {
    id: PropTypes.string,
    dataLayer: PropTypes.array
  }

  return ReactGTMInjected
}

export default injectGTM
