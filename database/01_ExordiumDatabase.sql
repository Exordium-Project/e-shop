USE `exordium-eshop`;

CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    profile_img VARCHAR(2048) NOT NULL, 
    date_on_creating date NOT NULL,
    date_of_last_modified date NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE categories(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE types(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    categoryId BIGSERIAL NOT NULL,
    FOREIGN KEY(categoryId) references categories(id)
);


CREATE TABLE brands(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TYPE gender AS ENUM ('unisex', 'female', 'male');

CREATE TABLE products(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    small_description VARCHAR(1024) NOT NULL,
    image_url VARCHAR(2048) NOT NULL,
    color VARCHAR(40),
    price decimal NOT NULL,
    quantity BIGSERIAL NOT NULL,
    date_added date NOT NULL,
    is_special boolean,
    gender gender,
    brand_id BIGSERIAL NOT NULL,
    typeId BIGSERIAL NOT NULL,
    categoryId BIGSERIAL NOT NULL,
    FOREIGN KEY (brand_id) references brands(id),
    FOREIGN KEY (typeId) references types(id),
    FOREIGN KEY (categoryId) references categories(id)
);


CREATE TABLE sizes(
	id BIGSERIAL NOT NULL PRIMARY KEY,
    size VARCHAR(50) NOT NULL,
	quantity BIGSERIAL NOT NULL,
    productId BIGSERIAL NOT NULL,
    FOREIGN KEY(productId) references products(id)
);

CREATE TABLE baskets(
	id BIGSERIAL NOT NULL PRIMARY KEY, 
	price decimal NOT NULL,
	user_id BIGSERIAL NOT NULL,
	basket_products_id BIGSERIAL NOT NULL,
	FOREIGN KEY (user_id) references users(id)
);

CREATE TABLE basket_products(
	product_id BIGSERIAL NOT NULL,
	basket_id BIGSERIAL NOT NULL,
	quantity BIGSERIAL NOT NULL,
	primary key(product_id,basket_id),
	FOREIGN KEY (basket_id) references baskets(id),
	FOREIGN KEY (product_id)references products(id)
);

CREATE TABLE review(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	description VARCHAR(300) NOT NULL,
	likes BIGSERIAL,
	product_id BIGSERIAL NOT NULL,
	user_id BIGSERIAL NOT NULL,
	FOREIGN KEY (product_id) references products(id),
	FOREIGN KEY (user_id)references users(id)
);

CREATE TABLE comments(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	description VARCHAR(300) NOT NULL,
	review_id BIGSERIAL NOT NULL,
	user_id BIGSERIAL NOT NULL,
	FOREIGN KEY(review_id) references review(id),
	FOREIGN KEY(user_id) references users(id)
);

CREATE TABLE images(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	image_url VARCHAR(2048) NOT NULL,
	productId BIGSERIAL NOT NULL,
	FOREIGN KEY (productId) references products(id)
);

CREATE TABLE address(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	full_name VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL,
	full_address VARCHAR(300) NOT NULL,
	postcode VARCHAR(30) NOT NULL,
	country VARCHAR(50) NOT NULL,
	phone VARCHAR(15) NOT NULL,
	user_id BIGSERIAL NOT NULL,
	FOREIGN KEY(user_id) references users(id)
);

CREATE TABLE orders(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	price decimal NOT NULL,
	description VARCHAR(300),
	payment_type VARCHAR(50) NOT NULL,
	user_id BIGSERIAL NOT NULL,
	address_id BIGSERIAL NOT NULL,
	FOREIGN KEY(user_id) references users(id),
	FOREIGN KEY(address_id) references address(id)
);

CREATE TABLE order_products(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	order_id BIGSERIAL NOT NULL,
	product_price decimal NOT NULL,
	quantity BIGSERIAL NOT NULL,
	product_reference VARCHAR(2048),
	FOREIGN KEY (order_id)references orders(id)
);


CREATE TABLE active_sessions(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	device VARCHAR(200) NOT NULL,
	ip_address VARCHAR(40) NOT NULL,
	location VARCHAR(80) NOT NULL,
	user_id BIGSERIAL NOT NULL,
	FOREIGN KEY(user_id) references users(id)
);