import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve'

export default [{
        input: 'src/index.js',
        output: {
            dir: 'dist',
            format: 'es'
        },
        plugins : [
            del({ targets: 'dist/*' }),
            babel({ babelHelpers: 'bundled' }),
            copy({
                targets : [
                    { src : 'src/**/*.html', dest: 'dist' },
                    { src : 'src/**/*.css', dest : 'dist' },
                    { src : 'src/favicon.ico', dest: 'dist' }
                ],
                flatten : false
            }),
            serve('dist')
        ]
    }
];