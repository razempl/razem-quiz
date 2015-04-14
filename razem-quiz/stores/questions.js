import fluxApp from 'fluxapp';

export default fluxApp.createStore('questions', {
  actions: {
    onQuestions: 'questions.get',
    onAnswer: 'questions.answer',
  },

  getInitialState() {
    return {
      questions: [],
      current: void(0),
      answers: {},
    };
  },

  onQuestions(payload) {
    const [ questions, current ] = payload;
    this.setState({
      questions,
      current: parseInt(current)
    });
  },

  onAnswer(payload) {
    const [ question, answer ] = payload;
    let {answers} = this.state;

    answers[question] = answer;
    this.setState({ answers });
  },
});
