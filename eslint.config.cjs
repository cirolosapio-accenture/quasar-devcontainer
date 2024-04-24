const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    jsonc: false,
    yaml: false,
    // unocss: true,
    ignores: [
      './dist',
      './src-capacitor',
      './src-cordova',
      './.quasar',
      './.pnpm-store',
      './node_modules',
      './netlify.toml',
      './quasar.config.*.temporary.compiled*',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'curly': ['error', 'multi-or-nest'],
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
      'antfu/top-level-function': 'off',
      'antfu/if-newline': 'off',
      'node/prefer-global/process': ['error', 'always'],
      'style/max-statements-per-line': 'off',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/valid-v-bind': 'off',
      'vue/html-self-closing': ['error', { html: { void: 'always' } }],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
    },
  },
)
