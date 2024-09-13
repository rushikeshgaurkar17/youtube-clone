import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img
                onClick={() => toggleMenuHandler()}
                className='h-8 cursor-pointer'
                alt='menu'
                src='https://as2.ftcdn.net/v2/jpg/03/73/49/85/1000_F_373498598_uPMOSdPe6Ul7dxCaHqMub3mYqtY4S02D.jpg'
            >
            </img>
            <img 
                className='h-8 mx-2'
                alt='logo'
                src='http://1000logos.net/wp-content/uploads/2017/05/Old-YouTube-logo.jpg'
            />
        </div>
        <div className='col-span-10 ml-8'>
            <input className='w-1/2 px-10  border border-gray-400 p-2 rounded-l-full' type='text' />
            <button className=' border border-gray-400 p-2 rounded-r-full bg-gray-200'>Search</button>
        </div>
        <div className='col-span-1'>
            <img 
                className='h-8'
                alt='user-icon'
                src='https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180'></img>
        </div>
    </div>
  )
}

export default Head