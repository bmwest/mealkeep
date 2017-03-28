class WelcomeController < ApplicationController
  def index
  end

  def show
    @name = "Briana West"
    @email = " brianawest.m@gmail.com "
    @github = " bmwest "
    @linked_in = " brianawest "
  end
end
