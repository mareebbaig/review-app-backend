module.exports = function MdlTest() {
    return {
        query: "select username from employees where to_tsvector(username) @@ to_tsquery('shaheer')",
        getUnapparovedUsers:
            "Select * from employees where is_approved = FALSE;",
        SearchUsers:
            "select * from employees where (to_tsvector(first_name) @@ to_tsquery($(username))) OR (to_tsvector(last_name) @@ to_tsquery($(username))) ",
    };
};
