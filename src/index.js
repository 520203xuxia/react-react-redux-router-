import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Auth from './Auth';
import Dashboard from './Dashboard';
// import { counter } from './index.redux';
import reducers from './reducers';
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(/*counter*/ reducers,compose(
  applyMiddleware(thunk),
  reduxDevtools
));
console.log(store.getState());
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
        <Switch>{/*Switch 只渲染命中的第一个Route*/}
          <Route path='/login' exact component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
        {/* 路由对应渲染模板 exact代码完全匹配*/}
    </BrowserRouter>
  </Provider>)
  ,document.getElementById('root'))
