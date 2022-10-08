USE `exordium-eshop`;

create table users(
id int not null auto_increment primary key,
username varchar(50) not null,
password varchar(255) not null,
email varchar(50) not null,
full_name varchar(150) not null,
profile_img varchar(2048) not null, 
date_on_creating datetime not null,
date_of_last_modified datetime not null,
role varchar(20) not null
);

create table types(
id int not null auto_increment primary key,
name varchar(50)
);

create table brands(
id int not null auto_increment primary key,
name varchar(50)
);

create table products(
id int not null auto_increment primary key,
name varchar(100) not null,
color varchar(40),
price decimal not null,
quantity int not null,
brand_id int not null,
type_id int not null,
constraint fk_products_brands
foreign key (brand_id)
references brands(id),
constraint fk_products_types
foreign key (type_id)
references types(id)
);


create table  review(
id int not null auto_increment primary key,
description varchar(300) not null,
likes int default 0,
product_id int not null,
user_id int not null,
constraint fk_reviews_products
foreign key (product_id)
references products(id),
constraint fk_review_users
foreign key (user_id)
references users(id)
);

create table comments(
id int not null auto_increment primary key,
description varchar(300) not null,
review_id int not null,
user_id int not null,
constraint fk_comments_reviews
foreign key(review_id)
references review(id),
constraint fk_comments_users
foreign key(user_id)
references users(id)
);

create table images(
id int not null auto_increment primary key,
reference_img varchar(2048) not null,
product_id int not null,
constraint fk_images_products
foreign key (product_id)
references products(id)
);
create table address(
id int not null auto_increment primary key,
full_name varchar(100) not null,
city varchar(100) not null,
full_address nvarchar(300) not null,
postcode varchar(30) not null,
country varchar(50) not null,
phone varchar(15) not null,
user_id int not null,
constraint fk_address_users
foreign key(user_id)
references users(id)
);

create table orders(
id int not null auto_increment primary key,
price decimal not null,
description varchar(300),
payment_type varchar(50) not null,
user_id int not null,
address_id int not null,
constraint fk_orders_users
foreign key(user_id)
references users(id),
constraint fk_orders_address
foreign key(address_id)
references address(id)
);

create table order_products(
id int not null auto_increment primary key,
order_id int not null,
product_price decimal not null,
quantity int not null,
product_reference varchar(2048),
constraint fk_orderproducts_order
foreign key (order_id)
references orders(id)
);


create table active_sessions(
id int not null auto_increment primary key,
device varchar(200) not null,
ip_address varchar(40) not null,
location varchar(80) not null,
user_id int not null,
constraint fk_active_sessions_users
foreign key(user_id)
references users(id)
);
