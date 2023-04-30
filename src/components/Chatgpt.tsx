import React, {FormEvent, useState} from 'react'

const Chatgpt = () => {

    const [prompt, setPrompt] = React.useState('')

    const sendMessage = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return
        
        const input = prompt.trim
        setPrompt('')

        
    }

    return (
        <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none py-2'>
            <form className='flex p-5 space-x-5' onSubmit={sendMessage}>
                <input 
                    className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 w-1/2'
                    type="text" 
                    value={prompt}
                    onChange={(e) => e.target.value}
                    placeholder='type your message here.'
                />
                <button 
                    className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-2 py-4 rounded disabled:bg-gray-300'
                    type='submit'
                >
                    Submit
                </button>
            </form>
            <div className='bg-gray-700/50 h-24 text-[1rem] p-5'>
                reply
            </div>
            
        </div>
    )
}

export default Chatgpt