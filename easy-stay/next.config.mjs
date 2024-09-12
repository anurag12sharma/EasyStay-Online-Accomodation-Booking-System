/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
    },
    images: {
        domains:[
            "avatar.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
};

export default nextConfig;
