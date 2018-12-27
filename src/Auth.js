import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from './Auth.redux';
// 两个reducers, 两个reducer都有一个state
// 使用combineReducers合并reducer
@connect(
  state => state.auth,
  {login}
)
class Auth extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return (
      <div>
        { this.props.isAuth ? <Redirect to='./dashboard'></Redirect>:null}
        <h2>你没有权限，需要登录</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth;
