insert into Users (email, password)
  values($1, $2)
  returning id, firstname, lastname, email;
