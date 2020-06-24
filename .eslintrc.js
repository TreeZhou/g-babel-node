module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  globals: {},
  plugins: [],
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    quotes: ['error', 'single'], //单引号
    semi: ['error', 'always'], //分号
    'comma-dangle': ['error', 'never'], //对象数组最后一项是否要尾部逗号
    'arrow-parens': ['error', 'as-needed'], //箭头函数参数括号
    'object-curly-spacing': ['error', 'always'], //对象花括号空格
    'jsx-quotes': ['error', 'prefer-double'], //jsx属性的引号
    eqeqeq: 0, //使用绝对等于
    camelcase: 0, //js使用驼峰法(后端会有属性名sneke case)
    'no-console': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
