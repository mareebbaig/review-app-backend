module.exports = function MdlTest() {
    return {
        query: "SELECT * from test limit 1",

        signup: "insert into hrtable(user_id , admin_id , first_name , last_name , email , country , organisation , phone , password , type_id) VALUES(${user_id} , ${admin_id} , ${first_name} , ${last_name} , ${email} , ${country} , ${organisation} , ${phone} , ${password} , ${type_id})",
        getUnapparovedUsers: "Select * from hrtable where is_approved = FALSE;",
        getAllUsers: "Select * from hrtable",
        getAllEmployees: "Select * from employee",

        acceptUser:
            "update hrtable SET is_approved = true WHERE user_id = ${user_id};",
        deleteUser: "delete from hrtable where user_id = ${user_id};",

        getUser: "select * from hrtable where user_id = ${user_id};",
    };
};
