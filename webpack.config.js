const HtmlWebpackPlugin = require('html-webpack-plugin');

// ?? 使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。

module.exports = {
    // entry
    entry: './path/to/my/entry/file.js',
    // output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    // loader
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    // plugins,通过头部require引入
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};