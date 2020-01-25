import React, { useEffect, useReducer } from "react"
import axios from "axios"
import { initialState, actions, reducer } from "reducers/restaurantsAPI"

export function useReducedRestaurantAPI() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actions.INIT })
      try {
        const res = await axios("https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json")
        dispatch({ type: actions.SUCCESS, payload: res.data })
      } catch (error) {
        dispatch({ type: actions.FAILURE })
      }
    }
    fetchData()
  }, [])
  return {
    restaurants: state.data.restaurants,
    loader: state.loading,
    error: state.error,
  }
}
