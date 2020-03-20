require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  def setup
    @user = users(:luiz)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should redirect edit when not logged in" do
    get :edit, id: @user
    assert_not flash.empty?
    assert_redirected_to login_url
  end

  test "should redirect update when not logged in" do
    patch :update, id: @user, user: { name: @user.name, email: @user.email }
    assert_not flash.empty?
    assert_redirected_to login_url
  end

  test "should redirect destroy when not logged in" do
    assert_no_difference 'User.count' do
      delete :destroy, id: @user
    end
    assert_redirected_to login_url
  end

  test "should delete user" do
    log_in_as(@user)
    assert_difference 'User.count',-1 do
      delete :destroy, id: @user
    end
    assert_redirected_to break_path
  end

end
