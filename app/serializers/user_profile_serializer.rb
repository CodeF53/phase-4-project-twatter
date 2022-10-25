class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :icon, :banner, :bio, :birthday, :website, :pinned_chirp_id, :chirp_ids, :follower_ids
  has_many :followers
  has_many :followed_users

  def chirp_ids
    object.chirps.map(&:id).sort.reverse
  end

  def follower_ids
    object.followers.map(&:id)
  end
end
