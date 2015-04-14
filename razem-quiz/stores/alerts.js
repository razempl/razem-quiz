import fluxApp from 'fluxapp';
import R from 'ramda';

export default fluxApp.createStore('alerts', {
  actions: {
    onAdd: 'alerts.add',
    onDismiss: 'alerts.dismiss',
  },

  getInitialState() {
    return {
      alerts: []
    };
  },

  onDismiss(id) {
    let alerts = R.reject(alert => alert.id === id, this.state.alerts);
    this.setState({ alerts });
  },

  onAdd(alert) {
    let {alerts} = this.state;
    alerts.push(alert);

    this.setState({ alerts });
  }
});
