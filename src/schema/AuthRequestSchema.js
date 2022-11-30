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
            schema: {
                body: Joi.object().keys({
                    username: Joi.string().required(),
                    password: Joi.string().required(), // agey password hasing k liye use krna hai.
                    email: Joi.string().required().email(),
                    company_name: Joi.string().required(),
                    city: Joi.string().required(),
                }),
            },
            url: "/signup",
            handler: authRequestHandlers.signup,
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

    return {
        reqtest,
        signup,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
    };
};
