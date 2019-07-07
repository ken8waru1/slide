@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :display_name
    json.avatar url_for(user.avatar) if user.avatar.attachment
  end
end