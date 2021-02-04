const accounts = (state=[], action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.accounts
        default:
            return state
    }
}


export default accounts