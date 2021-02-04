const currentUser = (state=null, action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user
        case "SIGN_UP_USER":
            return action.user
        default:
            return state
    }
}


export default currentUser