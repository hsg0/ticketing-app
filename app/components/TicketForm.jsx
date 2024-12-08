'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const TicketForm = () => {

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        e.preventDefault()
        console.log("Form Submitted")
    }
        

    const startingTicketData = {
        title: '',
        description: '',
        priority: '1',
        progress: '0',
        status: 'not started',
        category: 'Hardware Problem',   
    }

    const [formData, setFormData] = useState(startingTicketData)

  return (
    <div className='flex justify-center' >
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 w-1/2 ' method='post'>
            <h3>Create Your Ticket</h3>
            <label htmlFor="">Title</label>
            <input id='title' name='title' onChange={handleChange} required={true} value={formData.title} type="text"  />

            <label htmlFor="">Description</label>
            <textarea 
            id='description' 
            name='description' 
            onChange={handleChange} 
            required={true} 
            value={formData.description}  
            rows="5"
            ></textarea>
            <label htmlFor="">Category</label>
            <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            id=""
            >
                <option value="Hardware Problem">Hardware Problem</option>
                <option value="Software Problem">Software Problem</option>
                <option value="Network Problem">Network Problem</option>
                <option value="Other">Other</option>

            </select>

            <label htmlFor="">Priority</label>
            <div>
                <input 
                type="radio" 
                name="priority" 
                value="1" 
                onChange={handleChange} 
                checked={formData.priority == 1}
                id="priority-1"
                />
                <label>1</label>
            </div>

        </form>
    </div>
  )
}

export default TicketForm