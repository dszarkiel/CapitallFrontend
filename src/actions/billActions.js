export const addBill = (bill) => {
    return {
        type: "ADD_BILL",
        bill: bill
    }
}
export const updateBill = (bill) => {
    return {
        type: "UPDATE_BILL",
        bill: bill
    }
}
export const deleteBill = (id) => {
    return {
        type: "DELETE_BILL",
        id: id
    }
}

// ACTION THAT ALLOWS TO PRE-FILL BILL INFO WHEN UPDATING SELECTED BILL
export const selectBill = (bill) => {
    return {
        type: "SELECT_BILL",
        bill: bill
    }
}