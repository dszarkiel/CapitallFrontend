const accounts = (state=[], action) => {
    let updatedAccounts;

    switch(action.type){
        case "SIGN_IN_USER":
        case "CURRENT_USER":
            return action.user.accounts
        case "ADD_ACCOUNT":
            return [...state, action.account]
        case "UPDATE_ACCOUNT":
            updatedAccounts = state.map(acc => {
                if (acc.id === action.account.id) {
                    return action.account
                } else {
                    return acc
                }
            })
            return updatedAccounts
        case "DELETE_ACCOUNT":
            updatedAccounts = state.filter(acc => acc.id !== action.id)
            return updatedAccounts
        default:
            return state
    }
}


export default accounts