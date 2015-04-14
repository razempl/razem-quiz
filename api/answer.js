import Bookshelf from 'bookshelf';
const {knex} = Bookshelf.PG;

export default (request, reply) => {
  const {answers} = request.payload;

  return knex('answers')
    .returning('id')
    .insert({ answer: answers })
    .nodeify(reply);
}
