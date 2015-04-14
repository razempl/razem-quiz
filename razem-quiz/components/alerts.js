import React from 'react';
import fluxApp from 'fluxapp';
import R from 'ramda';
import {Alert, Row} from 'react-bootstrap';

export default React.createClass({
  displayName: 'alerts',

  mixins: [ fluxApp.mixins.component ],

  dismiss(alertId) {
    return () => {
      fluxApp.getActions('alerts').dismiss(alertId);
    };
  },

  getInitialState() {
    return {
      alerts: []
    };
  },

  flux: {
    stores: {
      updateState: 'alerts'
    }
  },

  updateState() {
    const {alerts} = fluxApp.getStore('alerts').state;
    this.setState({ alerts });
  },

  componentWillMount() {
    this.updateState();
  },

  render() {
    const alerts = R.map(alert => {
      return (
        <Alert bsStyle={alert.style} onDismiss={this.dismiss(alert.id)} key={alert.id}>
          <p>{alert.message}</p>
        </Alert>
      );
    }, this.state.alerts);

    return (
      <Row>
        {alerts}
      </Row>
    );
  }
});
