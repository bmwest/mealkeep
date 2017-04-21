class DemosController < ApplicationController
  before_action :authenticate_admin!

  def new
    @demo = Demo.new
  end

  def create
    @demo = Demo.new(demo_params)

    if @demo.save
      redirect_to root_path
      flash[:notice] = "Video has been uploaded"
    else
      flash[:notice] = @demo.errors.full_messages
      render :new
    end
  end

  def show
    @demos = Demo.all
    if !@demos.empty?
      @demo = Demo.where(name: "site demo")
    end
  end

  def edit
    @demo = Demo.find(params[:id])
  end

  private

  def demo_params
    params.require(:demo).permit(:name, :video, :description)
  end
end
