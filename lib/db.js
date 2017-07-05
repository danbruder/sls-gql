import faunadb, {query as q} from 'faunadb';

export const db = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

export function setupFaunaDBSchema() {
  return faunaClient
    .query(q.Do([q.CreateClass({name: 'drivers'})]))
    .then(() => {
      return faunaClient.query(
        q.Do(
          q.CreateIndex({
            name: 'all_drivers',
            source: q.Class('drivers'),
          }),
          q.CreateIndex({
            name: 'driver_by_id',
            source: q.Class('drivers'),
            unique: true,
            terms: [
              {
                field: ['data', 'id'],
              },
            ],
          }),
        ),
      );
    })
    .catch(e => console.log(e));
}
