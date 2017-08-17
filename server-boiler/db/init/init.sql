create table if not exists Users(
  id serial primary key,
  email varchar(254),
  password varchar(100),
  firstname varchar(10),
  lastname varchar(50),
  username varchar(50)
)
