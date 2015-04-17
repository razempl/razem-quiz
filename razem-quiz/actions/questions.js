import fluxApp from 'fluxapp';
import Promise from 'bluebird';
import R from 'ramda';

function pairToAnswer(pair) {
  const [question, answer] = pair;
  return {question, answer};
}

const toAnswersList = object => R.map(pairToAnswer, R.toPairs(object));

export default fluxApp.createActions('questions', {
  get: (idx) => Promise.all([ fluxApp.fetch({ url: '/api/questions' }), idx ]),

  answer: (idx, answer) => [ idx, answer ],

  saveAnswers(answers) {
    return fluxApp.fetch({
      method: 'POST',
      url: '/api/answer',
      payload: {
        answers: toAnswersList(answers)
      }
    });
  }
});
