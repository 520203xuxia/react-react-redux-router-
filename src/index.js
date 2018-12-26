import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {counter, addGUN, removeGUN,addGunAsync} from './index.redux';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};
const store = createStore(counter,compose(
  applyMiddleware(thunk),
  reduxDevtools
));

function render(){
  const appProps={
    store: store,
    addGUN: addGUN,
    removeGUN: removeGUN,
    addGunAsync: addGunAsync
  }
  ReactDom.render(<App {...appProps} />,document.getElementById('root'))
}
render();
store.subscribe(render);
