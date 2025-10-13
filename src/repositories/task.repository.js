export class TaskRepository {
  constructor(taskModel) {
    this.taskModel = taskModel;
  }

  async findAll() {
    return this.taskModel.findAll();
  }
}
