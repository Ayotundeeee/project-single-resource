\c snakes_dev;

INSERT INTO snakes (name, scientific_name, diet, habitats, average_length, venomous, image_url) VALUES 
('King Cobra', 'Ophiophagus hannah', 'Carnivore', ARRAY ['Rainforest'], 3.7, true, 'https://upload.wikimedia.org/wikipedia/commons/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg'),
('Python', 'Pythonidae', 'Carnivore', ARRAY ['Rainforest', 'Grasslands', 'Swamps'], 4.6, false, 'https://media.istockphoto.com/id/487506120/photo/reticulated-python.jpg?s=612x612&w=0&k=20&c=Kiq69SnelQIakIoNWrmUD0jTmVKkG2KAarG3JYHLBw0='),
('Black Mamba', 'Dendroaspis polylepis', 'Carnivore', ARRAY['Savannas', 'Woodlands', 'Forests'], 2.5, true, 'https://miro.medium.com/v2/resize:fit:1400/0*g2Uy0Zn2Xlvrzi73.jpg');