import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'

export default {
    plugins: [
        commonjs({
          include: 'src/html.js',

          namedExports: { 'src/html.js': ['div', 'h1'] }
        }),

/*        uglify({
            compress: {
                collapse_vars: true,
                pure_funcs: ["Object.defineProperty"]
            }
        })*/
    ]
}
