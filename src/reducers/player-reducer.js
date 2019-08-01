import { GET_PLAYER } from '../actions/types.js';

const initialState = {
  cell: '',
  dob: null,
  email: '',
  gender: '',
  id: null,
  firstName: '',
  lastName: '',
  nat: '',
  picture: '',
  points: '',
  rebounds: ''
};

const player = (state = initialState, action) => {
  switch (action.type) {

      case GET_PLAYER: {
        return {
          cell: action.payload.cell,
          dob: {...action.payload.dob},
          email: action.payload.email,
          gender: action.payload.gender,
          location: {...action.payload.location},
          firstName: action.payload.name.first,
          lastName: action.payload.name.last,
          nat: action.payload.nat,
          picture: action.payload.picture.large,
          points: action.payload.registered.age,
          rebounds: action.payload.dob.age
        };
      }

      default: {
        return state;
      }
    }
  };

export default player;
