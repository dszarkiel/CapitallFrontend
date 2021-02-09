const selectAccount = (state=null, action) => {
    switch(action.type){
        case "SELECT_ACCOUNT":
            return action.account
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}


export default selectAccount