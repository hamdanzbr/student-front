// commonApi.js

// Function to handle errors from API responses
export const handleApiError = (error) => {
    console.error('API Error:', error);
    // You can implement custom error handling logic here, such as displaying error messages to the user.
  };
  
  // Function to parse JSON response from API
  export const parseJsonResponse = async (response) => {
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error parsing JSON response:', error);
      throw error;
    }
  };
  