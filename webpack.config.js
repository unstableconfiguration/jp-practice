const path = require('path');

module.exports = {
    mode : 'development',
    devtool : false,
    entry : {
        index : {
            import : './src/index.js'
        }
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist')
    }
};
