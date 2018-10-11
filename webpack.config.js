module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }

            }

        ]
    }
}
