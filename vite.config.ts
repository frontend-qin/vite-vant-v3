import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginImp from 'vite-plugin-imp';

import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';

const path = require('path');

const resolve = (dir: string): string => path.join(__dirname, dir);

export default defineConfig({
    plugins: [
        vue(),
        // 配置按需加载vant 组件
        vitePluginImp({
            libList: [
                {
                    libName: 'vant',
                    style(name) {
                        if (/CompWithoutStyleFile/i.test(name)) {
                            return false;
                        }
                        return `vant/es/${name}/index.css`;
                    }
                }
            ]
        })
    ],
    // 配置别名
    resolve: {
        alias: {
            '@': resolve('src')
        }
    },
    css: {
        postcss: {
            // 配置px自动转rem
            plugins: [
                autoprefixer(),
                pxtorem({
                    rootValue: 37.5,
                    propList: ['*']
                })
            ]
        }
    },
    server: {
        port: 9528,
        proxy: {}
    }
});
