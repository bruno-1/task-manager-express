import { DataTypes, Model } from 'sequelize';
import { TaskStatus } from '../constants/index.js';
import Database from '../config/database.js';

class TaskModel extends Model {}

TaskModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(11),
      validate: {
        isIn: [[...TaskStatus]],
      },
      defaultValue: 'pending',
      allowNull: false,
    },
  },
  {
    sequelize: Database.getInstance(),
    modelName: 'Task',
  },
);

export { TaskModel };
