const budgets = (state=[], action) => {
    let updatedBudgets

    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.budgets
        case "ADD_BUDGET":
            return [...state, action.budget]
        case "UPDATE_BUDGET":
            updatedBudgets = state.map(budget => {
                if (budget.id === action.budget.id) {
                    return action.budget
                } else {
                    return budget
                }
            })
            return updatedBudgets
        case "DELETE_BUDGET":
            updatedBudgets = state.filter(budget => budget.id !== action.id)
            return updatedBudgets
        default:
            return state
    }
}

export default budgets