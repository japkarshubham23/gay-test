import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             has: [
    //                 {
    //                     type: 'host',
    //                     value: 'mygaytest.com',
    //                 },
    //             ],
    //             permanent: true,
    //             destination: 'https://mygaytest.com/:path*',
    //         },
    //     ]
    // }
};

export default nextConfig;
