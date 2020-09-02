class CoingateApi
    def self.create_order(price, sell)
      url = if Rails.env.production?
        'https://currency-exchange-sergej.herokuapp.com'
      else
        'http://localhost:3000'
      end

        order = JSON.parse(request('orders', 'POST', {
            price_amount: price,
            price_currency: sell,
            receive_currency: 'EUR',
            callback_url: "#{url}/callback",
            cancel_url: "#{url}/cancel",
            success_url: "#{url}/success",
            #callback_url: 'https://webhook.site/a8005fdd-6f4d-41f0-a968-2c2ff002865f',
        }))

        JSON.parse(request("orders/#{order['id']}/checkout", 'POST', {pay_currency: sell}))
    end

    def self.rate(currency)
        request("rates/merchant/EUR/#{currency}").to_d
    end

    def self.request(path, method = "GET", body = {})
        url1 = 'https://api-sandbox.coingate.com/v2/'
        url2 = 'https://api.coingate.com/v2/'
        headers = { 'Authorization' => 'Bearer 5K3CJyFczf3oRyEuqZzxyRUdJYM_cEziBA-NwycJ' }

        response = case method
                   when 'GET'
                       RestClient.get("#{url2}#{path}", headers)
                   when "POST"
                       RestClient.post("#{url1}#{path}", body, headers)
                   end

        response.body
    end
end
