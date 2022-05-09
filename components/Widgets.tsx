import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from 'react'

function Widgets() {
  return (
    <div className='p-2 mt-2 col-span-2 hidden lg:inline'>
        {/* searchbox */}
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
            <SearchIcon className='h-5 w-5 text-gray-400' />
            <input type='text' placeholder='Search Twitter' className='bg-transparent flex-1 outline-none'/>
        </div>
        <TwitterTimelineEmbed
         sourceType="profile"
          screenName="kefaisaboke"
           options={{height: 1000}}
         />
    </div>
  )
}

export default Widgets