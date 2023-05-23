import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// npm install @types/node --save-dev
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './',
    esbuild: {
        jsxFactory: '_jsx',
        jsxFragment: '_jsxFragment',
        jsxInject: 'import { createElement as _jsx, Fragment as _jsxFragment } from \'react\''
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/')
        }
    }
})
