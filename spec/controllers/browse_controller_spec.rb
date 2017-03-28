require 'rails_helper'

RSpec.describe BrowseController, type: :controller do

  describe "GET #breakfast" do
    it "returns http success" do
      get :breakfast
      expect(response).to have_http_status(:success)
    end
  end

end
