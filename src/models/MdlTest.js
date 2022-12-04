module.exports = function MdlTest() {
    return {
        query: "SELECT * from test limit 1",

        signup: "insert into hrtable(user_id , first_name , last_name , email , country , organisation , phone , password , type_id) VALUES(${user_id}, ${first_name} , ${last_name} , ${email} , ${country} , ${organisation} , ${phone} , ${password} , ${type_id})",
        login: "SELECT * FROM hrtable WHERE email = ${email};",
        getAllUsers: "Select * from hrtable",
        acceptUser:
            "update hrtable SET is_approved = true WHERE user_id = ${user_id};",
        deleteUser: "delete from hrtable where user_id = ${user_id};",
        updateUser:
            "UPDATE hrtable  SET first_name = ${first_name}, last_name = ${last_name}, country = ${country},organisation = ${organisation} , phone=${phone} WHERE user_id = ${user_id};",
        getUser: "select * from hrtable where user_id = ${user_id};",
        query: "select username from employees where to_tsvector(username) @@ to_tsquery('shaheer')",
        getUnapparovedUsers: "Select * from hrtable where is_approved = FALSE;",

        getAllEmployees: "Select * from employee",

        insertIdentityNumber:
            "insert into identitynumber (identity_id,identity_number,identity_type) VALUES (${identity_id},${identity_number},${identity_type})",
        insertEmployeeData:
            "insert into employee(emp_id,user_id,first_name,last_name,email,organisation,submitted_by,phone,reason_of_submission,submission_title,submission_description,identity_id) VALUES (${emp_id},${user_id},${first_name},${last_name},${email},${organisation},${submitted_by},${phone},${reason_of_submission},${submission_title},${submission_description},${identity_id});",
        getEmployeeById: "select * from employee where emp_id = ${emp_id}",

        getEmployeeByUserId:
            "select * from employee where user_id = ${user_id};",

        SearchEmployees:
            "select * from employees where (to_tsvector(first_name) @@ to_tsquery($(first_name))) OR (to_tsvector(last_name) @@ to_tsquery($(last_name)))",
    };
};
