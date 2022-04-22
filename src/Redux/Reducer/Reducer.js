
let data = []
export default function Reducer(state = data, Action) {

  switch (Action.type) 
  {
    case "getAllEmployee": state = []
      return state.concat(Action.data)


    default:
      return state;
  }
}
// export default function AddEmployee(state ={}, Action) {

//   switch (Action.type) {
//     case "AddEmployee": state

//       break;

//     default:
//       return state;
//   }
// }
export function OwnerData(state = {}, Action) {
 

  switch (Action.type) {
    case "GetOwnerData":
      
      state = {}
      let d = Object.assign({}, state, Action.data)
      return d;
    

    default:
      return state;
  }
}
