class WelcomeController < ApplicationController
  def index
    @greetings = ["I think it's time for some food.",
                  "Who's hungry?", "Hey, let's eat",
                  "There's never a bad time for food."]

    if user_signed_in?
      @user = current_user
      @recipes = @user.recipes.sample(5)
    end

    @directives = ["Add recipes", "Remove and add ingredients as necessary",
                   "drag and re-order instructions",
                   "Update serving sizes (ingredients will scale accordingly)"]
  end

  def show
    @name = "Briana West"
    @email = " brianawest.m@gmail.com "
    @github = " bmwest "
    @linked_in = " brianawest "
  end
end
