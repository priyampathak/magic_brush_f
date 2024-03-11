// Function to retrieve token from cookie
function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') { // Assuming the cookie name is 'token'
        return value;
      }
    }
    return null; // Token not found
  }
  
  // Function to make an authenticated fetch request
  async function makeAuthenticatedRequest() {
    const token = getTokenFromCookie();
  
    if (!token) {
      console.error('Token not found in cookie');
      return; // Exit function if token not found
    }
  
    try {
      // Make the fetch request with token in headers
      const response = await fetch('https://your-backend-api.com/endpoint', {
        method: 'GET', // or 'POST', 'PUT', etc.
        headers: {
          'Authorization': `Bearer ${token}`, // Set token in 'Authorization' header
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Process response data here
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Example usage
  makeAuthenticatedRequest();
  