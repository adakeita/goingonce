import "./profileskeleton.css";

const ProfileSkeleton = () => {
  return (
    <div className="profile-skeleton">
      <div className="user-info-skeleton">
        <div className="skeleton-text-avatar">
          <div className="avatar-skeleton"></div>
          <div className="skeleton-text-wrapper">
            <div className="text-skeleton name-skeleton"></div>
            <div className="text-skeleton email-skeleton"></div>
          </div>
        </div>
        <div className="credit-container-skeleton"></div>
      </div>
      <div className="listings-skeleton">
        {Array(3)
          .fill()
          .map((_, idx) => (
            <div key={idx} className="listing-skeleton"></div>
          ))}
      </div>
    </div>
  );
};

export default ProfileSkeleton;
