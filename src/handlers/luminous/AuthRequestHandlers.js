module.exports = function AuthRequestHandlers(opts) {
    const { authMediator, uuid } = opts;

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function signup(request, response) {
        const { body } = request;
        body.user_id = uuid();
        const res1 = await authMediator.signup({ ...body });
        response.send(res1);
    }

    async function getUnapparovedUsers(request, response) {
        const res = await authMediator.getUnapparovedUsers();
        response.send(res);
    }

    async function getAllUsers(request, response) {
        const res = await authMediator.getAllUsers();
        response.send(res);
    }
    async function getAllEmployees(request, response) {
        const res = await authMediator.getAllEmployees();
        response.send(res);
    }

    async function acceptUser(request, response) {
        const { body } = request;
        const res = await authMediator.acceptUser({ ...body });
        response.send(res);
    }

    async function deleteUser(request, response) {
        const { body } = request;
        const res = await authMediator.deleteUser({ ...body });
        response.send(res);
    }

    async function getUser(request, response) {
        const { body } = request;
        const res = await authMediator.getUser({ ...body });
        response.send(res);
    }

    async function updateUser(request, response) {
        const { body } = request;
        const res = await authMediator.updateUser({ ...body });
        response.send(res);
    }

    return {
        test,
        signup,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
        updateUser,
    };
};
