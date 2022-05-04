import config from "../config";
import axios from 'axios';

class PhotoService {
    getRandomPhoto() {
        return axios.get(config.baseURL, { params: { client_id: config.clientID } });
    };
};

export default new PhotoService();