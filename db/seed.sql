\c snakes_dev;

INSERT INTO snakes (name, scientific_name, diet, habitats, average_length, venomous) VALUES 
('King Cobra', 'Ophiophagus hannah', 'Carnivore', ARRAY ['Rainforest'], 3.7, true),
('Python', 'Pythonidae', 'Carnivore', ARRAY ['Rainforest', 'Grasslands', 'Swamps'], 4.6, false),
('Black Mamba', 'Dendroaspis polylepis', 'Carnivore', ARRAY['Savannas', 'Woodlands', 'Forests'], 2.5, true);