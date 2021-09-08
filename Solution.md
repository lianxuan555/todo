## typescript 版本切换

`cmd+shift+p`  输入 `Select Typescript Version`
支持新版本redux，对照 tsconfig.json 中的 `"jsx": "react-jsx"` 选项

## cra应用别名alias设置

添加扩展文件（非必要），对照 `tsconfig.json` 中的  `"extends": "./tsconfig.path.json"`

`tsconfig.path.json` 文件中添加如下配置

````json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
````

`config-overrides.js` 文件中添加如下配置

````javascript
// 这个插件可以提供一些便利的工具函数用来改变cra配置
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  })
);
````

## cra使用scss

只需要安装正确版本的 `node-sass`

## eslint和prettier冲突问题

````json
{
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
````

## stylelint使用@function和@mixin

````javascript
'at-rule-no-unknown': null

'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'include', 'extend', 'content', 'function', 'if', 'return'] }
]
````

