import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXowaXhmY3I2bGNzbGtwM3p3cHIwcmY5cDd6anV3Mzl2OTFqZHB1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v3JSLHw6YTE2CK8kzR/giphy.gif")],
  }
};

export default nextConfig;
