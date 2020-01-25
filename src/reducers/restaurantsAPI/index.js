export const initialState = {
  data: {
    restaurants: [],
  },
  loading: false,
  error: false,
}

export const actions = {
  INIT: "restaurantsAPI/default",
  SUCCESS: "restaurantsAPI/success",
  FAILURE: "restaurantsAPI/failure",
}

export function reducer(state, action) {
  switch (action.type) {
    case actions.INIT:
      return {
        ...state,
        loading: true,
        error: false,
      }
      break
    case actions.SUCCESS:
      return {
        ...state,
        data: { restaurants: action.payload.restaurants },
        loading: false,
        error: false,
      }
      break
    case actions.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }
      break
  }
}
