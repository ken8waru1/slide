class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

  after_create_commit { MessageBroadcastJob.perform_now( self )}
end
