# == Schema Information
#
# Table name: channels
#
#  id                :bigint           not null, primary key
#  name              :string           not null
#  is_direct_message :boolean          default(FALSE), not null
#  creator_id        :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :creator_id, presence: true
  validates :is_direct_message, inclusion: { in: [true, false] }

  belongs_to :creator, 
    foreign_key: :creator_id,
    class_name: :User

  has_many :subscriptions, 
    foreign_key: :channel_id,
    class_name: :Subscription

  has_many :subscribed_users,
    through: :subscriptions,
    source: :user

  has_many :messages,
    foreign_key: :channel_id,
    class_name: :Channel
end
