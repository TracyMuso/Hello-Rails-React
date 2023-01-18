import axios from 'axios';

const API_URL = '/api/greetings'
const GET_GREETINGS = 'GREETING'

const initialState = {
    greeting: []
}

const setGreetings = (payload) => ({
    type: GET_GREETINGS,
    payload,
});

export const fetchGreetings = () => (dispatch) => {
    axios.get(API_URL)
     .then(response => {
   let data = response.data;
         dispatch(setGreetings(data));
         console.log(data)
     })
     .catch(error => {
         console.log(error)
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