const checkValidaeData = (email, password) => {
    const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordVaildation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
    // const isUserName = /^[[A-Z]|[a-z]][[A-Z]|[a-z]|\\d|[_]]{7,29}$/.test(userName)

    if (!isEmailVaild) return "Email Id is not vaild";
    if (!isPasswordVaildation) return "Password is not vaild";
    // if (!isUserName) return "user name has minimum 8 "
    return null;
};
export default checkValidaeData