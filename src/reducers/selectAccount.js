const selectAccount = (state=null, action) => {
    switch(action.type){
        case "SELECT_ACCOUNT":
            return action.account
        default:
            return state
    }
}


export default selectAccount