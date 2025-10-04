import { app } from './app.js';
import Database from './config/database.js';

async function startServer() {
  try {
    await Database.testConnection();
    console.log('Database connected!');

    const port = process.env.APP_PORT || 3000;
    app.listen(port, () => {
      console.log(`The server is running on port ${port} 🚀`);
    });
  } catch (error) {
    console.error('error', error);
  }
}

await startServer();
