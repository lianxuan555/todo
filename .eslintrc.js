module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'plugin:prettier/recommended'], //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint', 'html'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false,
        useTabs: false,
        tabWidth: 2
      }
    ]
  }
}
