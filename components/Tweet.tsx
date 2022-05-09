import React from 'react'
import { Tweet } from '../typings';


interface Props{
    tweet: Tweet
  }

function Tweet({tweet}:Props) {
  return (
    <div>
        <div>
            <img src={tweet.profileImg} alt="" />
        </div>
    </div>
  )
}

export default Tweet