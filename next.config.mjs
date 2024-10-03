/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://prabhatech.com/cleanstar_backend/' // Replace with your backend URL
            }
        ];
    }
};

export default nextConfig;
