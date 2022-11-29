module.exports = function MdlTest() {
    return {
        query: "SELECT * from test limit 1",
        getUnapparovedUsers:
            "Select * from employees where is_approved = FALSE;",
    };
};
