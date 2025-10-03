import { app } from './app.js';

async function startServer() {
  try {
    const port = process.env.APP_PORT || 3000;
    app.listen(port, () => {
      console.log(`The server is running on port ${port} 🚀`);
    });
  } catch (error) {
    console.error('error', error);
  }
}

await startServer();
