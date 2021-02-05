const transactions = (state=[], action) => {
    let updatedTransactions;

    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.transactions
        case "ADD_TRANSACTION":
            return [...state, action.transaction]
        case "DELETE_TRANSACTION":
            updatedTransactions = state.filter(t => t.id !== action.id)
            return updatedTransactions
        case "UPDATE_TRANSACTION":
            updatedTransactions = state.map(t => {
                if (t.id === action.transaction.id) {
                    return action.transaction
                } else {
                    return t
                }
            })
            return updatedTransactions
        default:
            return state
    }
}


export default transactions


