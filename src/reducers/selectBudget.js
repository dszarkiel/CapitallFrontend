const selectBudget = (state=null, action) => {
    switch(action.type){
        case "SELECT_BUDGET":
            return action.budget
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}

export default selectBudget