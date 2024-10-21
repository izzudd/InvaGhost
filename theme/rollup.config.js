import { defineConfig } from 'rollup';
// A Rollup plugin which locates modules using the Node resolution algorithm
import { nodeResolve } from '@rollup/plugin-node-resolve';
// A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';
// Use the latest JS features in your Rollup bundle
import babel from '@rollup/plugin-babel';
// Minifies the bundle
import terser from '@rollup/plugin-terser';

// Development: Enables a livereload server that watches for changes to CSS, JS, and Handlbars files
import { resolve } from "path";
import livereload from 'rollup-plugin-livereload';

// Rollup configuration
export default defineConfig({
    input: 'src/script.js',
    output: {
        dir: "assets",
        format: 'iife',
        plugins: [isProduction() && terser()]
    },
    plugins: [
        commonjs(), 
        nodeResolve(), 
        babel({ babelHelpers: 'bundled' }),
        !isProduction() && livereload({
            watch: resolve('.'),
            extraExts: ['hbs'],
            exclusions: [resolve('node_modules')]
        }),
    ]
})

function isProduction() {
    return process.env.BUILD === "production";
}
