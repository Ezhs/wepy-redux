import { handleActions } from 'redux-actions'
import { SET_LOCATION_INFO } from '@/store/types/user'

export default handleActions({
  [SET_LOCATION_INFO] (state, action) {
    return {
      ...state,
      locationInfo: action.payload
    }
  }
}, {
  locationInfo: null
})
