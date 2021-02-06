const selectBudget = (state=null, action) => {
    switch(action.type){
        case "SELECT_BUDGET":
            return action.budget
        default:
            return state
    }
}

export default selectBudget