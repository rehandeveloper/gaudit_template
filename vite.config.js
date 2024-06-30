// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
        alias: {
            '@src': '/src' // Example alias for src directory
        }
    }
});
