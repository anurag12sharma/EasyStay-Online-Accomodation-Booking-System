'use client';

import React from 'react'
import Image from 'next/image';
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps{
  src: string | null | undefined
};

const Avatar:React.FC<AvatarProps>= ({
  src
}) => {
  return (
    src &&
    <Image
      className='rounded-full' height={30}  width={30}  alt='avatar' src={src}
    /> || <FaUserCircle size={30} color='gray'/>
    )
}

export default Avatar