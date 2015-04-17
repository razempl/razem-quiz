import Joi from 'joi';

export default (hapi) => {
  hapi.route({
    method: 'GET',
    path: '/api/questions',
    config: {
      handler: require('./get-questions')
    }
  });

  hapi.route({
    method: 'POST',
    path: '/api/answer',
    config: {
      handler: require('./answer'),
      validate: {
        payload: Joi.object().keys({
          answers: Joi.array().includes(
            Joi.object().keys({
              question: Joi.string(),
              answer: Joi.string()
            })
          )
        })
      }
    }
  });
};
