# == Schema Information
#
# Table name: subscriptions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validates :user_id, presence: true
  validates :channel_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
