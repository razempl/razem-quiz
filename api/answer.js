import Bookshelf from 'bookshelf';
import Promise from 'bluebird';

const {knex} = Bookshelf.PG;

export default (request, reply) => {
  return Promise.map(request.payload.answers, answer => knex('answers').insert(answer))
    .nodeify(reply);
}
