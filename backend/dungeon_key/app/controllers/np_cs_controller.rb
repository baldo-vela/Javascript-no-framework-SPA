class NpCsController < ApplicationController
  before_action :set_npc, only: [:show, :update, :destroy]

  # GET /npcs
  def index
    @npcs = Npc.all

    render json: @npcs
  end

  # GET /npcs/1
  def show
    render json: @npc
  end

  # POST /npcs
  def create
    @npc = Npc.new(npc_params)

    if @npc.save
      render json: @npc, status: :created, location: @npc
    else
      render json: @npc.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /npcs/1
  def update
    if @npc.update(npc_params)
      render json: @npc
    else
      render json: @npc.errors, status: :unprocessable_entity
    end
  end

  # DELETE /npcs/1
  def destroy
    @npc.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_npc
      @npc = Npc.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def npc_params
      params.require(:npc).permit(:name, :notes)
    end
end
