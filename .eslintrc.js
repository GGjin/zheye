module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': ['off', 'windows'],
    'array-bracket-spacing': [2, 'never'],
    'indent': 0,
    // 引入模块没有放入顶部
    'import/first': 0,
    // 前面缺少空格，Missing space before
    'arrow-spacing': 0,
    // 后面没有空位，There should be no space after this paren
    'space-in-parens': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 引号类型
    'quotes': [0, 'single'],
    // js语句结尾必须使用分号
    'semi': ['off', 'always'],
    'objectsInObjects': true,
    'arraysInObjects': true,
  },
};
