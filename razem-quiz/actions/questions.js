import fluxApp from 'fluxapp';
import Promise from 'bluebird';

export default fluxApp.createActions('questions', {
  get: (idx) => Promise.all([ fluxApp.fetch({ url: '/api/questions' }), idx ]),

  answer: (idx, answer) => [ idx, answer ],

  saveAnswers(answers) {
    return fluxApp.fetch({
      method: 'POST',
      url: '/api/answer',
      payload: {
        answers: JSON.stringify(answers)
      }
    });
  }
});
