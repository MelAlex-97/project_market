CREATE DATABASE market;
USE market;

CREATE TABLE user_type_accounts(
	user_type_account_id INT NOT NULL AUTO_INCREMENT,
	user_type_account VARCHAR (25) NOT NULL, 
    quantity INT NOT NULL, 
    PRIMARY KEY (user_type_account_id)
    );
    
CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
   user_deleted BIT(1),
   first_name VARCHAR (25) NOT NULL,
   last_name VARCHAR (25) NOT NULL,
   user_phone VARCHAR(25) NOT NULL,
   user_city VARCHAR (25) NOT NULL,
   user_type_account_id INT NOT NULL,
   account_registered_date DATETIME NOT NULL,
   account_expiration_date DATETIME NOT NULL,
   account_balance INT DEFAULT 0,
   FOREIGN KEY (user_type_account_id) REFERENCES user_type_accounts(user_type_account_id),
   PRIMARY KEY (user_id)
   );
   
    
CREATE TABLE goods_types(
	goods_id INT NOT NULL AUTO_INCREMENT,
   goods_type VARCHAR (100) NOT NULL,
   PRIMARY KEY (goods_id)
);

CREATE TABLE products (
   product_id INT NOT NULL AUTO_INCREMENT,
   product_deleted BIT(1),
   product_name VARCHAR(100) NOT NULL UNIQUE,
   product_price INT NOT NULL,
   product_characteristict JSON,
   goods_id INT NOT NULL,
   user_id INT NOT NULL,
   product_location VARCHAR(25) NOT NULL,
   product_quantity INT,
   product_description TEXT NOT NULL, 
   product_create_date DATETIME NOT NULL,  
   PRIMARY KEY (product_id),
   FOREIGN KEY (user_id) REFERENCES users (user_id),
   FOREIGN KEY (goods_id) REFERENCES goods_types (goods_id)
);

CREATE TABLE promotion (
   promotion_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   product_id INT NOT NULL,
   promotion_start DATETIME NOT NULL,
   promotion_end DATETIME NOT NULL,
   promotion_slogan VARCHAR(100) NOT NULL,
   promotion_text TEXT NOT NULL,
   PRIMARY KEY (promotion_id),
   FOREIGN KEY(user_id) REFERENCES users (user_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id)
);

CREATE TABLE comments(
   comment_id INT NOT NULL AUTO_INCREMENT, 
   product_id  INT NOT NULL,
   comment_text VARCHAR(100) NOT NULL,
   comment_create_date DATETIME NOT NULL,
   user_id  INT NOT NULL,
   PRIMARY KEY(comment_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id)
);
    
CREATE TABLE likes(
   like_id INT NOT NULL AUTO_INCREMENT,
   comment_id INT NOT NULL,
   user_id INT NOT NULL,
   PRIMARY KEY(like_id),
   FOREIGN KEY(comment_id) REFERENCES comments(comment_id),
   FOREIGN KEY(user_id) REFERENCES users (user_id)
);

CREATE TABLE shipping_bins(
   shipping_bins_id INT NOT NULL AUTO_INCREMENT,
   user_id INT NOT NULL,
   user_type_account_id INT NOT NULL,
   product_id INT NOT NULL,
   selected_prod_quantity INT,
   PRIMARY KEY (shipping_bins_id),
   FOREIGN KEY (user_id) REFERENCES users(user_id),
   FOREIGN KEY(product_id) REFERENCES products(product_id),
   FOREIGN KEY (user_type_account_id) REFERENCES user_type_accounts(user_type_account_id)
   );
