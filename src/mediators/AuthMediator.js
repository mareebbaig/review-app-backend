module.exports = function AuthMediator(opts) {
    const { svcTalos } = opts;

    async function test({ number, service }) {
        let account = "hello";

        //  number = sanitizePhoneNumber({ phone: number });

        account = await svcTalos.getFromDB({ phone: number });
        return account;
    }

    async function getUnapparovedUsers() {
        const res = await svcTalos.getUnapparovedUsers();
        return res;
    }
    async function getAllUsers() {
        const res = await svcTalos.getAllUsers();
        return res;
    }
    async function getAllEmployees() {
        const res = await svcTalos.getAllEmployees();
        return res;
    }

    async function updateUserStatus({ user_id }) {
        const res = await svcTalos.updateUserStatus({ user_id });
        return res;
    }

    async function deleteUser({ user_id }) {
        const res = await svcTalos.deleteUser({ user_id });
        return res;
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
