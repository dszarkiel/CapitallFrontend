export const addAccount = (account) => {
    return {
        type: "ADD_ACCOUNT",
        account: account
    }
}
export const updateAccount = (account) => {
    return {
        type: "UPDATE_ACCOUNT",
        account: account
    }
}
export const deleteAccount = (id) => {
    return {
        type: "DELETE_ACCOUNT",
        id: id
    }
}



// ACTION THAT ALLOWS TO PRE-FILL ACCOUNT INFO WHEN UPDATING SELECTED ACCOUNT
export const selectAccount = (account) => {
    return {
        type: "SELECT_ACCOUNT",
        account: account
    }
}