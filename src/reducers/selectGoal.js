const selectGoal = (state=null, action) => {
    switch(action.type){
        case "SELECT_GOAL":
            return action.goal
        case "SIGN_OUT_USER":
            return null
        default:
            return state
    }
}

export default selectGoal