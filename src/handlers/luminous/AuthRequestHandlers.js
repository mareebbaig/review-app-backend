module.exports = function AuthRequestHandlers(opts) {
    const {
        authMediator,
        transporter,
        uuid,
        cache,
        bcrypt,
        emailValidator,
        config,
    } = opts;
    const { sendConfirmationEmail } = transporter;
    const { secret } = config.get("jwt");

    async function test(request, reply) {
        const { body, elSession } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body, session: elSession });
        reply.send(JSON.stringify(sent));
    }

    async function signup(request, response) {
        const { body } = request;

        if (emailValidator.isCompanyEmail(body.email)) {
            body.password = await bcrypt.hash(body.password, 10);
            body.user_id = uuid();
            res = await authMediator.signup({ ...body });
            // token = await bcrypt.hash(body.user_id, 5);
            await cache["primary"].set("token", body.user_id);
            await cache["primary"].expire("token", 60);
            sendConfirmationEmail(
                body.first_name + " " + body.last_name,
                body.email,
                body.user_id
            );
        } else {
            res = { error: "not a valid company email" };
        }
        response.send(res);
    }

    async function verifyUser(request, response) {
        const { token } = request.params;
        const cacheToken = await cache["primary"].get("token");
        if (!cacheToken) {
            response.send("verification link experied");
        } else if (cacheToken != token) {
            response.send("error verifying email");
        } else {
            const res = await authMediator.verifyUser(token);
            response.send(res);
        }
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
        const res = await authMediator.login(email);
        console.log("ye aya hai res base se: ", res);
        if (bcrypt.compareSync(password, res[0].password)) {
            // const secret = Buffer.from(
            //     "62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47",
            //     "hex"
            // );
            // const payload = {
            //     email: res[0].email,
            //     password: res[0].password,
            // };
            // const encryptedJwt = await jwtFile.generateJWT(
            //     "testsub",
            //     payload,
            //     secret
            // );
            res.jwt = "";
        } else {
            res.error = "password did not match";
        }
        response.send(res);
    }

    async function insertEmployeeData(request, response) {
        const { body } = request;
        body.identity_id = uuid();
        body.emp_id = uuid();
        const res = await authMediator.insertIdentityNumber({ ...body });
        const res1 = await authMediator.insertEmployeeData({ ...body });
        response.send(res1);
    }

    async function getEmployeeById(request, response) {
        const { body } = request;
        const res = await authMediator.getEmployeeById({ ...body });
        response.send(res);
    }

    async function getEmployeeByUserId(request, response) {
        const { body } = request;
        console.log({ ...body });
        const res = await authMediator.getEmployeeByUserId({ ...body });
        response.send(res);
    }

    async function SearchUsers(request, response) {
        const search = request.params;
        const result = await authMediator.SearchUsers(
            search.username.split(" ")
        );
        response.send(result);
    }
    return {
        test,
        signup,
        verifyUser,
        login,
        getUnapparovedUsers,
        getAllUsers,
        getAllEmployees,
        acceptUser,
        deleteUser,
        getUser,
        updateUser,
        insertEmployeeData,
        getEmployeeById,
        getEmployeeByUserId,
        SearchUsers,
    };
};
