import React from 'react'

export const VideoCard = ({info}) => {
    const {snippet, statistics} =  info
    const {channelTitle,title,thumbnails}= snippet
  return (
    <div className='p-2 w-72 m-2 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='img'></img>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}
