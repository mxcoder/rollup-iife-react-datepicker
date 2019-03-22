import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  input: 'index.js',
  output: {
    name: 'Datepicker',
    file: 'bundle.js',
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      classnames: 'classNames',
      moment: 'moment'
    }
  },
  external: ['react', 'react-dom', 'moment', 'classnames'],
  plugins: [
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
