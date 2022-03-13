import axios from 'axios';

const axiosFactory = axios.create({
  //looks ugly but that came from requestBin (I've never used it before)
  baseURL: `https://eocm9r789d4ver3.m.pipedream.net`,
});

const checkoutAPI = {
  post: (url, payload) => {
    return axiosFactory.post(url, payload);
  },
  // More methods can be added if app evolves
};

export default checkoutAPI;
