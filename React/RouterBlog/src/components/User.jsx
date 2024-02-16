import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div>
        <h1 className='text-center text-3xl text-orange-700 p-5'>User : {id}</h1>
    </div>
  )
}

export default User