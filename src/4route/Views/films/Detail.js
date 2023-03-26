import React, { useEffect } from 'react'

export default function Detail (props) {
  //console.log('props in Detail', props)
  useEffect(() => {
    console.log('create')

    return () => {
      console.log('destroy')
    }
  }, [])

  return (
    <div>Detail ID: {props.match.params.myid}</div>
  )
}
