import axios from 'axios'


const CUSTOMERS_API_BASE_URL = 'http://localhost:8081/api/customers';

class CustomerService {

    getCustomers(){
        return axios.get(CUSTOMERS_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMERS_API_BASE_URL, customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMERS_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId){
        return axios.put(CUSTOMERS_API_BASE_URL + '/' + customerId, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMERS_API_BASE_URL + '/' + customerId);
    }

}

export default new CustomerService();