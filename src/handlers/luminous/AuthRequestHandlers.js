module.exports = function AuthRequestHandlers(opts) {
    const { authMediator } = opts;

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function getUnapparovedUsers(request, response) {
        const res = await authMediator.getUnapparovedUsers();
        response.send(res);
    }
    return {
        test,
        getUnapparovedUsers,
    };
};
