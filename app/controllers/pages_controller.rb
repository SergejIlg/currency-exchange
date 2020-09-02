class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def rates
    render json: {rate: CoingateApi.rate(params[:sell])}
  end

  def create_order
    order = CoingateApi.create_order(params[:e_currency ], params[:sell])
    Order.create(e_currency: params[:e_currency], euro: params[:euro], sell: params[:sell], url: order['payment_url'], status: order['status'], coingate_id: order['id'])
    render json: {order: order}
  end

  def success
  end

  def cancel
  end

  def orders
    @orders = Order.all
  end

  def about
  end

  def callback
    order = Order.where(coingate_id: params[:id]).last
    if order
      order.update(status: params[:status])
    end

    render json: {status: 'ok'}
  end
end
