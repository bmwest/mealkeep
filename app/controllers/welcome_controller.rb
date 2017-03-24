class WelcomeController < ApplicationController
  def index
  end

  def show
    @name = "Briana West"
    @email = "brianawest.m@gmail.com"
    @github = "https://github.com/bmwest"
    @linked_in = "https://www.linkedin.com/in/brianawest/"
  end
end
