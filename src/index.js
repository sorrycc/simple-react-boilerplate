// import 三方库，比如：
// 1. 补丁方案
// 2. 其他三方库
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Routes />
    </div>
  );
}

function Routes() {
  function HomePage() {
    return <div>Home Page</div>
  }

  return (
    // 路由外套一些 Provider，比如
    // 1. theme provider
    // 2. i18n provider
    // 3. redux store provider
    <HashRouter>
      <Switch>
        {/* 针对路由可以做很多事，比如：*/}
        {/* 1. 权限路由 */}
        {/* 2. 埋点 */}
        {/* 3. 按需编译 */}
        {/* 4. 按需加载 */}
        {/* 5. Title 配置 */}
        {/* 6. 动效处理 */}
        {/* 7. keep alive */}
        {/* 8. ... */}
        <Route path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
}

function render() {
  // 渲染前做一些事，比如：
  // 1. 权限校验
  // 2. 三方依赖的初始化
  // 3. 动态修改路由
  ReactDOM.render(<App/>, document.getElementById('root'));
}

render();
// 渲染后做一些事，比如：
// 1. Hot Module Replacement
// 2. ...
