import _ from 'lodash';

import { FETCH_CURRENT_LOCATION, CHANGE_CURRENT_LOCATION } from '../actions/types';

const initialState = {
  currentLocation: {
    id: '', name: '', hasBinLocationSupport: true, locationType: { description: '', locationTypeCode: '' },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_LOCATION:
      return { ...state, currentLocation: _.get(action, 'payload.data.data.location') };
    case CHANGE_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
}
