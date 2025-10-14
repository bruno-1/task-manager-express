export class TaskRepository {
  constructor(taskModel) {
    this.taskModel = taskModel;
  }

  async findAll() {
    return this.taskModel.findAll();
  }

  async findById(id) {
    return this.taskModel.findByPk(id);
  }
}
