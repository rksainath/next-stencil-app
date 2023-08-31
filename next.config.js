/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src *; script-src 'self'; frame-ancestors 'self';",
          },
        ],
      },
    ];
  }, */
};

module.exports = nextConfig;
