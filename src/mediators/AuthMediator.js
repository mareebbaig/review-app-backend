module.exports = function AuthMediator(opts) {
    const { svcTalos } = opts;

    async function test({ number, service }) {
        let account = "hello";

        //  number = sanitizePhoneNumber({ phone: number });

        account = await svcTalos.getFromDB({ phone: number });
        return account;
    }

    async function signup({
        user_id,
        first_name,
        last_name,
        email,
        country,
        organisation,
        phone,
        password,
        type_id,
    }) {
        res = await svcTalos.signup({
            user_id,
            first_name,
            last_name,
            email,
            country,
            organisation,
            phone,
            password,
            type_id,
        });
        return res;
    }

    async function login(email) {
        res = await svcTalos.login(email);
        return res;
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

    async function acceptUser({ user_id }) {
        const res = await svcTalos.acceptUser({ user_id });
        return res;
    }

    async function deleteUser({ user_id }) {
        const res = await svcTalos.deleteUser({ user_id });
        return res;
    }

    async function getUser({ user_id }) {
        const res = await svcTalos.getUser({ user_id });
        return res;
    }

    async function updateUser({
        user_id,
        first_name,
        last_name,
        email,
        country,
        organisation,
        phone,
    }) {
        const res = await svcTalos.updateUser({
            user_id,
            first_name,
            last_name,
            email,
            country,
            organisation,
            phone,
        });
        return res;
    }

    async function SearchUsers(search) {
        console.log("AuthMediator");
        const result = await svcTalos.SearchUsers(search);
        return result;
    }

    return {
        test,
        signup,
        login,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
        updateUser,
        SearchUsers,
    };
};
