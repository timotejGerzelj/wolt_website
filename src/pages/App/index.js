import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [data, setData] = useState({ restaurants: [] })
  const [loading, setIsLoading] = useState(false)
  const [error, updateError] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const res = await axios("https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json")
        console.log(res)
        setData(res.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <ul>
        {data.restaurants.map((restaurant) => (
          <li>
            <div>
              {restaurant.city},{restaurant.delivery_price},{restaurant.name}
            </div>
          </li>
        ))}
      </ul>
      );
    </Fragment>
  )
}

export default App
