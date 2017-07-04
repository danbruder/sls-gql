//import DataLoader from 'dataloader';
const faunadb = require('faunadb');
const q = faunadb.query;
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});
export const fuck = {
  foo: 'bar',
};

class Driver {
  constructor() {
    this.context = {};
    this.loader = {};
  }

  addContext(context) {
    this.context = context;
    //this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    //return this.loader.load(id);
  }

  async all({lastCreatedAt = 0, limit = 10}) {
    return await faunaClient.query(
      q.Select(
        'data',
        q.Map(q.Paginate(q.Match(q.Index('all_drivers'))), row =>
          q.Select('data', q.Get(row)),
        ),
      ),
    );
  }

  async insert(doc) {
    return faunaClient.query(
      q.Select('data', q.Create(q.Class('drivers'), {data: doc})),
    );
  }

  async updateById(id, doc) {
    //    const ret = await this.collection.update(
    //{_id: id},
    //{
    //$set: Object.assign({}, doc, {
    //updatedAt: Date.now(),
    //}),
    //},
    //);
    //this.loader.clear(id);
    //return ret;
  }

  async removeById(id) {
    //    const ret = this.collection.remove({_id: id});
    //this.loader.clear(id);
    //return ret;
  }
}

export default Driver;
