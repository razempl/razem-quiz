import fluxApp from 'fluxapp';
import uuid from 'uuid';
import R from 'ramda';

export default fluxApp.createActions('alerts', {
  add(message, type) {
    type = type || 'danger';

    return {
      id: uuid.v4(),
      message,
      type,
    };
  },

  dismiss: R.identity,
});
