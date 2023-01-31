const env = process.env.NODE_ENV;
const baseUrl = env === 'development' ? 'http://localhost:3030' : '';
const configs = {
    baseUrl
};

export default configs;
