import React, { useEffect, useState } from 'react';
import { getAvatar } from '../helpers/fetchAvatar';
/**
 * function to get avatars corresponding to a user or contact name (while we dont have images in our db)
 * @param {string} name  the name of the contact/user/...
 * @returns {Avatar} 
 */
const Avatar = ({ name }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const svg = await getAvatar(name);
      setAvatar(svg);
    };

    fetchAvatar();
  }, [name]);

  return (
    <div>
      {avatar && <div dangerouslySetInnerHTML={{ __html: avatar }} />}
    </div>
  );
};

export default Avatar;
