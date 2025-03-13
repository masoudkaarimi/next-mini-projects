const path = require("path");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    buildExcludes: ["app-build-manifest.json"],
    fallbacks: {
        document: "/offline",
        image: "/fallback.png",
        // font: '/static/font/fallback.woff2',
        // audio: ...,
        // video: ...,
    },
});

const generateAppDirEntry = (entry) => {
    const packagePath = require.resolve("next-pwa");
    const packageDirectory = path.dirname(packagePath);
    const registerJs = path.join(packageDirectory, "register.js");

    return entry().then((entries) => {
        if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
            if (Array.isArray(entries["main-app"])) {
                entries["main-app"].unshift(registerJs);
            } else if (typeof entries["main-app"] === "string") {
                entries["main-app"] = [registerJs, entries["main-app"]];
            }
        }
        return entries;
    });
};

/** @type {import("next").NextConfig} */
const nextConfig = withPWA({
    reactStrictMode: true,
    ...(process.env.NODE_ENV !== "development" && {
        webpack: (config) => {
            const entry = generateAppDirEntry(config.entry);
            config.entry = () => entry;

            return config;
        },
    }),
    images: {
        domains: ["googleusercontent.com", "oaidalleapiprodscus.blob.core.windows.net", "cdn.openai.com"],
    },
});

module.exports = nextConfig;
