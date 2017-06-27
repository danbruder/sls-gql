export default class Hello {
  constructor(context) {
    this.models = {};
  }
  addModels(models) {
    this.models = models;
  }
  findOneById(id) {}
  all({lastCreatedAt = 0, limit = 10}) {}
  async insert(doc) {}
  async updateById(id, doc) {}
  async removeById(id) {}
}
