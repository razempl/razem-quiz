import Home from 'razem-quiz/pages/home';
import Question from 'razem-quiz/pages/question';

export default [
  {
    path: '/',
    method: 'GET',
    handler: Home
  }, {
    path: '/pytanie/:id',
    method: 'GET',
    handler: Question
  },
]

