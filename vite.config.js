import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        productList: resolve(__dirname, 'src/pages/productList/index.html'),
        productDetail: resolve(__dirname, 'src/pages/productDetail/index.html'),
        cart: resolve(__dirname, 'src/pages/cart/index.html'),
      },
    },
  },
});
