module.exports = function MdlTest() {
    return {
        query: "SELECT * from test limit 1",

        signup: "insert into hrtable(user_id , first_name , last_name , email , country , organisation , phone , password , type_id) VALUES(${user_id}, ${first_name} , ${last_name} , ${email} , ${country} , ${organisation} , ${phone} , ${password} , ${type_id})",
        login: "SELECT * FROM hrtable WHERE email = ${email};",
        getAllUsers: "Select * from hrtable",
        getAllEmployees: "Select * from employee",

        acceptUser:
            "update hrtable SET is_approved = true WHERE user_id = ${user_id};",
        deleteUser: "delete from hrtable where user_id = ${user_id};",

        updateUser:
            "UPDATE hrtable  SET first_name = ${first_name}, last_name = ${last_name}, country = ${country},organisation = ${organisation} , phone=${phone} WHERE user_id = ${user_id};",

        getUser: "select * from hrtable where user_id = ${user_id};",
        query: "select username from employees where to_tsvector(username) @@ to_tsquery('shaheer')",
        getUnapparovedUsers: "Select * from hrtable where is_approved = FALSE;",
        SearchUsers:
            "select username from employees where to_tsvector(username) @@ to_tsquery($(username))",
    };
};
