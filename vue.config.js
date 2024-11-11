import { defineConfig } from '@vue/cli-service';
import { fileURLToPath } from 'url';
import path from 'path';

// Get __dirname equivalent in ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
});
