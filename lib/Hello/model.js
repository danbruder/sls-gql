export default class Hello {
  constructor() {
    this.context = {};
  }
  addContext(context) {
    this.context = context;
  }
  findOneById(id) {}
  all({lastCreatedAt = 0, limit = 10}) {}
  async insert(doc) {}
  async updateById(id, doc) {}
  async removeById(id) {}
}
