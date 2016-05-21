class BreaksController < ApplicationController
  def new
    @break = Break.new
    
  end

  def success
  end

  def create
    @break = current_user.breaks.create!(points: 5) if logged_in?
    redirect_to success_path
  end

end
