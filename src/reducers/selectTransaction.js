const selectTransaction = (state=null, action) => {
    switch(action.type){
        case "SELECT_TRANSACTION":
            return action.transaction
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}


export default selectTransaction