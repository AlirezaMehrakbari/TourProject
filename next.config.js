/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true
    }
});
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['triptour.v1r.ir'],
    },
    webpack5: true,
    webpack: config => {
        config.resolve.fallback = {
            fs: false,
        };

        return config;
    },
}

module.exports = withPWA(nextConfig)
