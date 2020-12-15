import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import coffeeReact from 'rollup-plugin-coffee-react'


export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'genComponent',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			coffeeReact({
				exclude: 'node_modules/**'
			}),
			json(),
			terser(),
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
				exclude: '/node_modules/**', // 排除node_modules 下的文件
				babelHelpers: 'runtime' // 防止生成多个 打包helper 函数
			}),
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			json(),
			terser(),
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
		]
	}
];
