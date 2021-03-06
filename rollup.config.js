import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';

const config = {
  moduleName: 'ReactBulma',
  entry: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      plugins: ['external-helpers'],
    }),
  ],
  sourceMap: true,
  external: [
    'react',
    'react-dom',
    'react-addons-css-transition-group',
    'react-addons-transition-group',
  ],
  // Used for the UMD bundles
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
    'react-addons-transition-group': 'React.addons.TransitionGroup',
  },
  targets: [
    { dest: 'dist/reactbulma.es.js', format: 'es' },
    { dest: 'dist/reactbulma.min.js', format: 'umd' },
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(babili({ comments: false }));
}

export default config;
