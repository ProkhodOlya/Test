/**
 * Created by ni032 on 04.01.2017.
 */
var webpack = require('webpack');

// настройка сборщика

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: './public'
    },
};