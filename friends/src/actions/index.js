import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

//GET
export const getFriends = () => {
    return (dispatch) => {
      dispatch({ type: LOADING});
      
      axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
          dispatch({ type: GET_FRIENDS, friends: response.data })
      })
      .catch(err => {
          dispatch({ type: ERROR, errorMessage: 'Error fetching the friends data.'})
      })
    }
}

