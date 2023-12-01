//api util functions

//Register user
export const registerUser = async (userData) => {
  // If the avatar is not provided, remove it from request body
  if (!userData.avatar) {
    delete userData.avatar;
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Response Error:", errorData);
      throw new Error(errorData.message || "Registration failed");
    }

    return await response.json(); // If successful, return the user object
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
};

//Login user
export const loginUser = async (email, password) => {
  try {
    const loginResponse = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!loginResponse.ok) {
      const errorData = await loginResponse.json();
      throw new Error(errorData.message || "Login failed");
    }

    const userData = await loginResponse.json();
    console.log("Received User Data:", userData); // Debugging

    localStorage.setItem("jwtToken", userData.accessToken);
    localStorage.setItem("userName", userData.name);

    // Debugging - Check if values are set
    console.log("Token set:", localStorage.getItem("jwtToken"));
    console.log("Username set:", localStorage.getItem("userName"));

    // Fetch user profile data
    const profileResponse = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/profiles/${userData.name}`,
      {
        headers: {
          Authorization: `Bearer ${userData.accessToken}`,
        },
      }
    );

    if (!profileResponse.ok) {
      // Handle error - Unable to fetch user profile
      throw new Error("Unable to fetch user profile");
    }

    const profileData = await profileResponse.json();

    // Combine user data with profile data
    const combinedUserData = {
      ...userData,
      credits: profileData.credits,
    };

    console.log(
      "Login Successful:",
      combinedUserData.name,
      combinedUserData.email,
      "Credits:",
      combinedUserData.credits,
      "Logged In:",
      true
    );

    return combinedUserData;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

//Fetch user profile
export const fetchUserProfile = async (userName) => {
  try {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      throw new Error("No token found");
    }

    const profileResponse = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/profiles/${userName}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!profileResponse.ok) {
      const errorData = await profileResponse.json();
      throw new Error(errorData.message || "Unable to fetch user profile");
    }

    const profileData = await profileResponse.json();
    return profileData;
  } catch (error) {
    console.error("Fetch Profile Error:", error);
    throw error;
  }
};

//Fetch listings
export const fetchListings = async (
  limit = 20,
  offset = 0,
  active = true,
  tag = null
) => {
  try {
    let url = `${
      import.meta.env.VITE_API_BASEURL
    }/auction/listings?limit=${limit}&offset=${offset}&_seller=true&_bids=true&sort=created&sortOrder=desc`;

    if (active) {
      url += "&_active=true";
    }
    if (tag) {
      url += `&_tag=${tag}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch listings");
    }

    const listings = await response.json();
    return listings;
  } catch (error) {
    console.error("Error fetching listings:", error);
    throw error;
  }
};

//Fetch listing by user
export const fetchUserListings = async (userName, token) => {
  try {
    const url = `${
      import.meta.env.VITE_API_BASEURL
    }/auction/profiles/${userName}/listings?_seller=true?&_bids=true`;
    console.log("Using token:", token); // Debug log

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response status:", response.status); // Debug log

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error("Failed to fetch user listings");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user listings:", error);
    throw error;
  }
};

//Create listing
export const CreateListing = async (listingData, token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/listings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(listingData),
      }
    );

    if (!response.ok) {
      // Log response for debugging
      const errorData = await response.json();
      console.log("API Error:", errorData);
      throw new Error("Failed to create listing");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating listing:", error);
    throw error;
  }
};

// delete listing

export const deleteListing = async (listingId, token) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/listings/${listingId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete listing");
    }

    return true; // Successfully deleted
  } catch (error) {
    console.error("Error deleting listing:", error);
    throw error;
  }
};

// Fetch a single listing by ID, including seller and bids information
export const fetchSingleListing = async (listingId) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_API_BASEURL
      }/auction/listings/${listingId}?_seller=true&_bids=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch listing");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching single listing:", error);
    throw error;
  }
};

export const updateUserAvatar = async (userName, avatarUrl) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASEURL}/auction/profiles/${userName}/media`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify({ avatar: avatarUrl }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update avatar");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating avatar:", error);
    throw error;
  }
};
