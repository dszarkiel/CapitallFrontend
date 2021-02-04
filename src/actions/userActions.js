export const signInUser = (user) => {
    return {
        type: "SIGN_IN_USER",
        user: user
    }
}

export const signUpUser = (user) => {
    return {
        type: "SIGN_UP_USER",
        user: user
    }
}

export const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user: user
    }
}