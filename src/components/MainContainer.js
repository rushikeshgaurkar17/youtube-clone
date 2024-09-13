import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-11'>
        <ButtonsList></ButtonsList>
        <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer