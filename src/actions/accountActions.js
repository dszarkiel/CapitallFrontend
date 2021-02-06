export const addAccount = (account) => {
    return {
        type: "ADD_ACCOUNT",
        account: account
    }
}
export const deleteAccount = (id) => {
    return {
        type: "DELETE_ACCOUNT",
        id: id
    }
}