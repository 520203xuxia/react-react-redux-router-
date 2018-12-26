import React from 'react';
export default class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    const {store, addGUN, removeGUN, addGunAsync} = this.props;
    const num = store.getState();
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={()=>store.dispatch(addGUN())}>申请武器</button>
        <button onClick={()=>store.dispatch(removeGUN())}>上交武器</button>
        <button onClick={()=>store.dispatch(addGunAsync())}>晚两天给你</button>
      </div>
    )
  }
}
