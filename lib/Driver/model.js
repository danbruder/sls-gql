//import DataLoader from 'dataloader';

export default class Driver {
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

  all({lastCreatedAt = 0, limit = 10}) {
    return [];
  }

  async insert(doc) {
    //    const docToInsert = Object.assign({}, doc, {
    //createdAt: Date.now(),
    //updatedAt: Date.now(),
    //});
    //const id = (await this.collection.insertOne(docToInsert)).insertedId;
    //return id;
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
