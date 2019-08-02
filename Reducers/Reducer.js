import Rlogin from './RLogin'
import RPost from './RPost'
import { combineReducers } from 'redux'
export default combineReducers({
  Rlogin,
  RPost
})
// const Reducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_POST':
//       return state.concat(action.data);
//     case 'DELETE_POST':
//       return state.filter((post) => post.id !== action.id);
//     case 'EDIT_POST':
//       return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
//     case 'Login_Post':
//       console.log(action.data)
//       alert("Login")
//       break;
//     default:
//       return state;
//   }
// }

// export default Reducer;