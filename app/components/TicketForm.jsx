'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const TicketForm = () => {
    const router = useRouter()


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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
          const res = await fetch('/api/Tickets', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!res.ok) {
            throw new Error('Failed to create ticket');
          }
    
          router.refresh();
          router.push('/');
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

                <input 
                type="radio" 
                name="priority" 
                value="2" 
                onChange={handleChange} 
                checked={formData.priority == 2}
                id="priority-1"
                />
                <label>2</label>

                <input 
                type="radio" 
                name="priority" 
                value="3" 
                onChange={handleChange} 
                checked={formData.priority == 3}
                id="priority-3"
                />
                <label>3</label>

                <input 
                type="radio" 
                name="priority" 
                value="4" 
                onChange={handleChange} 
                checked={formData.priority == 4}
                id="priority-4"
                />
                <label>4</label>

                <input 
                type="radio" 
                name="priority" 
                value="5" 
                onChange={handleChange} 
                checked={formData.priority == 5}
                id="priority-5"
                />
                <label>5</label>


            </div>
                <label htmlFor="">Progress</label>
                <input type='range' name='progress' value={formData.progress} onChange={handleChange} id='progress' min='0' max='100' />
                <label htmlFor="">Status</label>
                <select name="status" value={formData.status} onChange={handleChange} id="">
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" className='btn' value="Create Ticket" />
        </form>
    </div>
  )
}

export default TicketForm