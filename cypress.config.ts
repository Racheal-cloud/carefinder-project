import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 5,
  pageLoadTimeout: 60000,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // You can modify config object here if needed
      return config;
    },
  },
});
