# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Channel.destroy_all

  demo_user = User.create!({
    email: "demo@slide",
    display_name: "demo",
    password: "girlsdemo"
  })

  zooey = User.create!({
    email: "voltronzooey@gbf.com",
    display_name: "zooey",
    password: "granblue"
  })

  general_channel = Channel.create!({
    name: "general",
    purpose: "GRINDBLUE FANTASY",
    creator_id: zooey.id
  })

  general_subscription = Subscription.create!({
    user_id: zooey.id,
    channel_id: general_channel.id
  })
end