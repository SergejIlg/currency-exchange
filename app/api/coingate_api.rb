class CoingateApi
    def self.create_order(price, sell)
        order = JSON.parse(request('orders', 'POST', {
            price_amount: price,
            price_currency: sell,
            receive_currency: 'EUR',
            callback_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000/cancel',
            success_url: 'http://localhost:3000/success',
        }))
    
        JSON.parse(request("orders/#{order['id']}/checkout", 'POST', {pay_currency: sell}))
    end

    def self.rate(currency)
        request("rates/merchant/#{currency}/EUR").to_d
    end

    def self.request(path, method = "GET", body = {})
        url = 'https://api-sandbox.coingate.com/v2/'
        headers = { 'Authorization' => 'Bearer 5K3CJyFczf3oRyEuqZzxyRUdJYM_cEziBA-NwycJ' }
    
        response = case method
                   when 'GET'
                       RestClient.get("#{url}#{path}", headers)
                   when "POST"
                       RestClient.post("#{url}#{path}", body, headers)
                   end
    
        response.body
    end
end