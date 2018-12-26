const ADD_GUN ='加';
const SUB_GUN ='减';
// reducer
export function counter(state=0,action){
  switch(action.type){
    case ADD_GUN:
      return state+1;
    case SUB_GUN:
      return state-1;
    default:
      return 10;
  }
}
// action creator
export function addGUN(){
  return {
    type:ADD_GUN
  }
}
export function removeGUN(){
  return {
    type:SUB_GUN
  }
}
export function addGunAsync(){
  return dispatch=>{
    setTimeout(()=>{
      dispatch(addGUN())
    },2000)
  }
}
