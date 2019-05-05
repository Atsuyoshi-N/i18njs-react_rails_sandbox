class AddLocaleToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_name, :string, null: false
    add_column :users, :locale, :string, null: false, default: :ja
  end
end
