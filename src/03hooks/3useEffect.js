import React, { useEffect } from 'react'

export default function UseEffect () {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => console.log(data))

  }, [])

  useEffect(() => { //call many times
    first

    return () => {
      second
    }
  }, [third])


  return (
    <>
    </>
  )
}
