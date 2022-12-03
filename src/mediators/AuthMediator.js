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
    async function SearchUsers(search){
        console.log("AuthMediator");
        const result = await svcTalos.SearchUsers(search);
        return result;
    }
    return {
        test,
        getUnapparovedUsers,
        SearchUsers,
    };
};
