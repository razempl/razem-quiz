import React from 'react';
import Alerts from './alerts';

const STYLE = {
  marginTop: '30px'
};

export default React.createClass({
  render() {
    return (
      <div className='container' style={STYLE}>
        <Alerts />

        { this.props.children }
      </div>
    );
  }
});
