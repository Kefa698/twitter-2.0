import React from 'react'

import {BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon,HomeIcon} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='m-3 flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img className='h-10 w-10' src="https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-icon-symbol-0.png" alt="" />

      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notification' />
      <SidebarRow Icon={MailIcon} title='Message' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={CollectionIcon} title='List' />
      <SidebarRow Icon={UserIcon} title='SignIn' />
    </div>
  )
}

export default Sidebar