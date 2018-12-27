import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './App';
import { counter } from './index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  reduxDevtools
));
function Erying(){
  return <h2>二营</h2>
}
function Qibinglian(){
  return <h2>骑兵连</h2>
}
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          {/* 点击跳到指定路由 */}
          <li><Link to='/'>一营</Link></li>
          <li><Link to='/erying'>二营</Link></li>
          <li><Link to='/qibinglian'>骑兵连</Link></li>
        </ul>
        {/* 路由对应渲染模板 exact代码完全匹配*/}
        <Route path='/' exact component={App}></Route>
        <Route path='/erying' component={Erying}></Route>
        <Route path='/qibinglian' component={Qibinglian}></Route>
      </div>
    </BrowserRouter>
  </Provider>)
  ,document.getElementById('root'))
