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

export const updateTransaction = (transaction) => {
    return {
        type: "UPDATE_TRANSACTION",
        transaction: transaction
    }
}

// ACTION THAT ALLOWS TO PRE-FILL TRANSACTION INFO WHEN UPDATING SELECTED TRANSACTION
export const selectTransaction = (transaction) => {
    return {
        type: "SELECT_TRANSACTION",
        transaction: transaction
    }
}