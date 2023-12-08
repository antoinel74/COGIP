const apikey = import.meta.env.VITE_API_KEY;

/**
 * @param name the name of the user to get a corresponding avatar
 * @return json response svg
 */
export const getAvatar = async (name) => {
    try {
      const response = await fetch(`https://api.multiavatar.com/${name}?apikey=${apikey}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching avatar: ${response.statusText}`);
      }
  
      return response.text();
    } catch (error) {
      console.error('Error fetching avatar:', error.message);
      return null;
    }
  };