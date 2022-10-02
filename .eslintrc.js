import { join } from 'path'
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: join(__dirname, './tsconfig.json'),
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'dtslint/expect-deprecation': 'error',
		'dtslint/expect-type': 'error',
		'dtslint/no-typo': 'error',
	},
}
