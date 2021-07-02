import { DEV_BACKEND_API_URL, PROD_BACKEND_API_URL } from '@env';

const devEnvironmentVariables = {
    DEV_BACKEND_API_URL,
};

const prodEnvironmentVariables = {
    PROD_BACKEND_API_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;



