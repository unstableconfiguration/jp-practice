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
