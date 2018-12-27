import React from 'react';
import { connect } from 'react-redux';
import {addGUN, removeGUN, addGunAsync} from './index.redux';
// 使用装饰器的写法
@connect(
  // 你要state什么属性放到props里
  state => ({num: state.counter}),
  // 你要什么方法，放到props里，自动dispatch
  { addGUN, removeGUN, addGunAsync }
)
class App extends React.Component{
  render(){
    const {addGUN, removeGUN, addGunAsync, num} = this.props;
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={addGUN}>申请武器</button>
        <button onClick={removeGUN}>上交武器</button>
        <button onClick={addGunAsync}>晚两天给你</button>
      </div>
    )
  }
}
// 不使用装饰器的写法
// const mapStateToProps=(state)=>{
//   return {num: state}
// }
// const mapDispatchToProps = { addGUN, removeGUN, addGunAsync }
// App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
