import React, { Fragment, useState, useEffect, useReducer } from "react"
import axios from "axios"

export function useRestaurantsAPI() {
  const [data, setData] = useState({ restaurants: [] })
  const [loading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const res = await axios("https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json")
        setData(res.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return {
    restaurants: data.restaurants,
    loader: loading,
    error: isError,
  }
}
