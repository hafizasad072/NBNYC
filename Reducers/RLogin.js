const RLogin = (state = [], action) => {
    switch (action.type) {
      case 'Login_Post':
        console.log(action.data)
        alert("Login")
        break;
      default:
        return state;
    }
  }
  
  export default RLogin;