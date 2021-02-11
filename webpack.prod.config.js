const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode : 'production',
    entry : {
        index : {
            import : './src/index.js'
        }
    },
    module : { 
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist')
    },
    plugins : [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns : [
                { 
                    from : 'src', 
                    filter : (path) => { 
                        return path.substr(-4) === 'html'
                            || path.substr(-3) === 'css'
                    } 
                },
            ]
        })
    ]
};
