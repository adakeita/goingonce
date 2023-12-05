import useUserProfile from "../hooks/useUserProfile";
import ProfileCard from "../components/ProfileCard";
import UserListingsDisplay from "../components/UserListingsDisplay";
import NewListingButton from "../components/NewListingButton";
import "../pagestyles/profile.css";

const ProfilePage = () => {
  const userName = localStorage.getItem("userName");
  const { profile, loading, error } = useUserProfile(userName);
  const token = localStorage.getItem("jwtToken");

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error loading profile: {error}</p>;
  }

  return (
    <div className="page-container">
      {profile ? (
          <main id="profileContent">
            <ProfileCard profile={profile} />
            <section className="user-bids-listing">
            <UserListingsDisplay userName={profile.name} token={token} />
            </section>
          </main>
      ) : (
        <p>Profile not found.</p>
      )}
      <NewListingButton />
    </div>
  );
};

export default ProfilePage;