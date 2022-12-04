module.exports = function AuthRequestHandlers(opts) {
    const { authMediator, uuid, bcrypt } = opts;

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function signup(request, response) {
        const { body } = request;
        body.password = await bcrypt.hash(body.password, 10);
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

    async function login(request, response) {
        const { email, password } = request.body;

        const data = await authMediator.login(email);
        console.log("ye aya hai data base se: ", data);
        if (!data.length) {
            response.send(data); // response khali return horha hai yahan pe.
        } else {
            if (bcrypt.compareSync(password, data[0].password)) {
                // const secret = Buffer.from(
                //     "62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47",
                //     "hex"
                // );
                // const payload = {
                //     email: data[0].email,
                //     password: data[0].password,
                // };
                // const encryptedJwt = await jwtFile.generateJWT(
                //     "testsub",
                //     payload,
                //     secret
                // );
                data[0].jwt = "1234";
                response.send(
                    data
                    // JWT: encryptedJwt,
                );
            } else {
                response.send({ error: "password did not match" });
            }
        }
    }

    async function SearchUsers(request, response) {
        console.log("here");
        console.log(request.params);
        const search = request.params;
        console.log(search);
        const result = await authMediator.SearchUsers(search.username);
        response.send(result);
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
