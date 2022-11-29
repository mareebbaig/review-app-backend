module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db } = opts;
    async function getFromDB({ phone }) {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        const result = await db["primary"].any(mdlTest.query, "");
        const response = result;
        return response;
    }
    async function getUnapparovedUsers() {
        const result = await db["primary"].query(mdlTest.getUnapparovedUsers);
        return result;
    }
    async function getAllUsers() {
        const result = await db["primary"].query(mdlTest.getAllUsers);
        return result;
    }

    async function getAllEmployees() {
        const result = await db["primary"].query(mdlTest.getAllEmployees);
        return result;
    }

    async function updateUserStatus({ user_id }) {
        const result = await db["primary"].query(mdlTest.updateUserStatus, {
            user_id,
        });
        return result;
    }

    async function deleteUser({ user_id }) {
        const result = await db["primary"].query(mdlTest.deleteUser, {
            user_id,
        });
        return result;
    }

    return {
        getFromDB,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        updateUserStatus,
        deleteUser,
    };
};
