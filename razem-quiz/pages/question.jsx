import React from 'react';
import fluxApp from 'fluxapp';
import R from 'ramda';
import {Row, Col, Button, Input} from 'react-bootstrap';

import Layout from 'razem-quiz/components/layout';

export default React.createClass({
  displayName: 'question',

  mixins: [ fluxApp.mixins.component ],

  statics: {
    load(route, fluxApp) {
      return fluxApp.getActions('questions').get(route.params.id);
    }
  },

  setData() {
    const questionsStore = fluxApp.getStore('questions').state;
    const questionId = questionsStore.current;

    const newState = R.merge(questionsStore.questions[questionId], {
      currentId: questionId,
      total: questionsStore.questions.length
    });

    this.setState(newState);
  },

  componentWillMount() {
    this.setData();
  },

  componentWillReceiveProps(newprops) {
    this.setData();
  },

  proceed() {
    const {currentId, total, answer} = this.state;
    if (!answer) {
      return fluxApp.getActions('alerts').add('Musisz coś zaznaczyć');
    }

    fluxApp.getActions('questions').answer(currentId, answer).then(() => {
      if (currentId < total - 1) {
        const next = currentId + 1;
        fluxApp.getRouter().go('/pytanie/' + next);
      } else {
        const answers = fluxApp.getStore('questions').state.answers;
        fluxApp.getActions('questions').saveAnswers(answers)
          .spread((action, payload) => {
            const id = payload[0];
            console.log('SAAAAVED BICZYZ', id);
          });
      }
    });
  },

  answerChanged(e) {
    this.setState({
      answer: e.target.value
    });
  },

  render() {
    const options = R.map(option => {
      return (
        <Input
          type='radio'
          name='question'
          value={option}
          key={option}
          onChange={this.answerChanged}>
            { option }
        </Input>
      );
    }, this.state.options);

    const msg = this.state.currentId < this.state.total - 1 ? 'Następne' : 'Zagłosuj';

    return (
      <Layout>
        <Row>
          <h1>{ this.state.question }</h1>
          { options }

          <Button bsStyle='info' onClick={this.proceed}>{msg}</Button>
        </Row>
      </Layout>
    );
  }
});
