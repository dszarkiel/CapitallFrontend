const transactions = (state=[], action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.transactions
        default:
            return state
    }
}


export default transactions


