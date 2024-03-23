import { defineConfig } from 'cypress'
import coverageTask from "@cypress/code-coverage/task";


export default defineConfig({
  projectId: 'juw6ti',
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
  },
  component: {
    specPattern: 'src/**/__tests__/*.{cy,}.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    },
    setupNodeEvents(on, config) {
      coverageTask(on, config);
      return config;
    },
  }
})
