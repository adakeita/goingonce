import useUserProfile from "../hooks/useUserProfile";
import ProfileCard from "../components/ProfileCard";
import UserListingsDisplay from "../components/UserListingsDisplay";
import NewListingButton from "../components/NewListingButton";
import ProfileSkeleton from "../components/ProfileSkeleton";
import "../pagestyles/profile.css";
import CreditContainer from "../components/CreditContainer";

const ProfilePage = () => {
  const userName = localStorage.getItem("userName");
  const { profile, loading, error } = useUserProfile(userName);
  const token = localStorage.getItem("jwtToken");

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return <p>Error loading profile: {error}</p>;
  }

  return (
    <div className="page-container">
      {profile ? (
        <main id="profileContent">
          <section className="user-info">
            <ProfileCard profile={profile} />
            <CreditContainer profile={profile} />
          </section>
          <section className="user-bids-listing">
            <UserListingsDisplay userName={profile.name} token={token} />
          </section>
          <NewListingButton />
        </main>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  );
};

export default ProfilePage;
