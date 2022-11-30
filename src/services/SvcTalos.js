module.exports = function SvcTalos(opts) {
    const { mdlTest, db } = opts;
    async function getFromDB({ phone }) {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        const result = await db["primary"].any(mdlTest.query, "");
        const response = result;
        return response;
    }

    async function signup({
        user_id,
        admin_id,
        first_name,
        last_name,
        email,
        country,
        organisation,
        phone,
        password,
        type_id,
    }) {
        const result = await db["primary"].query(mdlTest.signup, {
            user_id,
            admin_id,
            first_name,
            last_name,
            email,
            country,
            organisation,
            phone,
            password,
            type_id,
        });
        return result;
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

    async function acceptUser({ user_id }) {
        const result = await db["primary"].query(mdlTest.acceptUser, {
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

    async function getUser({ user_id }) {
        const result = await db["primary"].query(mdlTest.getUser, {
            user_id,
        });
        return result;
    }

    return {
        getFromDB,
        signup,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
    };
};
