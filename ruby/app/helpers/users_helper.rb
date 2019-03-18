module UsersHelper
    # Returns the Gravatar for the given user.
  def gravatar_for(user)
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}" #Gravatar uses MD5 Hash to access a user's URL
    image_tag(gravatar_url, alt: user.name, class: "gravatar")
  end
end
