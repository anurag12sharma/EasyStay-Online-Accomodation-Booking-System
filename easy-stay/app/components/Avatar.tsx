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
    <FaUserCircle size={30} color='gray'/>
  )
}

export default Avatar