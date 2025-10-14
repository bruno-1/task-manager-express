import { afterEach, describe, it, expect, jest } from '@jest/globals';
import { TaskRepository } from '../../src/repositories/index.js';

const mockTaskModel = {
  findAll: jest.fn(),
  findByPk: jest.fn(),
};

describe('TaskRepository', () => {
  const repository = new TaskRepository(mockTaskModel);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should find all tasks', async () => {
    const tasks = [
      {
        id: 'b84c53e5-1ae6-4469-b6a9-b59a8342ace4',
        title: 'Implement JWT authentication',
        description:
          'Create login and registration endpoints, generate JWT tokens, and protect private routes.',
        status: 'pending',
        createdAt: '2025-10-13T21:24:36.191Z',
        updatedAt: '2025-10-13T21:24:36.191Z',
      },
      {
        id: 'b7584ef2-266e-4ddc-a806-83b87384bc09',
        title: 'Build dashboard page',
        description:
          'Set up the main layout with dynamic data and reusable components.',
        status: 'in progress',
        createdAt: '2025-10-13T21:24:36.199Z',
        updatedAt: '2025-10-13T21:24:36.199Z',
      },
      {
        id: '09c9d9c0-a582-4397-bea8-113c3572a96d',
        title: 'Write unit tests',
        description:
          'Create login and registration endpoints, generate JWT tokens, and protect private routes.',
        status: 'pending',
        createdAt: '2025-10-13T21:24:36.201Z',
        updatedAt: '2025-10-13T21:24:36.201Z',
      },
    ];
    mockTaskModel.findAll.mockResolvedValue(tasks);

    const result = await repository.findAll();

    expect(mockTaskModel.findAll).toHaveBeenCalledWith();
    expect(result).toEqual(tasks);
  });

  it('should find a task by id', async () => {
    const task = {
      id: 'b84c53e5-1ae6-4469-b6a9-b59a8342ace4',
      title: 'Implement JWT authentication',
      description:
        'Create login and registration endpoints, generate JWT tokens, and protect private routes.',
      status: 'pending',
      createdAt: '2025-10-13T21:24:36.191Z',
      updatedAt: '2025-10-13T21:24:36.191Z',
    };
    mockTaskModel.findByPk.mockResolvedValue(task);

    const result = await repository.findById(task.id);

    expect(mockTaskModel.findByPk).toHaveBeenCalledWith(task.id);
    expect(result).toEqual(task);
  });
});
