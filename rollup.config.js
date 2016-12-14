import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/index.js',
	dest: `dist/app.js`,
	format: 'iife',
	plugins: [
		nodeResolve(),
	],
};
