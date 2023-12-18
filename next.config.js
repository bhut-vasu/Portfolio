/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "img.icons8.com",
      "e7.pngegg.com",
      'expandedramblings.com',
      'cdn3.iconfinder.com',
      "raw.githubusercontent.com",
      "i.imgur.com",
      "img.freepik.com",
      "media.geeksforgeeks.org",
    ],
  },
};

module.exports = nextConfig;
