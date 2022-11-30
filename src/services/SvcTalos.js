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
    async function SearchUsers(search){
        console.log("SVC talos");
        const result = await db["primary"].query(mdlTest.SearchUsers, {
            username : search + ':*',
        });
        console.log(result);
        return result;
    }
    return {
        getFromDB,
        getUnapparovedUsers,
        SearchUsers,
    };
};
