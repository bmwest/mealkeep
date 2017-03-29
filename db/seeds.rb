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


5.times do
  User.create(first_name: Faker::Name.first_name,
              last_name: Faker::Name.last_name,
              email: Faker::Internet.email,
              password: Faker::Internet.password)
end

36.times do
  Recipe.create(name: Faker::Hipster.word,
                description: Faker::Hipster.paragraph,
                hours: Faker::Number.between(1, 8),
                minutes: Faker::Number.between(1, 59),
                user: User.all.sample)
end

41.times do
  Instruction.create(step: Faker::Hipster.paragraph,
                    recipe: Recipe.all.sample)
end
