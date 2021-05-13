import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import less from 'rollup-plugin-scss';
import dartSass from 'sass';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/lib/index.ts',
    output: [
        {
            globals: {
                vue: 'Vue',
            },
            name: 'color-ui',
            file: 'package/lib/color-ui.js',
            format: 'umd',
            plugins: [terser()],
        }, {
            name: 'color-ui',
            file: 'package/lib/color-ui.esm.js',
            format: 'es',
            plugins: [terser()],
        }],
    plugins: [
        less({include: /\.scss$/, less: dartSass}),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015',
        }),
        vue({
            include: /\.vue$/,
        }),
    ],
};
