/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/post',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
