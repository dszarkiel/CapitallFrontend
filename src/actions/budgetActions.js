export const addBudget = (budget) => {
    return {
        type: "ADD_BUDGET",
        budget: budget
    }
}
export const updateBudget = (budget) => {
    return {
        type: "UPDATE_BUDGET",
        budget: budget
    }
}
export const deleteBudget = (id) => {
    return {
        type: "DELETE_BUDGET",
        id: id
    }
}

// ACTION THAT ALLOWS TO PRE-FILL BUDGET INFO WHEN UPDATING SELECTED BUDGET
export const selectBudget = (budget) => {
    return {
        type: "SELECT_BUDGET",
        budget: budget
    }
}