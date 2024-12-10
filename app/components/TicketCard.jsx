import React from 'react'
import PropTypes from 'prop-types'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = ({ticket}) => {

  const formatTimestamp = (timestamp) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US', options)

    return formattedDate
  }

  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2' >
        <div className='flex mb-3' >
        <PriorityDisplay priority={ticket.priority} />
        <div className='ml-auto' >
        <DeleteBlock id={ticket._id}/>
        </div>
        </div>
        <h4>{ticket.title}</h4>
        <hr  className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>
            {ticket.description}
        </p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
            <div className='flex flex-col'>
                <p className='text-xs my-1' >{formatTimestamp( ticket.createdAt)}</p>
                <ProgressDisplay progress={ticket.progress} />
            </div>
            <div className='ml-auto flex items-end'>
        <StatusDisplay status={ticket.status} />
            </div>
        </div>
    </div>
  )
}
TicketCard.propTypes = {
  ticket: PropTypes.shape({
    priority: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
}

export default TicketCard
