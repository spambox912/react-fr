import axios from 'axios'

const RESERVATIONS_API_BASE_URL = 'http://localhost:8081/api/reservations';

class ReservationService {

    getReservations(){
        return axios.get(RESERVATIONS_API_BASE_URL);
    }

    createReservation(reservation){
        return axios.post(RESERVATIONS_API_BASE_URL, reservation);
    }

    getReservationById(reservationId){
        return axios.get(RESERVATIONS_API_BASE_URL + '/' + reservationId);
    }

    updateReservation(reservation, reservationId){
        return axios.put(RESERVATIONS_API_BASE_URL + '/' + reservationId, reservation);
    }

    deleteReservation(reservationId){
        return axios.delete(RESERVATIONS_API_BASE_URL + '/' + reservationId);
    }
}

export default new ReservationService();