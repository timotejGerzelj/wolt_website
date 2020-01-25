export const initialState = {
  data: {
    restaurants: [],
  },
  loading: false,
  error: false,
  sort: false
}

export const actions = {
  INIT: "restaurantsAPI/default",
  SUCCESS: "restaurantsAPI/success",
  FAILURE: "restaurantsAPI/failure",
  DESCENDING: "restaurantsAPI/descending",
  ASCENDING: "restaurantsAPI/ascending"
}

export function reducer(state, action) {
  switch (action.type) {
    case actions.INIT:
      return {
        ...state,
        loading: true,
        error: false,
        sort: false
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
      case actions.ASCENDING:
        return {
          ...state,
          data : {
            restaurants: state.data.restaurants.sort((obj1, obj2) => obj1.name > obj2.name ? 1 : -1), 
          } ,
          sort: "ASC"
        }
        case actions.DESCENDING:
          return {
            ...state,
            data : {
              restaurants: state.data.restaurants.sort((obj1, obj2) => obj1.name < obj2.name ? 1 : -1 ), 
            }, 
            sort: "DESC"
          }
  }
}