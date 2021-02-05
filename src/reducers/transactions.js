const transactions = (state=[], action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.transactions
        case "ADD_TRANSACTION":
            return [...state, action.transaction]
        case "DELETE_TRANSACTION":
            let remainingTransactions = state.filter(t => t.id !== action.id)
            return remainingTransactions
        default:
            return state
    }
}


export default transactions


