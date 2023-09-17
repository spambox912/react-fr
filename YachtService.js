import axios from 'axios'


const YACHTS_API_BASE_URL = 'http://localhost:8081/api/yachts';

class YachtService {

    getYachts(){
        return axios.get(YACHTS_API_BASE_URL);
    }

    createYacht(yacht){
        return axios.post(YACHTS_API_BASE_URL, yacht);
    }

    getYachtById(yachtId){
        return axios.get(YACHTS_API_BASE_URL + '/' + yachtId);
    }

    updateYacht(yacht, yachtId){
        return axios.put(YACHTS_API_BASE_URL + '/' + yachtId, yacht);
    }

    deleteYacht(yachtId){
        return axios.delete(YACHTS_API_BASE_URL + '/' + yachtId);
    }

}

export default new YachtService();