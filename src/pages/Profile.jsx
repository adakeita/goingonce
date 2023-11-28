import { useEffect, useState } from "react";
import ProfileDisplay from "../components/ProfileDisplay";
import UserListingsDisplay from "../components/UserListingsDisplay";
import { fetchUserProfile } from "../lib/api";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwtToken"));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userName = localStorage.getItem("userName");
        if (!userName) throw new Error("Username not found");
        console.log("Fetching profile for:", userName); // Debugging

        const profileData = await fetchUserProfile(userName);
        console.log("Profile data received:", profileData); // Debugging
        setProfile(profileData);
      } catch (err) {
        console.error("Error loading profile:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error loading profile: {error}</p>;
  }

  return (
    <div>
      {profile ? (
        <>
          <ProfileDisplay profile={profile} />
          <UserListingsDisplay userName={profile.name} token={token} />
        </>
      ) : (
        <p>Profile not found.</p>
      )}
    </div>
  );
};

export default ProfilePage;
