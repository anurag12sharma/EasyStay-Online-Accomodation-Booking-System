'use client';

import React from 'react'
import Image from 'next/image';
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps{
  src: string | null | undefined
}

const Avatar:React.FC<AvatarProps>= ({
  src
}) => {
  return (
    <div>
      {src ? (
        <Image src={src} alt="Avatar" width={30} height={30} />
      ) : (
        <FaUserCircle size={30} color="gray" />
      )}
    </div>
  );
}

export default Avatar