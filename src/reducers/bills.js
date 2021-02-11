const bills = (state=[], action) => {
    let updatedBills;

    switch(action.type){
        case "SIGN_IN_USER":
        case "CURRENT_USER":
            return action.user.bills
        case "SIGN_OUT_USER":
            return []
        case "ADD_BILL":
            return [...state, action.bill]
        case "UPDATE_BILL":
            updatedBills = state.map(bill => {
                if (bill.id === action.bill.id) {
                    return action.bill
                } else {
                    return bill
                }
            })
            return updatedBills
        case "DELETE_BILL":
            updatedBills = state.filter(bill => bill.id !== action.id)
            return updatedBills
        default:
            return state
    }
}

export default bills