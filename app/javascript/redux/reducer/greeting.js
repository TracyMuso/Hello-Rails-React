import axios from 'axios';

const API_URL = 'http://localhost:3000/api/greetings/random'
const GET_GREETINGS = 'GREETING'

const initialState = {
    greeting: []
}


export const setGreetings = (payload) => ({
    type: GET_GREETINGS,
    payload,
  })

export const fetchGreetings = () => (dispatch) => {
    axios.get(API_URL)
     .then(response => {
         dispatch(setGreetings(response.data));
     })
     .catch(error => {
         throw(error)
    })
}


const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GREETINGS:
        return action.payload;
        default:
        return state;
    }
};

export default greetingReducer;