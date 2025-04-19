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
};

export default nextConfig;
