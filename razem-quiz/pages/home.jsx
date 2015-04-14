import React from 'react';
import fluxApp from 'fluxapp';

export default React.createClass({
  displayName: 'Home',

  mixins: [ fluxApp.componentMixin ],

  render() {
    return <div>Hi</div>;
  }
});
