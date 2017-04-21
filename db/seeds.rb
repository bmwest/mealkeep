# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ingredient.destroy_all
Instruction.destroy_all
Recipe.destroy_all
User.destroy_all

User.create(first_name: "Briana",
            last_name: "West",
            email: "bmwest@bu.edu",
            password: "123456")


@description = []

10.times do
  @description.push(Faker::Food.ingredient)
end

@recipes = ["Artichoke Hummus",
            "Baked White Bean Dip with Rosemary and Parmesan",
            "Black Bean Dip",
            "Blood Orange and Green Olive Salad",
            "Bruschetta Three Ways",
            "Chili Garlic Corn Chips",
            "Chilled Ginger Cantaloupe Soup",
            "Chipotle Bacon Deviled Eggs",
            "Coconut Shrimp Poppers with Chili Mango Cream",
            "Creamy Blue Cheese Dip with Lemon and Chives",
            "Deviled Eggs",
            "Herbed Cheddar Parmesan Crisps",
            "Kettle Corn",
            "Maple-Rosemary Glazed Walnuts",
            "Nando’s Honey Garlic Wings",
            "Pickled Serrano Chiles",
            "Potato Taquitos",
            "Pumpkin Spice Cream Cheese Spread",
            "Roasted Red Pepper Hummus",
            "Rosemary Garlic Sweet Potato Fries",
            "Slow-Roasted Cherry Tomatoes",
            "Smoked Tuna Dip",
            "Spicy Pickled Garlic",
            "Spinach and Feta Turnovers",
            "Sun-dried Tomato Hummus",
            "Sweet and Spicy Chinese Five Spice Roasted Almonds",
            "Tzatziki Sauce (cucumber yogurt dip)",
            "Whole Wheat Pita Chips",
            "Apricot Cream Scones",
            "Banana Cream Cheese Roll",
            "Blueberry Breakfast Bars",
            "Cherry Banana Muffins with White Chocolate Chips",
            "Chilled Ginger Cantaloupe Soup",
            "Fluffy Buttermilk Biscuits",
            "Lemon Pancakes",
            "Sour Cream Cinnamon Streusel Muffins with Pecan Filling",
            "Southwest Style Egg Muffins",
            "Spiked Egg Nog French Toast",
            "Sweet Potato Biscuits with Bacon and Thyme",
            "Whole Grain Sour Cream Apple Muffins"]

24.times do
  Recipe.create(name: @recipes.sample,
                description: @description.join(', '),
                hours: Faker::Number.between(0, 10),
                minutes: 0,
                user: User.first)
end

60.times do
  Instruction.create(step: Faker::Hipster.sentence,
                    recipe: Recipe.all.sample)
end

@volumes = ["", "1/16", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4"]
@units =  ["oz", "mL", "L", "dash", "pinch", "tsp", "Tbsp", "cup", "pt",
        "qt", "gal", "lb"]

120.times do
  Ingredient.create(volume1: "#{Faker::Number.between(1, 10)}",
                    volume2: @volumes.sample,
                    unit: @units.sample,
                    food_item: Faker::Food.ingredient,
                    recipe: Recipe.all.sample)
end
