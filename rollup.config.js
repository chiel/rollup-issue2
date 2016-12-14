import css from 'modular-css/rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/index.js',
	dest: `dist/app.js`,
	format: 'iife',
	plugins: [
		nodeResolve({
			jsnext: true,
		}),
		commonjs({
			namedExports: {
				'react': ['PropTypes', 'createElement'],
				'reactabular-table': ['Provider', 'Header', 'Body'],
			},
		}),
		css(),
	],
};
