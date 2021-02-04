const budgets = (state=[], action) => {
    switch(action.type){
        case "SIGN_IN_USER":
            return action.user.budgets
        default:
            return state
    }
}


export default budgets