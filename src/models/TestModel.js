export default class TestModel {
  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    if (!data) return;
    this.id = data.id || undefined;
    this.email = data.email || undefined;
    this.name = data.name || undefined;
    this.owner = data.owner || undefined;
    this.fullName = data.full_name || undefined;
    this.avatar = data.avatar_path || undefined;
  }
}
