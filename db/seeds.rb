# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

24.times do
  Recipe.create(name: Faker::Hipster.word,
                description: @description.join(', '),
                hours: Faker::Number.between(0, 10),
                minutes: 0,
                user: User.first)
end

60.times do
  Instruction.create(step: Faker::Hipster.sentence,
                    recipe: Recipe.all.sample)
end

@volumes = ["0", "1/16", "1/8", "1/4", "1/3", "1/2", "2/3", "3/4"]
@units =  ["oz", "mL", "L", "dash", "pinch", "tsp", "Tbsp", "cup", "pt",
        "qt", "gal", "lb"]

120.times do
  Ingredient.create(volume1: "#{Faker::Number.between(0, 10)}",
                    volume2: @volumes.sample,
                    unit: @units.sample,
                    food_item: Faker::Food.ingredient,
                    recipe: Recipe.all.sample)
end
