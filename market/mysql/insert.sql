-- Global insert for table user_type_accounts and goods_types
INSERT INTO user_type_accounts (user_type_account, quantity)
VALUES ("base", 1),
("silver", 2),
("gold", 3),
("platinum", 5);

INSERT INTO goods_types (goods_type) 
VALUES ("Car"),
("Jewelry"),
("Building materials");

-- Start homework Alex Melnyk

INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date) 
VALUES ("Alex", "Melnyk", 0955555555, "Kyiv", 2, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Ford Fiesta", 7000, '{"car_type": "hatchback",  "engine_capacity":"1.6", "year_manufacture": "2015"}', 1, 1, "Lviv", 2, "New car", NOW());

-- Finish homework Alex Melnyk

-- Start homework Yana Honchar

INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date) 
VALUES ("Yana", "Honchar", 0639999999, "Georgia", 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Toyota Camry", 15000, '{"car_type": "sedan", "engine_capacity": "2.5", "year_manufacture": "2019"}', 1, 2, "Kyiv", 1, "New car Toyota Camry", NOW());

-- Finish homework Yana Honchar

-- Start homework Sofiia Madryha

INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date)  
VALUES ("Sofiia", "Madryha", 0673400000, "Ivano-Frankivsk", 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Pandora Diamond Ring", 5000, '{"jewelry_type": "bracelet", "weight": "0.1", "material":"silver"}', 2, 3, "Horodenka", 3, "A solid 14k white gold ring hand set with a 0.50 carat lab-created diamond.", NOW());
 -- Finish homework Sofiia Madryha

-- Start homework Halyna Horbiak

INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date) 
VALUES ("Halyna", "Horbiak", 0987127826, "Lviv", 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Minimal silver earrings", 754, '{"jewelry_type": "earrings", "weight": "0.2", "material":"gold"}', 3, 4, "Lviv", 2, "Regular silver earrings with birds and leaf! ", NOW());

-- Start homework Polina Nizhynska
INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date) 
VALUES ("Polina", "Nizhynska", 0974768236, "Lviv", 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("The HARDKISS", 2580, '{"jewelry_type": "earrings", "weight": "0.56", "material":"gold"}', 2, 5, "Peremogy sq.3", 1, "Jewelry house SOVA presented a collection designed in collaboration with the Ukrainian group The Hardkiss.Golden lightnings, stars, spikes and other fatal elements are first seen in the jewelry collections of the Ukrainian brand SOVA thanks to a collaboration with the rock band The Hardkiss.", NOW());
 
-- Finish homework Polina Nizhynska

-- Hw start Volodymyr Zvirko
INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date)
VALUES ("Volodymyr", "Zvirko", 0505903504, "Lviv", 2, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Mercedec 508D", 71332000,'{"car_type": "sedan", "engine_capacity": "2.5", "year_manufacture": "2019"}', 1, 6, "Lviv", 3, "old but gold", NOW());
-- hw finish Volodymyr Zvirko

-- Start homework Volodymyr Zaritskyi

INSERT INTO users(first_name, last_name, user_phone, user_city, user_type_account_id, account_registered_date, account_expiration_date)
VALUES ("Volodymyr", "Zaritskyi", 0630742682, "Lviv", 2, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY));

INSERT INTO products (product_name, product_price, product_characteristict, goods_id, user_id, product_location, product_quantity, product_description, product_create_date) 
VALUES ("Gas block", 3000, '{"manufacturer":	"Aero Precision", "color":	"black"}', 3, 7, "Ternopil", 600, "The quantity is indicated in pallets, one pallet contains 30 pieces, the price is indicated for 1 pallet", NOW());

-- Finish homework Volodymyr Zaritskyi

-- Homework start Alex Melnyk

INSERT INTO promotion (user_id, product_id, promotion_start, promotion_end, promotion_slogan, promotion_text)
VALUES (1, 1, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), "Ford Fiesta", "I am selling a Ford Fiesta car in good technical condition, the car is 7 years old, runs on gasoline, mechanics");

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (2, "What is the mileage of the car?", NOW(), 1);

-- Homework end Alex Melnyk

-- Homework start Sofiia Madryha
INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (5, "Is this product available?", NOW(), 3);

INSERT INTO likes (comment_id, user_id)
VALUES (1,3);

-- Homework end Sofiia Madryha

-- Homework start Alex Melnyk

INSERT INTO likes (comment_id, user_id)
VALUES (2,1);

-- Homework end Alex Melnyk

-- Halyna Horbiak Homework start 

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (7, "How long will delivery take?", NOW(), 4);

INSERT INTO likes (comment_id, user_id)
VALUES (4,4);

-- Halyna Horbiak homework finish

-- Homework start Yana Honchar
INSERT INTO promotion (user_id, product_id, promotion_start, promotion_end, promotion_slogan, promotion_text)
VALUES (2, 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), "Toyota Camry", "Almost new car, the base four-cylinder engine returns good fuel economy estimates, and the optional V6 is energetic");

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (5, "Do you have this for man ?", NOW(), 2);

INSERT INTO likes (comment_id, user_id)
VALUES (1, 2);

-- Homework finish Yana Honchar

-- Volodymyr Zaritskyi homework finish --

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (3, "How many carats does a diamond have?", NOW(), 7);

INSERT INTO likes (comment_id, user_id)
VALUES (1, 7);

-- Volodymyr Zaritskyi homework finish --

-- Hw start Volodymyr Zvirko 

INSERT INTO promotion (user_id, product_id, promotion_start, promotion_end, promotion_slogan, promotion_text)
VALUES (6, 3, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), "silver chain Zolotyi Vik", "Wore it for a year, decided to sell it since I want to get a gold one. Price is negotiatable.");

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (3, "Would you sell it for 4500?", NOW(), 6);

INSERT INTO likes (comment_id, user_id)
VALUES (3, 5);


-- Hw end Volodymyr Zvirko

-- Homework start PolinaNizhynska

INSERT INTO promotion (user_id, product_id, promotion_start, promotion_end, promotion_slogan, promotion_text)
VALUES (5, 5, NOW(), DATE_ADD(NOW(), INTERVAL 7 DAY), "The HARDKISS", "THE HARDKISS collection was developed in collaboration with the Ukrainian rock band The Hardkiss. Thanks to cooperation in the history of SOVA jewelry, we get sick with electricity, stars, thorns and other fatal elements. Just get in touch to learn more abot this eairring!");

INSERT INTO comments (product_id, comment_text, comment_create_date, user_id)
VALUES (3, "Hi! Is there a free shipping?", NOW(), 5);

INSERT INTO likes (comment_id, user_id)
VALUES (1,5);
-- Homework end Polina Nizhynska