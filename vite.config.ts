import type { ManifestV3Export } from '@crxjs/vite-plugin';

import { crx } from '@crxjs/vite-plugin';
import { defineConfig } from 'vite';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [crx({ manifest: manifest as ManifestV3Export })],
  ...(process.env.NODE_ENV === 'test'
    ? {}
    : {
        server: {
          strictPort: true,
          port: 5173,
          hmr: {
            clientPort: 5173,
          },
        },
      }),
});
