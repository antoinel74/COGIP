import React, { useEffect, useState } from "react";
import { getAvatar } from "../helpers/api/fetchAvatar";
/**
 * function to get avatars corresponding to a user or contact name (while we dont have images in our db)
 * @param {string} name  the name of the contact/user/...
 * @returns {Avatar}
 */
export const Avatar = ({ name, width, height }) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const svg = await getAvatar(name);
      setAvatar(svg);
    };

    fetchAvatar();
  }, [name]);

  return (
    <div className={`${width} ${height}`}>
      {avatar && <div dangerouslySetInnerHTML={{ __html: avatar }} />}
    </div>
  );
};

