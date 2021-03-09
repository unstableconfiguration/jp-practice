import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy'

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
                    { src : 'src/**/*.css', dest : 'dist' }
                ],
                flatten : false
            }),
        ]
    }
];