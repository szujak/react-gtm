import React from 'react'

const injectGTM = (WrappedComponent, selectData) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default injectGTM;
