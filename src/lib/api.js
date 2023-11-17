//api util functions

//Register user
export const registerUser = async (userData) => {
    // If the avatar is not provided, remove it from the request body
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
        const loginResponse = await fetch(`${import.meta.env.VITE_API_BASEURL}/auction/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!loginResponse.ok) {
            const errorData = await loginResponse.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const userData = await loginResponse.json();
        localStorage.setItem('jwtToken', userData.accessToken);

        // Fetch user profile data
        const profileResponse = await fetch(`${import.meta.env.VITE_API_BASEURL}/auction/profiles/${userData.name}`, {
            headers: {
                'Authorization': `Bearer ${userData.accessToken}`,
            },
        });

        if (!profileResponse.ok) {
            // Handle error - Unable to fetch user profile
            throw new Error('Unable to fetch user profile');
        }

        const profileData = await profileResponse.json();

        // Combine user data with profile data
        const combinedUserData = {
            ...userData,
            credits: profileData.credits,
        };

        console.log("Login Successful:", combinedUserData.name, combinedUserData.email, "Credits:", combinedUserData.credits, "Logged In:", true);

        return combinedUserData;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};

  
