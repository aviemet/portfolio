module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': ['plugin:react/recommended'],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'requireConfigFile': false
	},
	'plugins': ['react', 'import'],
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'no-unused-vars': ['warn', {
			'vars': 'all',
			'args': 'none'
		}],
		'no-prototype-builtins': [0],
		'space-infix-ops': ['error'],
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [2, 'always', {
			'objectsInObjects': true
		}],
		'computed-property-spacing': 2,
		'array-bracket-spacing': 0,
		'brace-style': ['error', '1tbs', {
			'allowSingleLine': true
		}],
		'react/boolean-prop-naming': ['error'],
		'react/no-typos': ['error'],
		'react/jsx-curly-spacing': ['error', {
			'when': 'always',
			'children': true
		}],
		'react/display-name': ['off'],
		'react/prop-types': 0,
		'eqeqeq': 'error',
		'no-console': 'warn',
		'eol-last': ['error', 'always']
	}
}
