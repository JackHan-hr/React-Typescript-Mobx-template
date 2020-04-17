# CRM3.0系统设置

## Available Scripts

In the project directory, you can run:

#### `yarn start`

#### `yarn test`

#### `yarn build`

#### 该项目由 Typescript + mobx + React + React-Router-Dom + antd 构成

#### 利用@loadable/component做组件按需加载

#### 利用mobx做状态管理刷新

#### 利用antd做主界面布局和UI呈现

#### 利用react-intl-universal做国际化语言

#### webpack作为打包编译工具

#### 配置Jest单元测试

#### 配置Prettier代码格式化

#### 配置Eslint语法检测

### 项目结构

```bash
——— build ---------------- 打包输出
  丨
——— config --------------- create-react-app + 自定义配置
  丨
——— public --------------- 根页面
  丨
——— release -------------- 发布文件
  丨
——— src
  丨
  ——— assets ------------- 资源文件
  丨
  ——— common ------------- 公用文件
  丨
  ——— components --------- 组件
  丨
  ——— constants ---------- 常量定义
  丨
  ——— layouts ------------ 布局
  丨
  ——— locales ------------ 本地化语言
  丨
  ——— pages -------------- 应用页
  丨
  ——— services ----------- 服务请求
  丨
  ——— stores ------------- mobx的store层
  丨
  ——— styles ------------- 全局样式
  丨
  ——— unils -------------- 工具文件
  丨
  ——— vendor ------------- 第三方库文件
  丨
——— tests ---------------- 单元测试
  丨
——— typings -------------- 全局类型声明
```
