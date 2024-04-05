const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(gif|png|jp?g|svg)$/i,
            use: [
              "file-loader",
              {
                loader: "image-webpack-loader",
                options: {
                  bypassOnDebug: true,
                  disable: true,
                },
              },
            ],
          },
        ],
      },
    devServer: {
        static: "./dist",
        compress: true,
        open: true,
        port: 9000,
        hot: true
    },
    devtool: "inline-source-map",
};