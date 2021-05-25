require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @game = games(:one)
  end

  test "should get index" do
    get games_url, as: :json
    assert_response :success
  end

  test "should create game" do
    assert_difference('Game.count') do
      post games_url, params: { game: { event,: @game.event,, name,: @game.name,, system,: @game.system,, time: @game.time } }, as: :json
    end

    assert_response 201
  end

  test "should show game" do
    get game_url(@game), as: :json
    assert_response :success
  end

  test "should update game" do
    patch game_url(@game), params: { game: { event,: @game.event,, name,: @game.name,, system,: @game.system,, time: @game.time } }, as: :json
    assert_response 200
  end

  test "should destroy game" do
    assert_difference('Game.count', -1) do
      delete game_url(@game), as: :json
    end

    assert_response 204
  end
end
