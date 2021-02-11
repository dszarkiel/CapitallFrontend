const selectBill = (state=null, action) => {
    switch(action.type){
        case "SELECT_BILL":
            return action.bill
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}

export default selectBill