import { useState, useEffect } from "react";
import { fetchUserProfile } from "../lib/api";

const useUserProfile = (userName) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (!userName) throw new Error("Username not found");
        const profileData = await fetchUserProfile(userName);
        setProfile(profileData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [userName]);

  return { profile, loading, error };
};

export default useUserProfile;
