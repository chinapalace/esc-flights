export default function reducer(state = {
  data: [],
  requestSuccess: false,
  requestPending: false,
  requestFail: false
}, action) {
  switch (action.type) {
    case "ACTION_PENDING": {
      return { ...state, requestPending: true }
    }
    case "ACTION_SUCCESS": {
      return { ...state, requestPending: false, requestSuccess: true, data: action.payload }
    }
    case "ACTION_FAIL": {
      return { ...state, requestPending: false, requestFail: true, requestSuccess: false }
    }

  }
  return state;
}
