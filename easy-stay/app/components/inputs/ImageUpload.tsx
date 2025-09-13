'use client';
import React, { useCallback } from 'react';
import {CldUploadWidget, CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo} from "next-cloudinary";
import { TbPhotoPlus } from 'react-icons/tb';
import Image from 'next/image';

interface CloudinaryUploadResult {
    info: {
      secure_url: string;
      [key: string]: unknown; // you can expand this as needed
    };
    [key: string]: unknown;
}

declare global{
    var cloudinary: unknown;
}

interface ImageUploadProps{
    onChange: (value: string) => void;
    value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {
    const handleUpload = useCallback((result: CloudinaryUploadWidgetResults) => {
        // result.info could be string, CloudinaryUploadWidgetInfo, or undefined
        if (result.info && typeof result.info === "object" && "secure_url" in result.info) {
          onChange((result.info as CloudinaryUploadWidgetInfo).secure_url);
        }
      }, [onChange]);

  return (
    <CldUploadWidget
        onSuccess={handleUpload}
        uploadPreset="fnoxbxsv"
        options={{
            maxFiles: 1
        }}
    >
        {({open})=>{
            return(
                <div
                    onClick={()=>open?.()}
                    className='
                        relative
                        cursor-pointer
                        hover:opacity-70
                        transition
                        border-dashed
                        border-2
                        p-20
                        border-neutral-300
                        flex
                        flex-col
                        justify-center
                        items-center
                        gap-4
                        text-neutral-600
                    '
                >
                    <TbPhotoPlus size={50}/>
                    <div className='font-semibold text-lg'>
                        Click to Upload
                    </div>
                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image
                                alt='Upload'
                                fill
                                style={{objectFit:'cover'}}
                                src={value}
                            />
                        </div>
                    )}
                </div>
            )
        }}
    </CldUploadWidget>
  );
};

export default ImageUpload;