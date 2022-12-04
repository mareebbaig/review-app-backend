module.exports = function AuthRequestSchema(opts) {
    const { authRequestHandlers, Joi } = opts;

    // const verifyAuthOtvc = () => {
    //     return {
    //         method: 'POST',
    //         schema: {
    //             body: Joi.object().keys({
    //                 otvc: Joi.string().required(),
    //                 phone: Joi.string().required(),
    //             })
    //         },
    //         url: '/verify/auth/otvc',
    //         handler: authRequestHandlers.verifyAuthOtvc,
    //     }
    // }
    const reqtest = () => {
        return {
            method: "POST",
            url: "/test",
            handler: authRequestHandlers.test,
        };
    };

    const signup = () => {
        return {
            method: "POST",
            url: "/signup",
            handler: authRequestHandlers.signup,
        };
    };

    const login = () => {
        return {
            method: "POST",
            schema: {
                body: Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                }),
            },
            url: "/login",
            handler: authRequestHandlers.login,
        };
    };

    const getUnapparovedUsers = () => {
        return {
            method: "GET",
            url: "/admin/getUnapprovedUsers",
            handler: authRequestHandlers.getUnapparovedUsers,
        };
    };

    const getAllUsers = () => {
        return {
            method: "GET",
            url: "/admin/getAllUsers",
            handler: authRequestHandlers.getAllUsers,
        };
    };

    const getAllEmployees = () => {
        return {
            method: "GET",
            url: "/admin/getAllEmployees",
            handler: authRequestHandlers.getAllEmployees,
        };
    };

    const acceptUser = () => {
        return {
            method: "PUT",
            url: "/admin/acceptUser",
            handler: authRequestHandlers.acceptUser,
        };
    };

    const deleteUser = () => {
        return {
            method: "DELETE",
            url: "/admin/deleteUser",
            handler: authRequestHandlers.deleteUser,
        };
    };

    const getUser = () => {
        return {
            method: "POST",
            url: "/admin/users/getUser",
            handler: authRequestHandlers.getUser,
        };
    };

    const updateUserbyAdmin = () => {
        return {
            method: "PUT",
            url: "/users/updateUser",
            handler: authRequestHandlers.updateUser,
        };
    };

    const updateUser = () => {
        return {
            method: "PUT",
            url: "/admin/users/updateUser",
            handler: authRequestHandlers.updateUser,
        };
    };

    const SearchUsers = () => {
        return {
            method: "GET",
            url: "/SearchUsers/:username",
            handler: authRequestHandlers.SearchUsers,
        };
    };
    return {
        reqtest,
        signup,
        login,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
        updateUserbyAdmin,
        updateUser,
        SearchUsers,
    };
};
