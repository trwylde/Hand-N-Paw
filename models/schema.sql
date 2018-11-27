CREATE DATABASE breeds_db;
USE breeds_db;

CREATE TABLE breeds(
 id INT NOT NULL AUTO_INCREMENT,
    breed_name VARCHAR(75) NOT NULL,  -- Name of breed
 size INT NOT NULL,                -- Relates to avg height of breed (scale of 1-3)
 outdoor_space INT NOT NULL,       -- Relates to breeds need for outdoor space (scale of 1-3)
 child_safe INT NOT NULL,          -- Do they, ideally, need to be socialized (with small children) from birth? (scale of 1-3)
 sociable INT NOT NULL,            -- Are they suspicious (1), merely cautious (2), or open with strangers(3)?
 multi_animal_safe BOOLEAN DEFAULT false,   -- Can/should they be added to a home that has other animals living there? (T/F)
 health_isuues BOOLEAN DEFAULT false, --Are there major health issues common to the breed
 shed_factor INT NOT NULL,          -- How much does this breed shed?
 exercise_needs INT NOT NULL,       -- How much daily exercise is required?
 PRIMARY KEY (id)
);