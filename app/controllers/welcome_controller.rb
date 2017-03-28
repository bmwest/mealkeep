class WelcomeController < ApplicationController
  def index
  end

  def show
    @name = "Briana West"
    @email = " brianawest.m@gmail.com "
    @github = " github.com/bmwest "
    @linked_in = " linkedin.com/in/brianawest/ "
  end
end
