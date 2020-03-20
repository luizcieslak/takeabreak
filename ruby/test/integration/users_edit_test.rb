require 'test_helper'

class UsersEditTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:luiz)
  end

  test "unsuccessful edit" do
    log_in_as(@user)
    get edit_user_path(@user)
    assert_template 'users/edit'
    patch user_path(@user), user:{ name: "",
                                   email:"abc@abc",
                                   password:"falaboy",
                                   password_confirmation:"suave" }
    assert_template 'users/edit'
  end

  test "successful edit with friendly forwarding" do
    get edit_user_path(@user)
    log_in_as(@user)
    assert_redirected_to edit_user_path(@user)
    name = "ue jc"
    email = "pega@tampa.com"
    patch user_path(@user), user:{ name: name,
                                   email: email,
                                   password:"",
                                   password_confirmation:""}
    assert_not flash.empty?
    assert_redirected_to @user
    @user.reload
    assert_equal name, @user.name
    assert_equal email, @user.email
  end



end
