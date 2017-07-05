//import DataLoader from 'dataloader';
import {Base64} from 'js-base64';
const faunadb = require('faunadb');
const q = faunadb.query;
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const {encode, decode} = Base64;

class Driver {
  constructor() {
    this.context = {};
    this.loader = {};
  }

  addContext(context) {
    this.context = context;
    //this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  async findOneById(id) {
    let result = await faunaClient.query(q.Get(q.Ref(decode(id))));

    return {
      ...result.data,
      id: encode(result.ref),
    };
  }

  async all({lastCreatedAt = 0, limit = 10}) {
    let result = await faunaClient.query(
      q.Select(
        'data',
        q.Map(q.Paginate(q.Match(q.Index('all_drivers'))), row => ({
          id: q.Select('ref', q.Get(row)),
          data: q.Select('data', q.Get(row)),
        })),
      ),
    );

    return result.map(r => ({
      ...r.data,
      id: encode(r.id),
    }));
  }

  async insert(doc) {
    return faunaClient.query(
      q.Select(
        'data',
        q.Create(q.Class('drivers'), {
          data: doc,
        }),
      ),
    );
  }

  async updateById(id, doc) {
    let result = await faunaClient.query(
      q.Update(q.Ref(decode(id)), {data: doc}),
    );

    return {
      ...result.data,
      id: encode(result.ref),
    };
  }

  async removeById(id) {
    let result = await faunaClient.query(q.Delete(q.Ref(decode(id))));
    console.log(result);
    return id;
  }
}

export default Driver;
