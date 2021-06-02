class Api::V1::CampaignsController < ApplicationController
    before_action :set_campaign, only: [:show, :update, :destroy]

  # GET /campaigns
  def index
    @campaigns = Campaign.all

    render json: @campaigns, include: {
      npcs: {}
    }

  end

  # GET /campaigns/1
  def show
    render json: @campaign, include: {
      npcs: {} 
    }
  end

  # POST /campaigns
  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      render json: {
        status: 201,
        store: @campaign
      }, status: :created, location: api_v1_campaign_path(@campaign)
    else
      render json: {
        status: 422,
        errors: @store.errors.full_messages.join(", ")
      }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    # Attempts to delete as part of the boolean, kicks back a message to the front end
    if @campaign.destroy
      render json: {message: "Successfully deleted", campaign: @campaign}
    else
      render json: {message: "Failed to delete"}
    end}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def campaign_params
      params.require(:campaign).permit(:name, :description)
    end
end
