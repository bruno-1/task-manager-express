import { Sequelize } from 'sequelize';

export default class Database {
  // eslint-disable-next-line sonarjs/public-static-readonly
  static #instance;

  static getInstance() {
    if (Database.#instance) return Database.#instance;

    const requiredEnvVars = [
      'DB_NAME',
      'DB_USER',
      'DB_PASSWORD',
      'DB_HOST',
      'DB_DIALECT',
    ];
    const missingVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar],
    );
    if (missingVars.length)
      throw new Error(`Missing env vars: ${missingVars.join(', ')}`);

    const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;
    Database.#instance = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: DB_DIALECT,
    });

    return Database.#instance;
  }

  static async testConnection() {
    await this.getInstance().authenticate();
  }
}
