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

  producer = User.create!({
    email: "psan@imas.com",
    display_name: "producer",
    password: "idolmaster"
  })

  dant = User.create!({
    email: "dant@mcdonaldslovers",
    display_name: "dant",
    password: "ilovenuggets"
  })

  nasu = User.create!({
    email: "nasu@notes.com",
    display_name: "nasu",
    password: "tsukihime2"
  })

  general_channel = Channel.create!({
    name: "general",
    creator_id: zooey.id
  })

  granblue_channel = Channel.create!({
    name: "granblue fantasy",
    creator_id: zooey.id
  })

  imas_channel = Channel.create!({
    name: "iM@S",
    creator_id: producer.id
  })

  visual_novel_channel = Channel.create({
    name: "visual novels",
    creator_id: dant.id
  })
  
  type_moon_channel = Channel.create({
    name: 'type-moon',
    creator_id: nasu.id
  })

  demo_dm_1 = Channel.create!({
    name: 'zooey',
    creator_id: demo_user.id,
    is_direct_message: true,
  })

  users = User.all

  general_subscription_zooey = Subscription.create!({
    user_id: zooey.id,
    channel_id: general_channel.id
  })

  general_subscription_producer = Subscription.create!({
    user_id: producer.id,
    channel_id: general_channel.id
  })

  granblue_subscription_zooey = Subscription.create!({
    user_id: producer.id,
    channel_id: imas_channel.id
  })

  granblue_subscription_producer = Subscription.create!({
    user_id: producer.id,
    channel_id: granblue_channel.id
  })

  demo_dm_1_sub = Subscription.create!({
    user_id: demo_user.id,
    channel_id: demo_dm_1.id
  })

  demo_dm_1_sub = Subscription.create!({
    user_id: zooey.id,
    channel_id: demo_dm_1.id
  })

  users.each do |user| 
    Subscription.create!({
      user_id: user.id,
      channel_id: visual_novel_channel.id
    })
  end

  users.each do |user| 
    Subscription.create!({
      user_id: user.id,
      channel_id: general_channel.id
    })
  end

  users.each do |user|
    unless user.display_name == 'dant' || user.display_name == 'zooey'
      Subscription.create!({
        user_id: user.id,
        channel_id: type_moon_channel.id
      })
    end
  end

  Message.create!({
    body: 'Enmity is still strong',
    user_id: zooey.id,
    channel_id: granblue_channel.id
  })

  Message.create!({
    body: 'But everything is stamina now',
    user_id: producer.id,
    channel_id: granblue_channel.id
  })

  Message.create!({
    body: 'Hey, everyone',
    user_id: producer.id,
    channel_id: general_channel.id
  })

  Message.create!({
    body: 'Hi, p-san',
    user_id: nasu.id,
    channel_id: general_channel.id
  })

  Message.create!({
    body: 'how does the deresute gacha look today',
    user_id: dant.id,
    channel_id: general_channel.id
  })

  Message.create!({
    body: 'Exploitive as always, but I must roll',
    user_id: producer.id,
    channel_id: general_channel.id
  })

  Message.create!({
    body: 'takane is best idol',
    user_id: zooey.id,
    channel_id: imas_channel.id
  })

  Message.create!({
    body: 'love all your idols equally',
    user_id: producer.id,
    channel_id: imas_channel.id
  })

  Message.create({
    body: 'What should I read next? I just finished Tsukihime',
    user_id: zooey.id,
    channel_id: visual_novel_channel.id
  })

  Message.create({
    body: 'Read Fate next',
    user_id: nasu.id,
    channel_id: visual_novel_channel.id
  })

  Message.create({
    body: 'Can you do me a favor?',
    user_id: demo_user.id,
    channel_id: demo_dm_1.id
  })

  Message.create({
    body: "Yeah, what's going on?",
    user_id: zooey.id,
    channel_id: demo_dm_1.id
  })

  Message.create({
    body: "I left my journal on the ship, can you bring it to Siero's store for me?",
    user_id: demo_user.id,
    channel_id: demo_dm_1.id
  })

  Message.create({
    body: "Leave it to me!",
    user_id: zooey.id,
    channel_id: demo_dm_1.id
  })
end