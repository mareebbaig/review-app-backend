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
            url: "/admin/getUnapparovedUsers",
            handler: authRequestHandlers.getUnapparovedUsers,
        };
    };
    const SearchUsers = () =>{
        return {
            method : "GET",
            url: "/SearchUsers/:username",
            handler: authRequestHandlers.SearchUsers,
        };
    };
    return {
        reqtest,
        getUnapparovedUsers,
        SearchUsers,
    };
};
