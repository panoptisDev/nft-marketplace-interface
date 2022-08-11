module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:react/jsx-runtime',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@next/next/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest'
	},
	plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier', 'import'],
	ignorePatterns: ['node_modules/*'],
	rules: {
		'no-var': 'error',
		'prettier/prettier': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/react-in-jsx-scope': 'off'
	}
}
