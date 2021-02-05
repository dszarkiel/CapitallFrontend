const selectTransaction = (state=null, action) => {
    switch(action.type){
        case "SELECT_TRANSACTION":
            return action.transaction
        default:
            return state
    }
}


export default selectTransaction