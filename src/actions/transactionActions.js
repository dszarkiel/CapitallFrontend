export const addTransaction = (transaction) => {
    return {
        type: "ADD_TRANSACTION",
        transaction: transaction
    }
}

export const deleteTransaction = (id) => {
    return {
        type: "DELETE_TRANSACTION",
        id: id
    }
}