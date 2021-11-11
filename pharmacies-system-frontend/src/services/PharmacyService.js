import axios from 'axios'

const PHARMACY_API_BASE_URL = "http://localhost:8080/pharmacy"

class PharmacyService{

    getPharmacies(){
        return axios.get(PHARMACY_API_BASE_URL);
    }
}

export default new PharmacyService()