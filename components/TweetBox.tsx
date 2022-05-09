import React, { useState } from 'react'
import {CalendarIcon,EmojiHappyIcon,LocationMarkerIcon,PhotographIcon,SearchCircleIcon} from '@heroicons/react/outline'

function TweetBox() {
    const [Input, setInput] = useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
        <img className='h-14 w-14 rounded-full object-cover mt-4' src="https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1657756800&v=beta&t=u1hUPJZXiY3UfS12eXZp7SuRTiCIxBQqc5DQyt3hhWA" alt="" />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                value={Input}
                onChange={e=>setInput(e.target.value)}
                className='h-24 w-full text-xl outline-none placeholder:text-xl' type="text" placeholder="what's happening?" />
                <div className='flex items-center'>
                    <div className='flex space-x-2 text-twitter flex-1'>
                    <PhotographIcon className='w-5 h-5 cursor-pointer transition transform duration-200 ease-out hover:scale-150' />
                       <SearchCircleIcon className='w-5 h-5' />
                       <EmojiHappyIcon className='w-5 h-5' />
                       <CalendarIcon className='w-5 h-5' />
                       <LocationMarkerIcon className='w-5 h-5'/>
                    </div>
                    <button
                    disabled={!Input}
                    className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox