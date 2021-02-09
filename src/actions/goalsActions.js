export const addGoal = (goal) => {
    return {
        type: "ADD_GOAL",
        goal: goal
    }
}
export const updateGoal = (goal) => {
    return {
        type: "UPDATE_GOAL",
        goal: goal
    }
}
export const deleteGoal = (id) => {
    return {
        type: "DELETE_GOAL",
        id: id
    }
}

// ACTION THAT ALLOWS TO PRE-FILL GOAL INFO WHEN UPDATING SELECTED GOAL
export const selectGoal = (goal) => {
    return {
        type: "SELECT_GOAL",
        goal: goal
    }
}