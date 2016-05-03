class UsersController < ApplicationController
  #reminder: use debugger of byebug to debug the application.

  def new
    @user = User.new
  end

  def edit
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to takeabreak!" #Temporary message that will be displayed in /users/:id page
      redirect_to @user
    else
      render 'new'
    end
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation)
  end
end
