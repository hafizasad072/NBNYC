import axios from 'axios'
import {SaveState} from '../../Utils/LocalStorage';
var initialState = {
  _accessToken: "",
  IsUserAuthenticated: false
}
const RLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'Login_Post': {
        let newstate="";
      axios({
        method: 'post',
        url: 'http://localhost:50239/api/Token/GetToken',
        data: { Username: action.login.Email, Password: action.login.Password }
      }).then(response => response).then((data) => {
        //console.log(data);
        if(data.status != 200)
        return state;
        newstate = { _accessToken: data.data, IsUserAuthenticated: true };
        SaveState(newstate);
        return newstate;
      })
      return newstate;}
      case 'Logout':
        debugger
          let newstate = { _accessToken: "", IsUserAuthenticated: false };
          SaveState(newstate);
          return newstate;
    default:
      return state;
  }
}

export default RLogin;