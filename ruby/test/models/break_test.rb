require 'test_helper'

class BreakTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @user = users(:luiz)
    @break = @user.breaks.build(points:5)
  end

  test "should be valid" do
    assert @break.valid?
  end

  test "user id should be present" do
    @break.user_id = nil
    assert_not @break.valid?
  end

  test "points should be present" do
    assert_not @break.points.nil?
  end

  test "order should be most recent first" do
    assert_equal breaks(:most_recent), Break.first
  end
end
