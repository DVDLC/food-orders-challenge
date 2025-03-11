import 'dotenv/config';

export default {
  API_GATEWAY_PORT: process.env.API_GATEWAY_PORT,
  ORDERS: {
    PORT: process.env.ORDERS_PORT,
    HOST: process.env.HOST,
  },
};
