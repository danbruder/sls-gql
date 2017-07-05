import {Base64} from 'js-base64';
import {query as q} from 'faunadb';
const {encode, decode} = Base64;

const formatResult = r => ({
  ...r.data,
  createdAt: r.ts,
  id: encode(r.ref),
});

class Driver {
  constructor() {
    this.context = {};
    this.db = {};
  }

  addContext(context) {
    this.context = context;
    this.db = context.db;
  }

  async findOneById(id) {
    let result = await this.db.query(q.Get(q.Ref(decode(id))));

    return formatResult(result);
  }

  async all({lastCreatedAt = 0, limit = 10}) {
    let options = {};

    if (lastCreatedAt) options.ts = lastCreatedAt;
    options.size = limit;

    let result = await this.db.query(
      q.Select(
        'data',
        q.Map(q.Paginate(q.Match(q.Index('all_drivers')), options), row =>
          q.Get(row),
        ),
      ),
    );
    console.log(result);

    return result.map(r => formatResult(r));
  }

  async insert(doc) {
    let result = await this.db.query(
      q.Create(q.Class('drivers'), {
        data: doc,
      }),
    );

    return formatResult(result);
  }

  async updateById(id, doc) {
    let result = await this.db.query(q.Update(q.Ref(decode(id)), {data: doc}));

    return formatResult(result);
  }

  async removeById(id) {
    return await this.db.query(q.Delete(q.Ref(decode(id))));
  }
}

export default Driver;
