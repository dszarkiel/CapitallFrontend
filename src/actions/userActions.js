export const signInUser = (user) => {
    return {
        type: "SIGN_IN_USER",
        user: user
    }
}
export const currentUser = (user) => {
    return {
        type: "CURRENT_USER",
        user: user
    }
}

export const signUpUser = (user) => {
    return {
        type: "SIGN_UP_USER",
        user: user
    }
}
export const signOutUser = () => {
    return {
        type: "SIGN_OUT_USER",
    }
}

export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user: user
    }
}