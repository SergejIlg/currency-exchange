class PagesController < ApplicationController
  def index
  end

  def rates
    render json: {rate: CoingateApi.rate(params[:sell])}
  end

  def create_order
    render json: {order: CoingateApi.create_order(params[:e_currency ], params[:sell])}
  end
end
