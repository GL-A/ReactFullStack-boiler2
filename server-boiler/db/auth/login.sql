select password from Users
where
email = $1;
select id, email, firstname, lastname, username  from Users
where
email = $1;
