class ProfileController < ApplicationController

  def login
  end

  def new
  end

  def show
    @user = User.find(params[:id])
  end

  def update
  end

  def delete
  end

end
