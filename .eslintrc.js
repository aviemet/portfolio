module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'plugin:import/typescript'],
	settings: {
		'import/resolver': {
			typescript: {}
		}
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		requireConfigFile: false
	},
	plugins: ['react', '@typescript-eslint', 'import'],
	rules: {
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 'first',
			MemberExpression: 1,
			ArrayExpression: 1
		}],
		'@typescript-eslint/member-delimiter-style': ['error', {
			multiline: {
				delimiter: 'none'
			},
			singleline: {
				delimiter: 'comma'
			},
			multilineDetection: 'brackets'
		}],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-unused-vars': ['warn', {
			vars: 'all',
			args: 'none'
		}],
		'no-prototype-builtins': [0],
		'space-infix-ops': ['error'],
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [2, 'always', {
			objectsInObjects: true
		}],
		'computed-property-spacing': 2,
		'array-bracket-spacing': 0,
		'brace-style': ['error', '1tbs', {
			allowSingleLine: true
		}],
		'react/boolean-prop-naming': ['error'],
		'react/no-typos': ['error'],
		'react/jsx-curly-spacing': ['error', {
			when: 'always',
			children: true
		}],
		'react/display-name': ['off'],
		'react/prop-types': 0,
		eqeqeq: 'error',
		'no-console': 'warn',
		'eol-last': ['error', 'always']
	},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      processor: '@graphql-eslint/graphql',
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      env: {
        es6: true,
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
          },
        ],
      },
    },
  ],
}
