class CreateOrdersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.decimal :e_currency, precision: 40, scale: 20
      t.decimal :euro, precision: 40, scale: 20
      t.string :sell
      t.string :coingate_id
      t.string :url
      t.string :status

      t.timestamps
    end
  end
end
