const nextConfig = {
  reactStrictMode: true, // Enforces strict mode in React
}

// Export the nextConfig
module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    // Enable HMR only in development mode
    if (!isServer && process.env.NODE_ENV === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }

    return config;
  },
};
