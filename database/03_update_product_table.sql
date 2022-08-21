USE `exordium-eshop`;
ALTER TABLE products
ADD imageUrl varchar(2048) not null,
ADD smallDescription varchar(1024) not null;