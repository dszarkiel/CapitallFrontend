export const signInUser = (user) => {
    return {
        type: "SIGN_IN_USER",
        user: user
    }
}