export default function reducer(state = {
  data: [],
  requestSuccess: false,
  requestPending: false,
  requestFail: false
}, action) {
  switch (action.type) {
    case "ACTION_PENDING": {
      console.log("action pending")
      return { ...state, requestPending: true }
    }
    case "ACTION_SUCCESS": {
      console.log("action sucess")
      return { ...state, requestPending: false, requestSuccess: true, data: action.payload }
    }
    case "ACTION_FAIL": {
      console.log("action fail")
      return { ...state, requestPending: false, requestFail: true, requestSuccess: false }
    }

  }
  return state;
}
