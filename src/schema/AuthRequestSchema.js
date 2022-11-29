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
    const updateUserStatus = () => {
        return {
            method: "PUT",
            url: "/admin/acceptUser",
            handler: authRequestHandlers.updateUserStatus,
        };
    };

    const deleteUser = () => {
        return {
            method: "DELETE",
            url: "/admin/deleteUser",
            handler: authRequestHandlers.deleteUser,
        };
    };

    return {
        reqtest,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        updateUserStatus,
        deleteUser,
    };
};
