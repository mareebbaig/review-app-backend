module.exports = function MdlTest() {
    return {
        query: "SELECT * from test limit 1",
        getUnapparovedUsers: "Select * from hrtable where is_approved = FALSE;",
        getAllUsers: "Select * from hrtable",
        getAllEmployees: "Select * from employee",

        updateUserStatus:
            "update hrtable SET is_approved = true WHERE user_id = ${user_id};",

        deleteUser: "delete from hrtable where user_id = ${user_id};",
    };
};
