var cssnext = require('postcss-cssnext');

module.exports = {
    entry: "./cssnext.js",
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [cssnext];
    }
};