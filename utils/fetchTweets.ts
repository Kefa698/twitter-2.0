import { Tweet } from "../typings";

export const fetchTweets=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getTweets`)
    const data=await res.json();
    const tweets:Tweet[]=data.tweets;
    
    return tweets
}