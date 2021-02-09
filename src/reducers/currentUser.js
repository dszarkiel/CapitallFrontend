const currentUser = (state=null, action) => {
    switch(action.type){
        case "SIGN_IN_USER":
        case "CURRENT_USER":
            return action.user
        case "SIGN_UP_USER":
            return action.user
        case "UPDATE_USER":
            return action.user
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}


export default currentUser