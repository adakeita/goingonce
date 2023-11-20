import { useEffect, useState } from "react";
import ProfileDisplay from "../components/ProfileDisplay";
import { fetchUserProfile } from "../lib/api"; // Adjust the import path as necessary

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userName = localStorage.getItem("userName");
        if (!userName) throw new Error("User name not found");

        const profileData = await fetchUserProfile(userName);
        setProfile(profileData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading profile:", err);
        setError(err.message);
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

  return profile ? (
    <ProfileDisplay profile={profile} />
  ) : (
    <p>Profile not found.</p>
  );
};

export default ProfilePage;
