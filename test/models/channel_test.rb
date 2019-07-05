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

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
