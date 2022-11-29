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

    async function getAllUsers(request, response) {
        const res = await authMediator.getAllUsers();
        response.send(res);
    }
    async function getAllEmployees(request, response) {
        const res = await authMediator.getAllEmployees();
        response.send(res);
    }

    async function updateUserStatus(request, response) {
        const { body } = request;
        const res = await authMediator.updateUserStatus({ ...body });
        response.send(res);
    }

    async function deleteUser(request, response) {
        const { body } = request;
        const res = await authMediator.deleteUser({ ...body });
        response.send(res);
    }

    return {
        test,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        updateUserStatus,
        deleteUser,
    };
};
