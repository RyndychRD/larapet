import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    server: {
        // тут необходимо сменить на текущий внешний адрес контейнера с php.
        // То есть он разворачивает на внешней сети свой сервак, с помощью которого он перегружает js файлы
        host: '172.22.0.2',
        port: 90
    }
});
