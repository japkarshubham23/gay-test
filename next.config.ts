import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
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
