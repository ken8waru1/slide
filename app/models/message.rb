class Message < ApplicationRecord
  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
