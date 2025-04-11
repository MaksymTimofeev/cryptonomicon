module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended', // поєднує ESLint та Prettier
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // використання одинарних лапок
        semi: false, // без крапок з комою
      },
    ],
  },
}
