import React from 'react';

export default class MyComponent extends React.Component {
  render () {
    return <button {...this.props} />;
  }
}