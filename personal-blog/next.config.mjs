import million from "million/compiler";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: __dirname,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
                port: '',
                pathname: '/icons/**',
            },
        ],
    },
}

const millionConfig = {
    auto: true,// if you're using RSC: auto: { rsc: true },
  };

export default million.next(nextConfig, millionConfig);