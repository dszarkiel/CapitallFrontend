const goals = (state=[], action) => {
    let updatedGoals;

    switch(action.type){
        case "SIGN_IN_USER":
        case "CURRENT_USER":
            return action.user.goals
        case "SIGN_OUT_USER":
            return []
        case "ADD_GOAL":
            return [...state, action.goal]
        case "UPDATE_GOAL":
            updatedGoals = state.map(goal => {
                if (goal.id === action.goal.id) {
                    return action.goal
                } else {
                    return goal
                }
            })
            return updatedGoals
        case "DELETE_GOAL":
            updatedGoals = state.filter(goal => goal.id !== action.id)
            return updatedGoals
        default:
            return state
    }
}

export default goals