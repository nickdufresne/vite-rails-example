# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Book.create!(
  [
    {
      title: "Bella and Rosie Have Fun",
      author: "Michele Dufresne",
      description: "Bella and Rosie have fun playing",
    },

    {
      title: "The Chocolate Eclairs",
      author: "Michele Dufresne",
      description: "Rainy doesn't get to eat a chocolate eclair",
    }
  ]
)
