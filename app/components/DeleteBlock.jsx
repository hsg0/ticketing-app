'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

const DeleteBlock = ({id}) => {

  const router = useRouter()

  const deleteTicket = async ( ) => {
    const res = fetch(`http://localhost:3000/Tickets/${id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      router.refresh()
    }
  }

  return (
      <FontAwesomeIcon onClick={deleteTicket} icon={faTimes} className='text-red-400 hover:cursor-pointer hover:text-red-200' />
  )
}

export default DeleteBlock